import { Button, Card, CardActions, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./index.css";
// import { CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [mockData, setMockData] = useState([]);
  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMockData(data);
      });
  }, []);
  // Navigate to Details page
  const navigate = useNavigate();

  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  return (
    <div className="feed">
      <div className="sweet-loading">
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        /> */}

        {/* <ClipLoader
          color={color}
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
      </div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* <h1>Blog Feed</h1> */}
      <div className="blogsFeed">
        {mockData.map((blog) => (
          <div className="card">
            <h4>{blog.title}</h4>
            <p>
              Written by <span>{blog.author}</span>
            </p>
            <h5>
              {blog.body.length > 100
                ? blog.body.substring(0, 100) + "..."
                : blog.body}
            </h5>
            <Button variant="contained" onClick={() => navigate("/:id")}>
              Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
