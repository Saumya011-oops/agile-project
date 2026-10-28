import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
   const navigate = useNavigate();
  const [cre, setCre] = useState({
    name: "",
  email: "",
  mobilenumber: "",
  password: ""
  });
  const onChange = (e) => {
    setCre({...cre,[e.target.name]: e.target.value});
  }
  const handlesubmit= async (e) => {
    e.preventDefault();
     console.log(cre);

    const res = await axios.post(
      "http://localhost:3005/api/userRoutes/createuser",cre
    );
    console.log(res.data);
    alert("Registration Successful!");
    navigate("/login")

    setCre({
    name: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="container mt-5">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Register</h2>

          <div className="mb-3">
            <label htmlFor="validationCustom01" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="validationCustom01"
              placeholder="Enter name"
               value={cre.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="validationCustom02" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="validationCustom02"
              placeholder="Enter email"
               value={cre.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="validationCustom03" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control"
              name="mobilenumber"
              id="validationCustom03"
              placeholder="Enter mobile number"
               value={cre.mobilenumber}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="validationCustom04" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="validationCustom04"
              placeholder="Create password"
               value={cre.passwrod}
              onChange={onChange}
              required
            />
          </div>

          

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
          </div>

          <button type="submit" className="btn btn-success w-100" >
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </form>
  );
}