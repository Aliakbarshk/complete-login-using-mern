import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/SignIn";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="text-center bg-white p-5 rounded shadow"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="mb-3 text-primary">🚀 My First Full-Stack App</h2>
        <p className="mb-3">This project is built using:</p>
        <ul className="list-unstyled mb-4">
          <li>
            💻 <strong>Frontend:</strong> React.js + Bootstrap
          </li>
          <li>
            🔗 <strong>Backend:</strong> Node.js + Express.js
          </li>
          <li>
            🛢️ <strong>Database:</strong> MongoDB (via Mongoose)
          </li>
        </ul>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/register" className="btn btn-success">
            Register
          </Link>
          <Link to="/login" className="btn btn-outline-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
