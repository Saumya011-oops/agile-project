import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

export default function Payment({ cart,setCart, showAlert }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [zip, setZip] = useState("");
  const [agree, setAgree] = useState(false);
  const nav = useNavigate();

  const checkPincode = async (pincode) => {
    try {
      const res = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      const data = await res.json();

      if (
        data[0].Status === "Success"
      ) {
        showAlert(
          `Valid Pincode: ${data[0].PostOffice[0].District}`
        );
        return true;
      } else {
        showAlert("Invalid Pincode", "Danger");
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };





  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handlePayment = async (e) => {

    e.preventDefault();

    const validPincode =
      await checkPincode(zip);

    if (!validPincode) {
      showAlert(
        "Invalid Pincode",
        "Danger"
      );
      return;
    }

    const validState =
      states.some(
        (state) =>
          state.toLowerCase() ===
          stateName
            .trim()
            .toLowerCase()
      );

    if (!validState) {
      showAlert(
        "Please enter a valid Indian state",
        "Danger"
      );
      return;
    }

    if (
      !fname ||
      !lname ||
      !city ||
      !stateName ||
      !zip ||
      !agree
    ) {
      showAlert(
        "Please fill complete address details",
        "Danger"
      );
      return;
    }

    try {

      const totalAmount =
        cart.reduce(
          (sum, item) =>
            sum +
            item.price *
            (item.quantity || 1),
          0
        );

      const order =
        await axios.post(
          "http://localhost:3005/api/payment/create-order",
          {
            amount: totalAmount
          }
        );

      const options = {

        key:
          "rzp_test_T2dQc59p3WLY3l",

        amount:
          order.data.amount,

        currency:
          order.data.currency,

        order_id:
          order.data.id,

        name:
          "HP Store",

        description:
          "Product Payment",

        handler:
          async function (
            response
          ) {
            const token = localStorage.getItem("token");

            await axios.post(
              "http://localhost:3005/api/ode",
              {
                userId: user._id,

                products: cart,

                totalAmount,

                paymentMethod:
                  "Razorpay",

                paymentId:
                  response.razorpay_payment_id,

                paymentStatus:
                  "Paid",

                address: {

                  fname,

                  lname,

                  city,

                  state:
                    stateName,

                  zip

                }
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            localStorage.setItem(
    "lastorders",
    JSON.stringify(cart)
  );

  // CLEAR CART
  localStorage.setItem(
    "cart",
    JSON.stringify([])
  );

            showAlert(
              "Payment Successful",
              "success"
            );

            nav(
              "/invoice"
            );
          },

        theme: {
          color:
            "#2563eb"
        }
      };

      const razorpay =
        new window.Razorpay(
          options
        );

      razorpay.open();

    } catch (error) {

      console.log(
        error
      );

      showAlert(
        "Payment Failed",
        "Danger"
      );
    }
  };

  return (
    <div className="container mt-4">

      <div className="card p-3 shadow mx-auto bg-dark text-white">

        <h2 className="text-center">
          Delivery Address
        </h2>

      </div>

      <div className="card p-3 shadow mx-auto bg-dark text-white mt-3">

        <h3 className="text-center">
          Enter Details For Address
        </h3>

        <form className="row g-3">

          <div className="col-md-6">
            <label
              htmlFor="fname"
              className="form-label"
            >
              First Name
            </label>

            <input
              type="text"
              className="form-control"
              value={fname}
              onChange={(e) =>
                setFname(e.target.value)
              }
            />
          </div>

          <div className="col-md-6">
            <label
              htmlFor="lname"
              className="form-label"
            >
              Last Name
            </label>

            <input
              type="text"
              className="form-control"
              value={lname}
              onChange={(e) =>
                setLname(e.target.value)
              }
            />
          </div>

          <div className="col-md-6">
            <label
              htmlFor="city"
              className="form-label"
            >
              City
            </label>

            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            />
          </div>

          <div className="col-md-6">
            <label
              htmlFor="state"
              className="form-label"
            >
              State
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter State"
              value={stateName}
              onChange={(e) =>
                setStateName(e.target.value)
              }
            />
          </div>

          <div className="col-md-6">
            <label
              htmlFor="zip"
              className="form-label"
            >
              Zip Code
            </label>

            <input
              type="text"
              className="form-control"
              value={zip}
              onChange={(e) =>
                setZip(e.target.value)
              }
            />
          </div>

          <div className="col-12">

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                checked={agree}
                onChange={(e) =>
                  setAgree(
                    e.target.checked
                  )
                }
              />

              <label
                className="form-check-label"
              >
                Agree to Terms &
                Conditions
              </label>

            </div>

          </div>

          <div className="col-12">

            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handlePayment}
            >
              Proceed To Payment
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}