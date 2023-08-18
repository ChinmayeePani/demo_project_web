import React from "react";
import "./Service.css";
import { BiSolidBasketball } from "react-icons/bi";
import { BsFileEarmarkRuled } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";
import { HiSquare3Stack3D } from "react-icons/hi2";

const Service = () => {
  const service_cards = [
    {
      icon: <BiSolidBasketball className="ball_icon" />,
      header: "Lorem Ipsum",
      content: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    },
    {
      icon: <BsFileEarmarkRuled className="ball_icon" />,
      header: "Sed ut perspici",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      icon: <MdOutlineSpeed className="ball_icon" />,
      header: "Magni Dolores",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official",
    },
    {
      icon: <HiSquare3Stack3D className="ball_icon" />,
      header: "Nemo Enim",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    },
  ];
  return (
    <div className="service">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest" }}>SERVICES</h2>
      <hr className="about_us_line" />
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          lineHeight: "2rem",
          color: "#444444",
          fontSize: "20px",
        }}
      >
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
        <br /> Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
        quidem hic quas.
      </p>
      <div style={{ display: "flex", gap: "3rem" }}>
        {service_cards.map((item) => {
          return (
            <div className="services_cards">
              <div className="service_card_content">
                {item.icon}

                <h2 style={{ color: "#566C92" }}>{item.header}</h2>
                <p style={{ color: "#566C92", lineHeight: "1.2rem" }}>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="services_image">
        <div className='overlay'/>
        <div className="image_content">
          <div>
            <h1>Call To Action</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat <br />
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <button className="service_btn">Call To Action</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
