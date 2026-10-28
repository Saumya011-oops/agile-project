export default function Wishlist({
  wishlist,
  setWishlist,
  cart,
  setCart
}) {

  const removeWishlist = (id) => {
    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );
    alert("Product Removed from wishlist")
  };

  const moveToCart = (item) => {

    const exists = cart.find(
      (p) => p.id === item.id
    );

    if (!exists) {
      setCart([...cart, item]);
    }

    alert("added in cart")

    setWishlist(
      wishlist.filter(
        (p) => p.id !== item.id
      )
    );
  };
   const user = JSON.parse(localStorage.getItem("user"));
const username = user?.name;

  return (
    <div className="container mt-4">
    

     {wishlist.length === 0 ? (
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
      <div className="card-body p-5 text-center text-dark">

        <h1 className="display-4 mb-3">
         My Wishlist
        </h1>

        <h3>
          Welcome Back, {username}! 👋
        </h3>

        <p className="lead mt-3">
          Your wishlist is currently empty.
        </p>

        <p className="text-light">
          Save your favorite products and
          purchase them whenever you're ready.
        </p>

        <a
          href="/"
          className="btn btn-danger btn-lg mt-3"
        >
          🛍️ Explore Products
        </a>
         <a
          href="/cart"
          className="btn btn-danger btn-lg mx-2 mt-3"
        >
        Go to cart
        </a>

      </div>
    </div>
  </div>
) : (
        <div className="row">

          {wishlist.map((item) => (

            <div
              className="col-md-4 mb-3"
              key={item.id}
            >

              <div className="card h-100">

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    
                  }}
                />

                <div className="card-body">

                  <h5>{item.title}</h5>

                  <h6>₹{item.price}</h6>

                  <button
                    className="btn btn-success w-100 mb-2"
                    onClick={() =>
                      moveToCart(item)
                    }
                  >
                    🛒 Move To Cart
                  </button>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() =>
                      removeWishlist(item.id)
                    }
                  >
                    ❌ Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}
    </div>
  );
}