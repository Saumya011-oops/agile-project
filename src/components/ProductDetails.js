import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function ProductDetails({cart,setCart,showAlert}) {

    const [product, setProduct] = useState({});
    const nav = useNavigate();

    const { id } = useParams();
    useEffect(() => {
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((res) => {

      setProduct(res.data);

      let recent =
        JSON.parse(localStorage.getItem("recent")) || [];

      recent = recent.filter(
        (p) => p.id !== res.data.id
      );

      recent.unshift(res.data);

      localStorage.setItem(
        "recent",
        JSON.stringify(recent.slice(0, 5))
      );
    });

}, [id]);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            });
    }, [id]);
  const addToCart = (product) => {
  console.log("Added:", product);

   setCart([
    ...cart,
    {
      ...product,
      quantity: 1,
    },
  ]);
  showAlert("Product added to cart", "success");
};
const buynow = (product) => {
  setCart([
    ...cart,
    {
      ...product,
      quantity: 1,
    },
  ]);

  nav("/cart");
};

   return (
  <div className="container mt-5">
    <div className="card shadow-lg border-0">
      <div className="row g-0">

        {/* Image Section */}
        <div className="col-md-5 text-center p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Product Info */}
        <div className="col-md-7">
          <div className="card-body">

            <h2 className="fw-bold">{product.title}</h2>

            <p className="text-muted">
              {product.description}
            </p>

            <h3 className="text-success fw-bold">
              ${product.price}
            </h3>

            <p className="fs-5">
              ⭐ {product.rating}
            </p>

            <p>
              {product.stock > 0 ? (
                <span className="badge bg-success">
                  In Stock
                </span>
              ) : (
                <span className="badge bg-danger">
                  Out of Stock
                </span>
              )}
            </p>
            <h5>Specifications</h5>
 <p>Category: {product.category}</p>
            

            <p>
              Brand: {product.brand}
            </p>

          
 <p>Stock: {product.stock}</p>
           

           <p>SKU: {product.sku}</p>

            <button className="btn btn-warning me-2" onClick={() => addToCart(product)}>
              Add To Cart
            </button>

            <button className="btn btn-danger" onClick={() => buynow(product)}>
              Buy Now
            </button>

          </div>
        </div>

      </div>
    </div>
<div className="card p-3 mt-3">
  
              
    <p> <strong>Shipping:</strong>{" "} {product.shippingInformation}</p>
   <p> <strong>Warranty:</strong>{" "} {product.warrantyInformation} </p>
   <p><strong>Return Policy:</strong>{" "} {product.returnPolicy}</p>
     

</div>
    {/* Reviews Section */}
    <div className="mt-5">
      <h3 className="mb-3">
        Customer Reviews ({product.reviews?.length})
      </h3>

      {product.reviews?.map((review, index) => (
        <div
          key={index}
          className="card shadow-sm mb-3"
        >
          <div className="card-body">

            <div className="d-flex justify-content-between">
              <h5>{review.reviewerName}</h5>

              <span className="badge bg-warning text-dark">
                ⭐ {review.rating}/5
              </span>
            </div>

            <p className="mt-2 mb-0">
              {review.comment}
            </p>

          </div>
        </div>
      ))}
    </div>
  </div>
);
}
