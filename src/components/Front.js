import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Front() {

  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {

    const recent =
      JSON.parse(localStorage.getItem("recent")) || [];

    setRecentProducts(recent);

  }, []);

  const [policy, setPolicy] = useState("");

  const navigate = useNavigate();
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: 5,
      comment: "Excellent product and fast delivery."
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "Amazing shopping experience."
    },
    {
      name: "Amit Verma",
      rating: 4,
      comment: "Good quality at affordable price."
    },
    {
      name: "Neha Shah",
      rating: 5,
      comment: "Highly recommended."
    },
    {
      name: "Rohan Mehta",
      rating: 4,
      comment: "Product exactly as shown."
    },
    {
      name: "Anjali Desai",
      rating: 5,
      comment: "Very satisfied with my purchase."
    },
    {
      name: "Karan Joshi",
      rating: 5,
      comment: "Best online store I have used."
    },
    {
      name: "Sneha Gupta",
      rating: 4,
      comment: "Delivery was quick and smooth."
    },
    {
      name: "Vikram Singh",
      rating: 5,
      comment: "Excellent customer support."
    },
    {
      name: "Pooja Yadav",
      rating: 5,
      comment: "Loved the product quality."
    },
    {
      name: "Arjun Kumar",
      rating: 4,
      comment: "Worth every rupee."
    },
    {
      name: "Meera Patel",
      rating: 5,
      comment: "Secure payment and easy checkout."
    },
    {
      name: "Harsh Shah",
      rating: 5,
      comment: "Will definitely shop again."
    },
    {
      name: "Nidhi Jain",
      rating: 4,
      comment: "Great collection of products."
    },
    {
      name: "Yash Patel",
      rating: 5,
      comment: "Fantastic experience overall."
    }
  ];
  const categories = [
    {
      name: "Phones",
      slug: "smartphones",
      image: "/images/phones.jpg"
    },
    {
      name: "Laptops",
      slug: "laptops",
      image: "/images/laptop.jpg"
    },
    {
      name: "Tablets",
      slug: "tablets",
      image: "/images/tab.jpg"
    },
    {
      name: "Men Shirts",
      slug: "mens-shirts",
      image: "/images/shirt.jpg"
    },
    {
      name: "Women Dresses",
      slug: "womens-dresses",
      image: "/images/womdress.jpg"
    },
    {
      name: "Men Shoes",
      slug: "mens-shoes",
      image: "/images/menshoe.jpg"
    },
    {
      name: "Women Shoes",
      slug: "womens-shoes",
      image: "/images/womshoe.jpg"
    },
    {
      name: "Watches",
      slug: "mens-watches",
      image: "/images/watch.jpg"
    },
    {
      name: "Furniture",
      slug: "furniture",
      image: "/images/furniture.jpg"
    },
    {
      name: "Sunglasses",
      slug: "sunglasses",
      image: "/images/shades.jpg"
    },
    {
      name: "Sports",
      slug: "sports-accessories",
      image: "/images/sport.jpg"
    },
    {
      name: "Mobile Accessories",
      slug: "mobile-accessories",
      image: "/images/mob.jpg"
    }
  ];

  return (
    <>


      <div className="mb-0 bg-dark text-white"
        style={{
          background: "white",
          padding: "10px",
          fontWeight: "bold"
        }}
      >
        ......
        Flat 50% OFF | Free Delivery | Extra 10% OFF |
        Buy 1 Get 1 Free | Premium Quality Products.....
      </div>
      <div className="hero-banner" onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
        <img
          src="/images/bannerblur.png"
          alt="HP Store Banner"
          className="hero-img"
        />
      </div>

      <div className="bg-dark text-white" style={{
        background: "white",
        padding: "10px",
        fontWeight: "bold"
      }}>
        📱 Phones |
        💻 Laptops |
        🖥️ Tablets |
        🎧 Accessories |
        👔 Men Shirts |
        👗 Women Dresses |
        👟 Men Shoes |
        👠 Women Shoes |
        ⌚ Watches |
        🏀 Sports |
        🕶️ Sunglasses |
        🛋️ Furniture
      </div>



      <div className="container mt-4">
        <div className="row">
          {categories.map((cat) => (
            <div className="col-md-3 mb-3" key={cat.name}>
              <div className="card  h-100" style={{
                height: "380px",
                borderRadius: "20px"
              }}>

                <img
                  src={cat.image}
                  className="card-img-top"
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body text-center">
                  {/* <h5>{cat.name}</h5> */}

                  <Link
                    to={`/category/${cat.slug}`}
                    className="btn btn-danger"
                  >
                    {cat.name}
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="recent-section">

        <h3 className="mb-3 text-center ">Recently Viewed</h3>

        <div className="recent-row ms-4">

          {recentProducts.map((item) => (

            <div className="recent-card" key={item.id}>

              <img
                src={item.thumbnail}
                alt=""
                className="recent-img" onClick={() => navigate(`/product/${item.id}`)}style={{ cursor: "pointer" }}
              />

              <div className="p-2">
                <h6>{item.title}</h6>
                <p>${item.price}</p>
              </div>

            </div>

          ))}

        </div>

      </div>
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-3">
            <div className="card text-center p-3">
              <h4>🔒</h4>
              <h5>Secure Payment</h5>
              <p>Safe and trusted payment methods.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-3">
              <h4>⭐</h4>
              <h5>Quality Products</h5>
              <p>Only genuine and top-rated products.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-3">
              <h4>💬</h4>
              <h5>24/7 Support</h5>
              <p>Always ready to help our customers.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-3">
              <h4>🚚</h4>
              <h5>Fast Delivery</h5>
              <p>Quick delivery across India.</p>
            </div>
          </div>

        </div>
        <div className="mt-5">

          <h2 className=" text- dark text-center mb-4">
            Frequently Asked Questions
          </h2>

          <div className="card p-3 mb-3 mt-2 ">
            <h5>How long does delivery take?</h5>
            <p>
              Most orders are delivered within 3-5 business days.
            </p>
          </div>

          <div className="card p-3 mb-3">
            <h5>Can I return a product?</h5>
            <p>
              Yes, products can be returned within 7 days of delivery.
            </p>
          </div>

          <div className="card p-3 mb-3">
            <h5>Do you offer warranty?</h5>
            <p>
              Yes, all products come with an official manufacturer warranty.
            </p>
          </div>

        </div>
        <h3 className="text-center mt-6 mb-3">Customer Reviews </h3>
        <div className="d-flex overflow-auto review-row">


          {reviews.map((review, index) => (

            <div
              key={index}
              className="card review-card p-3 me-3"
            >

              <h5>{review.name}</h5>

              <p className="text-warning">
                {"⭐".repeat(review.rating)}
              </p>

              <p>{review.comment}</p>

            </div>

          ))}

        </div>
        <div className="bg-light text-center p-5 mt-5 rounded-pill">
          <h3>Need Assistance or Have Any Questions?</h3>
          <p className="text-muted">
            Our team is here to help. Feel free to contact us for support, inquiries, or additional information.
          </p>

          <Link className="btn btn-primary" to="/contact">
            📞 Contact Us
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid px-5">
          <div className="row">

            <div className="col-md-3">
              <h4>🛍 Shop Categories</h4>

              <Link className="category-link" to="/category/smartphones">Phones</Link> <br></br>

              <Link className="category-link" to="/category/laptops">Laptops</Link><br></br>

              <Link className="category-link" to="/category/tablets">Tablets</Link><br></br>

              <Link className="category-link" to="/category/mobile-accessories">Accessories</Link><br></br>

              <Link className="category-link" to="/category/furniture">Furniture</Link>
            </div>


            <div className="col-md-3">
              <h2>Information</h2>

              <Link className="category-link" to="/about">About Us</Link> <br></br>

              <Link className="category-link" to="/contact">Contact Us</Link>
            </div>

            <div className="col-md-3">
              <h2>Store Detail</h2>

              <p>📞 +91 88888 88888</p>
              <p>🕒 Monday to Saturday</p>
              <p>⏰ 10 AM - 6 PM</p>
            </div>

            <div className="col-md-3">
              <p>© 2026 HP STORE</p>

              <p
                onClick={() => setPolicy("privacy")}
                data-bs-toggle="modal"
                data-bs-target="#policyModal"
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </p>

              <p
                onClick={() => setPolicy("refund")}
                data-bs-toggle="modal"
                data-bs-target="#policyModal"
                style={{ cursor: "pointer" }}
              >
                Refund Policy
              </p>

              <p
                onClick={() => setPolicy("shipping")}
                data-bs-toggle="modal"
                data-bs-target="#policyModal"
                style={{ cursor: "pointer" }}
              >
                Shipping Policy
              </p>

              <p
                onClick={() => setPolicy("terms")}
                data-bs-toggle="modal"
                data-bs-target="#policyModal"
                style={{ cursor: "pointer" }}
              >
                Terms of Service
              </p>

            </div>

          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="policyModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">

                {policy === "privacy" && "Privacy Policy"}
                {policy === "refund" && "Refund Policy"}
                {policy === "shipping" && "Shipping Policy"}
                {policy === "terms" && "Terms of Service"}

              </h5>

              <button
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">

              {policy === "privacy" && (
                <>
                  <p>
                    HP STORE respects your privacy and protects your personal information.
                  </p>

                  <p>
                    We collect only the information necessary for order processing,
                    delivery, and customer support.
                  </p>
                </>
              )}

              {policy === "refund" && (
                <>
                  <p>
                    Refund requests are accepted within 7 days of delivery.
                  </p>

                  <p>
                    Products must be unused and in original condition.
                  </p>
                </>
              )}

              {policy === "shipping" && (
                <>
                  <p>
                    Orders are processed within 24 hours.
                  </p>

                  <p>
                    Delivery usually takes 2–7 business days across India.
                  </p>
                </>
              )}

              {policy === "terms" && (
                <>
                  <p>
                    By using HP STORE you agree to our policies and terms.
                  </p>

                  <p>
                    HP STORE reserves the right to modify prices, products, and policies at any time.
                  </p>
                </>
              )}

            </div>

          </div>
        </div>
      </div>
    </>
  );
} 
