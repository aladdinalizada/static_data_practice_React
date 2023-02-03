import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <div className="header-body">
      <div className="header">
        <h1>The Blog Website</h1>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/addblog">New Blog</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
