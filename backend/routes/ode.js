const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const auth = require("../middleware/auth");

// Create an order for the LOGGED-IN user only.
// The userId always comes from the verified JWT (req.user.id), never from
// the request body — otherwise anyone could place an order under someone
// else's account just by editing the request.
router.post("/", auth, async (req, res) => {
  try {
    const order = new Order({
      ...req.body,
      userId: req.user.id,
    });

    await order.save();

    res.json({
      success: true,
      message: "Order Saved"
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// Return orders for the LOGGED-IN user only.
// Even though the URL still carries :userId (so existing frontend calls
// keep working), we refuse the request unless it matches the token's
// user id — otherwise anyone could read anyone else's order history just
// by guessing/knowing a user id.
router.get("/:userId", auth, async (req, res) => {
  try {
    if (req.user.id !== req.params.userId) {
      return res.status(403).json({ error: "You can only view your own orders." });
    }

    const orders = await Order.find({
      userId: req.params.userId
    });

    res.json(orders);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
