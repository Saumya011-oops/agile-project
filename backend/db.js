const mongoose = require("mongoose");

const mongooseUrl = "mongodb://127.0.0.1:27017/hpstore";

const con = async () => {
  try {
    await mongoose.connect(mongooseUrl);
    console.log("Connection Success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = con;