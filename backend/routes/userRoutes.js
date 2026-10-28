

const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        mobilenumber: req.body.mobilenumber,
        password: secPass,
      });
      const data = {
        user: { id: user.id }
      }
      const jwtdata = jwt.sign(data, JWT_SECRET)
      console.log(jwtdata);

      res.json(user);
    } catch (error) {
      console.error(error.message);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }

  }
);
router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').exists(),
  ], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "try with valid user credintials " });
      }
      const passcom = await bcrypt.compare(password, user.password);
      if (!passcom) {
        return res.status(400).json({ errors: "try with valid user credintials " });

      }
      const data = {
        user: { id: user.id }
      }
      
      const jwtdata = jwt.sign(data, JWT_SECRET)
      console.log(jwtdata);
      res.json({
        success: true,
        token: jwtdata,
  user: {
    _id: user._id,
          name: user.name,
          email: user.email,
          mobilenumber: user.mobilenumber
     } });

    } catch (error) {
      console.error(error.message);

      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }

   



  })

module.exports = router;