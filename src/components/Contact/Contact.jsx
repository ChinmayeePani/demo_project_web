import React from "react";
import "./Contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";

const Contact = () => {
  const location_card = [
    {
      icon: <IoLocationOutline className="location_icons" />,
      header: "Location:",
      span: "A108 Adam Street, New York, NY 535022",
    },

    {
      icon: <AiOutlineMail className="location_icons" />,
      header: "Email:",
      span: "info@example.com",
    },

    {
      icon: <AiOutlineMobile className="location_icons" />,
      header: "Call:",
      span: "+1 5589 55488 55s",
    },
  ];

  return (
    <div className="contact">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest" }}>CONTACT</h2>
      <hr className="about_us_line" />
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui <br />
        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>

      {/* map & form */}
      {/* both map and form */}
      <div className="map_form">
        {/* left map */}
        <div className="map_container">
          {location_card.map((item) => {
            return (
              <div className="icon_header">
                <div className="map_icon">{item.icon}</div>
                <div className="location_details">
                  <h2 style={{ color: "#37517E" }}>{item.header}</h2>
                  <span style={{ color: "#6192D2" }}>{item.span}</span>
                </div>
              </div>
            );
          })}
          <div className="map_img">
            <div className="inside_map_text">
              <span style={{ fontSize: "20px" }}>Downtown Conference Center</span>
              <span style={{ fontSize: "15px", color: "#47B2E4", fontWeight: "bold" }}>
                View larger map
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
    </div>
  );
};

export default Contact;
