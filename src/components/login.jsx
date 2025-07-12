import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://sign-in-login-backend.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "Success") navigate("/dashboard"); // redirect
        else alert(res.data); // error msg
      })
      .catch(() => alert("Server error"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        className="p-4 bg-white rounded shadow-sm"
        style={{ width: 320 }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-4">Login</h3>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="text-center mt-3 mb-0">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
