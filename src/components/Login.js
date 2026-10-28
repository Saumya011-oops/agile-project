import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [cre, setCre] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCre({
      ...cre,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3005/api/userRoutes/login",
        cre
      );

      console.log(res.data);

      if (res.data.success) {
        // localStorage.setItem("token", res.data.token);

        // alert("Login Successful!");


        // navigate("/home");
      localStorage.setItem("user", JSON.stringify(res.data.user));
localStorage.setItem("token", res.data.token);
  const redirect =
    localStorage.getItem("redirectAfterLogin");

  if (redirect) {
    localStorage.removeItem("redirectAfterLogin");
    navigate(redirect);
  } else {
    navigate("/");
  }
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
  console.log(error);
  alert("Login Failed");
}

    setCre({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="container mt-5">
        <div className="card p-4 shadow">
          <h2 className="text-center mb-4">Login</h2>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={cre.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={cre.password}
              onChange={onChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          
        </div>

        <h3 className="btn btn-dark text-white mt-4">
          Don't Have an Account ??
        </h3>

        <Link
          className="btn btn-primary w-auto mx-4 mt-3"
          to="/register"
        >
          Register here..
        </Link>
      </div>
    </form>
  );
}