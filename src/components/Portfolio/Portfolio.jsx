import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const nav = [
    { name: "All", active: true },
    { name: "App", active: false },
    { name: "Card", active: false },
    { name: "Web", active: false },
  ];
  return (
    <div className="portfolio">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest" }}>PORTFOLIO</h2>
      <hr className="about_us_line" />
      <p className="portfolio_para">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui <br />
        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="portfolio_nav">
        {nav.map((item) => {
          return <span className={`nav ${item.active && "active"}`}>{item.name}</span>;
        })}
      </div>

      <div className="grid_container">
        <img src="./portfolio-1.jpg" style={{ height: "30rem" }} className="item1" />
        <img src="./portfolio-2.jpg" style={{ height: "25rem" }} className="item2" />
        <img src="./portfolio-3.jpg" style={{ height: "15rem" }} className="item3" />
        <img src="./portfolio-4.jpg" style={{ height: "20rem" }} className="item4" />
        <img src="./portfolio-5.jpg" style={{ height: "35rem" }} className="item5" />
        <img src="./portfolio-6.jpg" style={{ height: "40rem" }} className="item6" />
        <img src="./portfolio-7.jpg" style={{ height: "30rem" }} />
        <img src="./portfolio-8.jpg" style={{ height: "20rem" }} />
        <img src="./portfolio-9.jpg" style={{ height: "22rem" }} />
      </div>
    </div>
  );
};

export default Portfolio;
