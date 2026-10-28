
export default function About() {
  return (
    <div className='container text-info'>
        <h3 className="text-center text-success mt-4">
        About HP STORE
      </h3>
      <p className="lead text-center text-dark">
        Your Trusted Destination for Electronics and Technology.
      </p>
      {/* <div className="card shadow"> */}
        <h3 className="text-dark">Who We Are</h3>

      <p className="text-bold">
        HP STORE is a modern electronics shopping platform dedicated to
        providing customers with high-quality laptops, smartphones,
        accessories, monitors, and other technology products at affordable
        prices. Our goal is to make online shopping easy, secure, and
        convenient for everyone.
      </p>

        <h3 className="text-dark mt-2">Our Mission</h3>

      <p>
        We aim to deliver the latest technology products with excellent
        customer service, competitive pricing, and fast delivery. We believe
        that technology should be accessible to everyone.
      </p>
       <h3 className="text-dark mt-2">What We Offer</h3>

      <ul>
        <li>💻 Laptops and Gaming PCs</li>
        <li>📱 Smartphones and Tablets</li>
        <li>⌨️ Computer Accessories</li>
        <li>🖥️ Monitors and Displays</li>
        <li>🎧 Headphones and Audio Devices</li>
        <li>⌚ Smart Watches and Wearables</li>
      </ul>
      <div className="row mt-4">

        <div className="col-md-3">
          <div className="card text-center p-3">
            <h4>🚚</h4>
            <h5>Fast Delivery</h5>
            <p>Quick and reliable shipping services.</p>
          </div>
        </div>

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

      </div>
       <div className="text-dark text-center mt-5">
        <h3>Thank You For Choosing HP STORE</h3>

        <p>
          We are committed to providing the best online shopping experience
          for all technology enthusiasts.
        </p>
      </div>



      </div>



    // </div>
  )
}
