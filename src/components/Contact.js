
export default function Contact() {
  return (
    <div className="container mt-5">

      {/* Heading */}
      <h1 className="text-center mb-4 text-dark">
        Contact HP STORE
      </h1>

      <p className="text-center text-dark mb-5">
        We'd love to hear from you. Whether you have a question about products,
        orders, returns, or anything else, our team is ready to help.
      </p>

      <div className="row">

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow p-4">

            <h3 className="mb-3">Get In Touch</h3>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter subject"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button className="btn btn-primary">
              Send Message
            </button>

          </div>
        </div>

        {/* Contact Information */}
        <div className="col-md-5">
          <div className="card shadow p-4">

            <h3 className="mb-3">Store Information</h3>

            <p>
              <strong>Email:</strong><br />
              support@hpstore.com
            </p>

            <p>
              <strong>Phone:</strong><br />
              +91 98765 43210
            </p>

            <p>
              <strong>Address:</strong><br />
              HP STORE,<br />
              Ring Road,<br />
              Surat, Gujarat, India
            </p>

            <p>
              <strong>Working Hours:</strong><br />
              Monday - Saturday<br />
              9:00 AM - 8:00 PM
            </p>

            <hr />

            <h4>Customer Support</h4>

            <p>
              Need help with an order, return, or payment?
              Our support team is available 24/7 to assist you.
            </p>

            <hr />

            {/* <h4>Follow Us</h4> */}

            {/* <div className="d-flex gap-2">

              <button className="btn btn-primary">
                Facebook
              </button>

              <button className="btn btn-danger">
                Instagram
              </button>

              <button className="btn btn-dark">
                Twitter
              </button>

            </div> */}

          </div>
        </div>

      </div>

      {/* FAQ Section */}
      

    </div>
  );
}