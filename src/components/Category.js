import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
export default function Category({cart, setCart, showAlert,wishlist,setWishlist,}) {
  const { category } = useParams();
  const [sortOrder, setSortOrder] = useState("");
    const [products, setProducts] = useState([]);

const filteredProducts = products.filter(
  (item) => item.category === category
);
  const sortedProducts = [...filteredProducts].sort((a,b)=> {
    if(sortOrder === "lowToHigh"){
      return a.price - b.price;
    }
    else {
      return b.price - a.price
    }
  })

  const getProducts = useCallback(async () => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );

    setProducts(response.data.products);
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
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
const buynow=(product) => {
  setCart([...cart,product])
  navigate("/cart")
}
  return (
    <>
    
    <div className="container mt-4">
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
          <div className="col-md-4 " key={product.id}>
            <div className="card product-card bg-dark text-white"  >
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title} onClick={() => navigate(`/product/${product.id}`)}style={{ cursor: "pointer" }}
              />

              <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <h4>₹{product.price}</h4>
              </div>
              <button className="btn btn-warning product-card-btn-buy" onClick={() => buynow(product)}>Buy now</button>
              <button className="btn btn-warning mt-2 product-card-btn-cart" onClick={() => addToCart(product)}>Add to cart</button>
             <button className="btn btn-info mt-2 product-card-btn-wish" onClick={() => {
              const exists = wishlist.find((p)=>
                p.id===product.id
              );
              if(!exists){
                setWishlist([...wishlist,product]);
                alert("product added in wishlist")
              }
              else {
                alert("produt already exixst...")
              }
             }}>
                  ❤️ Add to Wishlist
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
