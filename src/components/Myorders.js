import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
   console.log("USER =", user);
    if (!user?._id) return;

    const token = localStorage.getItem("token");

    axios
      .get(
        `http://localhost:3005/api/ode/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-dark mb-4">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <div className="alert alert-info">
          <h5>No Orders Found</h5>
          <Link
        className="btn btn-primary rounded-pill mx-0 mt-2"
        to="/"> Buy and Place Order
    
      </Link>
        </div>
      ) : (
        orders.map((order) => (
          <div
            className="card mb mt-3 shadow"
            key={order._id}
          >
            <div className="card-body p-2">

             <div style={{ lineHeight: "1.4" }}>
  <div>
    <strong>Date:</strong> {new Date(order.orderDate).toLocaleDateString()}
  </div>

  <div>
    <strong>Payment:</strong> {order.paymentMethod}
  </div>

  <div>
    <strong>Total:</strong> ₹{order.totalAmount}
  </div>
</div>

              <hr />

              <h6>Products:</h6>
<div className="row">
  {order.products.map((item, index) => (
    <div
      key={index}
      className="col-md-3 mb-2"
    >
      <div
        className="border rounded p-2"
        style={{
          fontSize: "13px"
        }}
      >
        <strong>{item.title}</strong>
        <br />
        ₹{item.price}
        <br />
        Qty: {item.quantity || 1}
      </div>
    </div>
  ))}
</div>
              {/* {order.products.map((item, index) => (
                <div
                  key={index}
                  className="border rounded p-2 mb-2"
                >
                  <p>
                    <strong>Name:</strong>
                    {" "}
                    {item.title}
                  </p>

                  <p>
                    <strong>Price:</strong>
                    {" "}
                    ₹{item.price}
                  </p>

                  <p>
                    <strong>Quantity:</strong>
                    {" "}
                    {item.quantity}
                  </p>
                </div>
              ))} */}
              

            </div>
          </div>
        ))
      )}
    </div>
  );
}