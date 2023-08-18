import React from "react";
import "./About.css";
import { TiTick } from "react-icons/ti";

const About = () => {
  const para = [
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
    "Duis aute irure dolor in reprehenderit in voluptate velit",
    "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
  ];

  const cards = [
    {
      serial_no: "01",
      header: " Non consectetur a erat nam at lectus urna duis?",
      content:
        " Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      serial_no: "02",
      header: " Feugiat scelerisque varius morbi enim nunc?",
      content:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      serial_no: "03",
      header: " Feugiat scelerisque varius morbi enim nunc?",
      content:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
    },
  ];

  const progress = [
    {
      span_name: "HTML",
      span_percentage: "100%",
      blue_bg: "100",
    },
    {
      span_name: "CSS",
      span_percentage: "90%",
      blue_bg: "90",
    },
    {
      span_name: "JAVASCRIPT",
      span_percentage: "70%",
      blue_bg: "70",
    },
    {
      span_name: "PHOTOSHOP",
      span_percentage: "55%",
      blue_bg: "55",
    },
  ];

  return (
    <div className="about">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest" }}>ABOUT US</h2>
      <hr className="about_us_line" />
      <div className="about_content">
        <div className="about_para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
          {para.map((item) => {
            return (
              <div className="map_div">
                <TiTick style={{ color: "#47B2E4" }} />
                <p>{item}</p>
              </div>
            );
          })}
        </div>

        <div className="about_para">
          <p>
            incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi <br />
            ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate
            velit <br />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat Ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="learn_more">Learn More</button>
        </div>
      </div>

      <div className="about_second_part">
        <div className="about_h1">
          <span>
            Eum ipsam laborum deleniti <br />
            <span className="about_span">velit pariatur architecto aut nihil</span>
          </span>
          <p
            style={{
              color: "#444444",
              fontSize: "20px",
              minWidth: "50%",
              paddingTop: "1rem",
              lineHeight: "2rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
          </p>

          {cards.map((item) => {
            return (
              <div className="cards">
                <div className="head_section">
                  <span className="cards_header">{item.serial_no}</span>
                  <span className="cards_header">{item.header}</span>
                </div>
                <p className="card_content">{item.content}</p>
              </div>
            );
          })}
        </div>

        <img src="./demo2.png" className="home_img" />
      </div>

      {/* 3rd part */}
      <div className="about_third_para">
        <img src="./demo3.png" className="demo3_img" />
        <div div className="demo3_content">
          <p className="demo3_header">
            Voluptatem dignissimos provident <br /> quasi corporis voluptates
          </p>
          <p className="demo3_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt <br />
            ut labore et dolore magna aliqua.
          </p>

          {progress.map((item) => {
            return (
              <div>
                <div className="label_percentage">
                  <span>{item.span_name}</span>
                  <span>{item.span_percentage}</span>
                </div>
                <div className="grey_bg">
                  <div className="blue_bg" style={{ width: `${item.blue_bg}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
