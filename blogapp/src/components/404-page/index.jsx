import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h2>Page not found</h2>
      <button>
        <Link to="/home">Go to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
