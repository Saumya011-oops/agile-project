import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({cart, setCart, showAlert, wishlist,
  setWishlist,}) {
  const [products, setProducts] = useState([]);
 const user = JSON.parse(localStorage.getItem("user"));
const username = user?.name;
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );

      console.log(response.data);

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
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
const navigate = useNavigate();
const buynow = (product) => {
  setCart([
    ...cart,
    {
      ...product,
      quantity: 1,
    },
  ]);

  navigate("/cart");
};

 const [sortOrder, setSortOrder] = useState("");

  const sortedProducts = [...products].sort((a,b)=> {
    if(sortOrder === "lowToHigh"){
      return a.price - b.price;
    }
    else {
      return b.price - a.price
    }
    return 0;
  })


  return (
    <>
    
     

    <div className="container mt-4  ">
      <select
  className="form-select w-25 mb-2"
  value={sortOrder}
  onChange={(e) => setSortOrder(e.target.value)}
>
  <option value="">Sort By</option>
  <option value="lowToHigh">Price: Low to High</option>
  <option value="highToLow">Price: High to Low</option>
</select>
   
      <div className="row">
        {sortedProducts.map((product) => (
          
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card product-card h-100 bg-dark text-white"   >

              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title} onClick={() => navigate(`/product/${product.id}`)}style={{ cursor: "pointer" }}
              />

              <div className="card-body">
                <h5>{product.title}</h5>

                <p>{product.description}</p>
                <p>
  <span className="text-decoration-line-through  me-2">
    $
    {(
      product.price /
      (1 - product.discountPercentage / 100)
    ).toFixed(2)}
  </span>

  <span className="fw-bold text-success">
    ${product.price}
  </span>
  <span className="mx-2  btn btn-danger">{product.discountPercentage} %</span>
</p>



                              <button className="btn btn-warning product-card-btn-buy" onClick={() => buynow(product)}>Buy now</button>

                <button className="btn btn-warning mx-2 product-card-btn-cart" onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
               <button
  className="btn btn-info mx-2 mt-2 product-card-btn-wish"
  onClick={() => {
    const exists = wishlist.find(
      (p) => p.id === product.id
    );

    if (!exists) {
      setWishlist([...wishlist, product]);
      alert("product added in wishlist")
    } else {
      alert("Product already exists in wishlist...");
    }

    
  }}
>
  ❤️ Add to Wishlist
</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}