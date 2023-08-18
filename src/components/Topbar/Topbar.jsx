import React from "react";
import "./Topbar.css";

const Topbar = () => {
  const list = ["Home", "About", "Services", "Portfolio", "Team", "Contact"];
  return (
    <div className="home_topbar">
      <h1 style={{ color: "white", fontSize: "40px" }}>BOOTSTRAP</h1>
      <div>
        {list.map((item) => {
          return <span className="top_span">{item}</span>;
        })}
        <select className="topbar_select">
          <option>DropDown</option>
        </select>
        <button className="home_topbar_btn">Get Started</button>
      </div>
    </div>
  );
};

export default Topbar;
