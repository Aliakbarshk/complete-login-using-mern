import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div
        className="bg-white p-5 rounded shadow text-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h1 className="mb-3 text-primary">👋 Welcome!</h1>
        <p className="lead mb-4">
          You’ve successfully logged in to your dashboard.
        </p>

        <Link to="/register" className="btn btn-outline-primary mb-4">
          Logout
        </Link>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://github.com/Aliakbarshk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} color="#333" />
          </a>
          <a
            href="https://www.linkedin.com/in/aliakbar-shaikh-b79090299/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} color="#0e76a8" />
          </a>
          <a href="mailto:aliakbarsk05@gmail.com">
            <FaEnvelope size={28} color="#D44638" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
