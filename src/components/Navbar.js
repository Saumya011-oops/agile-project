import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({cart}) {
   const [search, setSearch] = useState("");
  const nav = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));
const username = user?.name || "User";  


  const categories = {
  laptop: "laptops",
  phone: "smartphones",
  tablet: "tablets",
  shirt: "mens-shirts",
  shoes: "mens-shoes",
  Watches : "mens-watches",
  Furniture : "furniture",
  Sunglasses : "sunglasses",
  Sport : "sports-accessories",


};

const handleSearch = () => {
  if (categories[search]) {
    nav(`/category/${categories[search]}`);
  }
};
  return (
   <nav
  className="navbar navbar-expand-lg"
  style={{
    backgroundColor: "#111827",
    padding: "12px 20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
  }}
>
  <div className="container-fluid">

    <Link
  to="/home"
  className="text-decoration-none fw-bold px-4 py-2 rounded-3"
  style={{
    backgroundColor: "#dc2626",
    color: "white",
    fontSize: "1.2rem"
  }}
  
>
🛍️ HP STORE
</Link>

    {/* Categories */}
    <div className="dropdown ms-3">
      <button
        className="btn btn-outline-primary rounded-pill"
        type="button"
        data-bs-toggle="dropdown"
      >
        Categories ▼
      </button>

      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/category/smartphones">📱 Phones</Link></li>
        <li><Link className="dropdown-item" to="/category/laptops">💻 Laptops</Link></li>
        <li><Link className="dropdown-item" to="/category/tablets">📟 Tablets</Link></li>
        <li><Link className="dropdown-item" to="/category/mobile-accessories">🎧 Accessories</Link></li>
        <li><Link className="dropdown-item" to="/category/mens-shirts">👔 Men Shirts</Link></li>
        <li><Link className="dropdown-item" to="/category/womens-dresses">👗 Women Dresses</Link></li>
        <li><Link className="dropdown-item" to="/category/mens-shoes">👟 Men Shoes</Link></li>
        <li><Link className="dropdown-item" to="/category/womens-shoes">👠 Women Shoes</Link></li>
        <li><Link className="dropdown-item" to="/category/mens-watches">⌚ Watches</Link></li>
        <li><Link className="dropdown-item" to="/category/sports-accessories">🏀 Sports</Link></li>
        <li><Link className="dropdown-item" to="/category/sunglasses">🕶️ Sunglasses</Link></li>
        <li><Link className="dropdown-item" to="/category/furniture">🛋️ Furniture</Link></li>
      </ul>
    </div>

    {/* Search */}
    <div className="d-flex align-items-center ms-4">
      <input
        type="search"
        className="form-control rounded-pill"
        style={{
          width: "450px"
        }}
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="btn btn-outline-success rounded-pill ms-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>

    {/* Right Side */}
    <div className="ms-auto d-flex align-items-center">

      <Link
        className="btn btn-outline-primary rounded-pill"
        to="/"
      >
        🏠 Home
      </Link>

      <Link
         className="btn btn-outline-primary rounded-pill mx-4"
        to="/cart"
      >
        🛒 Cart
        <span className="badge bg-danger ms-1">
          {cart.length}
        </span>
      </Link>

      {!localStorage.getItem("token") ? (
        <Link
          className="btn btn-warning rounded-pill ms-3"
          to="/login"
        >
          Login
        </Link>
      ) : (
        <div className="dropdown ms-1">
          <div
    className="profile-avatar rounded-pill "
    data-bs-toggle="dropdown"
    role="button"
  >
    {username.charAt(0).toUpperCase()}
  </div>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <h6 className="dropdown-header">
                Hello {username}
              </h6>
            </li>

            <li>
              <Link className="dropdown-item" to="/profile">
                👤 My Profile
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" to="/myorder">
                📦 My Orders
              </Link>
            </li>
             <li>
              <Link className="dropdown-item" to="/wishlist">
                 ❤️ My Wishlist
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" to="/about">
                ℹ️ About
              </Link>
            </li>

            <li>
              <Link className="dropdown-item" to="/contact">
                📞 Contact Us
              </Link>
            </li>
           

            <li><hr className="dropdown-divider" /></li>

            <li>
              <button
                className="dropdown-item text-danger"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.href = "/login";
                }}
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>
      )}

    </div>

  </div>
</nav>
  )
}
