import { useNavigate } from "react-router-dom";
export default function Cart({ cart, setCart, showAlert}) {
  const remove = (id) => {
    const update = cart.filter(
      (item) => item.id !== id
    );
    setCart(update)
    showAlert("Product removed from cart", "success");
  }
  console.log(cart);
 const total = cart.reduce(
  (sum, item) =>
    sum + item.price * (item.quantity || 1),
  0
);

const nav = useNavigate();

const handlePay = () => {
  if (localStorage.getItem("token")) {
    nav("/pay");
  } else {
    localStorage.setItem("redirectAfterLogin", "/pay");
    nav("/login");
  }
};
  return (
    <div className="container mt-4 text-dark">

      

      {cart.length === 0 ? (
       <div
    className="text-center py-5"
    style={{ minHeight: "70vh" }}
  >
    <div
      className="card mx-auto shadow-lg border-0"
      style={{
        maxWidth: "650px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        color: "white"
      }}
    >
      <div className="card-body p-5 text-dark">

        <h1 className="display-4 mb-3 text-dark">
          🛒 Shopping Cart
        </h1>

        <h3>
          Your Cart is Empty
        </h3>

        <p className="lead mt-3">
          Looks like you haven't added any products yet.
        </p>

        <p className="text-light">
          Browse our collection and add your favorite items to your cart.
        </p>

        <a
          href="/"
          className="btn btn-success btn-lg mt-3"
        >
          🛍️ Continue Shopping
        </a>

      </div>
    </div>
  </div>
      ) : (
        <div className="row">

          {cart.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>

              <div className="card h-80 bg-dark text-white  " style={{ width : "12rem" }}>

                <img
                  src={item.thumbnail}
                  className="card-img-top h-50 "
                  alt={item.title}
                  style={{

                    height: "80px",
                    objectFit: "cover",

                  }}
                />

                <div className="card-body p-1">

                  <span>
      {item.title}
      <br />
      <small className="text-info">
        Qty: {item.quantity || 1}
      </small>
    </span>


                  <h4>₹{item.price}</h4>
                  <button className="btn btn-danger btn-sm w-100 mb-2" onClick={() => remove(item.id)}>Remove</button>
                 {/* <button className="btn btn-warning btn-sm w-100 mb-2">Buy now</button> */}

                </div>
                <div className="d-flex justify-content-center align-items-center mb-2">
  
  <button
    className="btn btn-sm btn-success"
    onClick={() =>
      setCart(
        cart.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: (p.quantity || 1) + 1,
              }
            : p
        )
      )
    }
  >
    +
  </button>

  <span className="mx-3">
    {item.quantity || 1}
  </span>

  <button
    className="btn btn-sm btn-danger"
    onClick={() =>
      setCart(
        cart.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: Math.max(
                  1,
                  (p.quantity || 1) - 1
                ),
              }
            : p
        )
      )
    }
  >
    - 
  </button>

</div>


              </div>


            </div>
          ))}
        
<div className="card mt-4 bg-dark text-white">
  <div className="card-body">

    <h3 className="card-header text-primary text-center ">
      Total of Your Cart
    </h3>

   {cart.map((item) => (
  <div
    key={item.id}
    className="border-bottom py-3"
  >
    <div className="d-flex justify-content-between">
      <h5>{item.title}</h5>

      <h5 className="text-success">
        ₹{(
          item.price *
          (item.quantity || 1)
        ).toFixed(2)}
      </h5>
    </div>

    <small className="text-light">
      Price: ₹{item.price}
    </small>

    <br />

    <small className="text-info">
      Quantity: {item.quantity || 1}
    </small>
  </div>
))}
    <hr />

    <h4 className="text-end">
      Total: ₹{total.toFixed(2)}
    </h4>
    <h4>Apply code for discount</h4>
    
    

    <div className="text-center mt-3">
      <button className="btn btn-success" onClick={handlePay} >
        Check Out
      </button>
    </div>

  </div>
</div>
        </div>

      )}

    </div>
  );
}