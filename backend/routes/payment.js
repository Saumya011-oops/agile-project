const express = require("express");
const router = express.Router();

const razorpay =
  require("../config/razorpay");

router.post(
  "/create-order",
  async (req, res) => {

    try {

      const options = {
        amount:
          req.body.amount * 100,
        currency: "INR",
      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.status(200).json(
        order
      );

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Order creation failed"
      });

    }
  }
);

module.exports = router;