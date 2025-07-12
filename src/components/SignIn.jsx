import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Broute, setBroute] = useState("");
  const navigate = useNavigate();
  // alert(
  //   "Note: Don't enter your real email or password. This is just a practice project."
  // );
  const handleSubmit = (e) => {
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    console.log("😏");

    // console.log(Name: ${name}, Email: ${email}, Password: ${password});

    e.preventDefault();
    axios
      .post("https://sign-in-login-backend.onrender.com/register", {
        name,
        email,
        password,
      })
      .then((result) => console.log(result))
      .catch((result) => console.log("error"));
      navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        className="p-4 bg-white rounded shadow-sm"
        style={{ width: "320px" }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4">Sign Up</h3>

        {/* Name Field */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>

        <p className="text-center mt-3 mb-0">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
