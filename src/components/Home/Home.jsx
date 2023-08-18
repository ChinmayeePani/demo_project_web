import React from "react";
import "./Home.css";
import { BsPlayCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="home_content">
        <div>
          <h1
            style={{ color: "white", fontSize: "70px", paddingTop: "8rem", fontWeight: "bolder" }}
          >
            Better Solutions For Your <br />
            Business
          </h1>
          <p style={{ color: "#AFB9CB", fontSize: "35px", paddingTop: "1rem" }}>
            We are team of talented designers making websites with <br />
            Bootstrap
          </p>

          <div className="home_content_btn">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10rem",
              }}
            >
              <button
                style={{
                  padding: "15px 25px",
                  fontSize: "20px",
                  border: "none",
                  outline: "none",
                  color: "white",
                  backgroundColor: "#47b2e4",
                  borderRadius: "30px",
                }}
              >
                Get Started
              </button>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <BsPlayCircle className="watch_icon" />
                <span style={{ fontSize: "30px", color: "white" }}>Watch Video</span>
              </div>
            </div>
          </div>
        </div>
        <img src="./demo1.png" className="home_img" />
      </div>
    </div>
  );
};

export default Home;
