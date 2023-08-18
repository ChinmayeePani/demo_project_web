import React from "react";
import "./Frequently.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

const Frequently = () => {
  const select = [
    "Non consectetur a erat nam at lectus urna duis?",
    "Feugiat scelerisque varius morbi enim nunc?",
    "Dolor sit amet consectetur adipiscing elit?",
    "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
  ];

  return (
    <div className="frequently">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest" }}>
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <hr className="about_us_line" />
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui <br />
        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>

      {/* select */}
      <div className="select_bulk">
        {select.map((item) => {
          return (
            <div className="select_container">
              <div className="ques_para">
                <AiOutlineQuestionCircle
                  style={{ fontSize: "25px", color: "#47B2E4", fontWeight: "bold" }}
                />
                <span>{item}</span>
              </div>
              <AiOutlineDown style={{ fontSize: "20px", color: "#3777C1", fontWeight: "bold" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Frequently;
