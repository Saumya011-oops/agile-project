const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  products: [
    {
      productId: Number,
      title: String,
      price: Number,
      quantity: Number
    }
  ],

  totalAmount: Number,



  paymentId: String,

  paymentStatus: {
    type: String,
    default: "Paid"
  },

  address: {

    fname: String,

    lname: String,

    city: String,

    state: String,

    zip: String

  },

  orderDate: {
    type: Date,
    default: Date.now
  }

});

module.exports =
  mongoose.model(
    "Order",
    OrderSchema
  );