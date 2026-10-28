import { Link } from "react-router-dom";
export default function Invoice() {
    //const nav =useNavigate();
  const today = new Date().toLocaleDateString();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const paymentMethod =
    localStorage.getItem("paymentmethod") || "Not Selected";

  const order =
    JSON.parse(localStorage.getItem("lastorders")) || [];

  const invoiceNo = `INV${Date.now()}`;

  const subtotal = order.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  return (
    <div className="container my-5">
      <div className="card shadow p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="text-primary">HP MART</h2>
            <p className="mb-0">Ahmedabad, Gujarat</p>
          </div>

          <div className="text-end">
            <h4>INVOICE</h4>
            <p className="mb-0">
              Invoice No: {invoiceNo}
            </p>
            <p className="mb-0">
              Date: {today}
            </p>
          </div>
        </div>

        <hr />

        {/* Customer Details */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h5>Customer Details</h5>

            <p className="mb-1">
              <strong>Name:</strong> {user.name}
            </p>

            <p className="mb-1">
              <strong>Email:</strong> {user.email}
            </p>

            <p className="mb-1">
              <strong>Mobile:</strong> {user.mobilenumber}
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <h5>Payment Details</h5>

            <p className="mb-1">
              <strong>Method:</strong>{" "}
              {paymentMethod}
            </p>

            <p className="mb-1 text-success">
              <strong>Status:</strong> Paid
            </p>
          </div>
        </div>

        {/* Products Table */}
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {order.length > 0 ? (
              order.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{item.title}</td>

                  <td>{item.quantity || 1}</td>

                  <td>₹{item.price}</td>

                  <td>
                    ₹
                    {item.price *
                      (item.quantity || 1)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Summary */}
        <div className="row justify-content-end">
          <div className="col-md-4">
            <table className="table">
              <tbody>
                <tr>
                  <th>Subtotal:</th>
                  <td>
                    ₹{subtotal.toFixed(2)}
                  </td>
                </tr>

                <tr>
                  <th>GST (18%):</th>
                  <td>
                    ₹{gst.toFixed(2)}
                  </td>
                </tr>

                <tr className="table-success">
                  <th>Grand Total:</th>
                  <td>
                    ₹{grandTotal.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary me-2"
            onClick={() => window.print()}
          >
            Download Invoice
          </button>

          <button
            className="btn btn-success"
            onClick={() => window.print()}
          >
            Print Invoice
          </button>
          <Link className="btn btn-danger mx-2" to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}