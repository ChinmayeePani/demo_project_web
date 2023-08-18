import React from "react";
import "./Companies.css";
import { BiLeaf } from "react-icons/bi";
import { BsXbox } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";
import { PiFlowerLotusFill } from "react-icons/pi";
import { BiSolidObjectsHorizontalLeft } from "react-icons/bi";

const Companies = () => {
  const companies = [
    {
      title: "myob",
      fontFamily: "fantasy",
      fontWeight: "500px",
      icon: <BiSolidObjectsHorizontalLeft />,
      cssClass: "myob",
    },
    {
      title: "BELIMO",
      fontFamily: "Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontWeight: "500px",
      cssClass: "belimo",
    },
    {
      title: "Lilly",
      fontFamily: "cursive",
      fontWeight: "800px",
      cssClass: "lilly",
      icon: <PiFlowerLotusFill />
    },
    {
      title: " LifeGroup",
      fontFamily: "serif",
      fontWeight: "500px",
      icon: <BiLeaf />,
      cssClass: "life"
    },
    {
      title: " citrus",
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      fontWeight: "500px",
      icon: <BsXbox />,
      cssClass: "citrus"
    },
    {
      title: " Trustly",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      fontWeight: "800px",
      icon: <BsFillBagFill />,
      cssClass: "trustly"
    },
  ];
  return (
    <div className="companies_list">
      {companies.map((company, i) => {
        return (
          <div>
            <span
              key={i}
              style={{
                fontFamily: company.fontFamily,
                fontSize: "30px",
                fontWeight: company.fontWeight,
              }}
              className={company.cssClass}
            >
              {company.icon && company.icon}
              {company.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Companies;
