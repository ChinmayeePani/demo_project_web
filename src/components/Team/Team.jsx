import React from "react";
import "./Team.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Team = () => {
  const cards = [
    {
      img: "./team-1.jpg",
      name: "Walter White",
      role: "Chief Executive Officer",
      para: " Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    },

    {
      img: "./team-2.jpg",
      name: "Sarah Jhonson",
      role: "Product Manager",
      para: "Aut maiores voluptates amet et quis praesentium qui senda para",
    },

    {
      img: "./team-3.jpg",
      name: "William Anderson",
      role: "CTO",
      para: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
    },

    {
      img: "./team-4.jpg",
      name: "Amanda Jepson",
      role: "Accountant",
      para: "Dolorum tempora officiis odit laborum officiis et et accusamus",
    },
  ];

  return (
    <div className="team">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest", paddingTop: "2rem" }}>
        TEAM
      </h2>
      <hr className="team_line" />
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui <br />
        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      {/* cards */}
      <div className="grid_container">
      {cards.map((items) => {
        return (
          <div className="team_card">
            <div className="card_text">
              <div>
                <img src={items.img} className="team_img" />
              </div>
              <div className="team_card_content">
                <h2 style={{ color: "#37517E", fontWeight: "bold" }}>{items.name}</h2>
                <span style={{ color: "#444444" }}>{items.role}</span>
                <hr style={{ width: "3rem" }} />

                <p>{items.para}</p>

                <div className="team_cards_icons">
                  <div className="icons_container">
                    <AiOutlineTwitter />
                  </div>
                  <div className="icons_container">
                    <BiLogoFacebook />
                  </div>
                  <div className="icons_container">
                    <AiFillInstagram />
                  </div>
                  <div className="icons_container">
                    <AiFillLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Team;
