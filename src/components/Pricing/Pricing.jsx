import React from "react";
import "./Pricing.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Pricing = () => {
  const broucher_items = [
    {
      span1: "Free Plan",
      span2: "0",
      span3: "per month",
      l1: "Quam adipiscing vitae proin",
      l2: "Nec feugiat nisl pretium",
      l3: "Nulla at volutpat diam uteera",
      l4: "Pharetra massa massa ultricies",
      l5: "Massa ultricies mi quis hendrerit",
    },

    {
      span1: "Business Plan",
      span2: "29",
      span3: "per month",
      l1: "Quam adipiscing vitae proin",
      l2: "Nec feugiat nisl pretium",
      l3: "Nulla at volutpat diam uteera",
      l4: "Pharetra massa massa ultricies",
      l5: "Massa ultricies mi quis hendrerit",
    },

    {
      span1: "Developer Plan",
      span2: "49",
      span3: "per month",
      l1: "Quam adipiscing vitae proin",
      l2: "Nec feugiat nisl pretium",
      l3: "Nulla at volutpat diam uteera",
      l4: "Pharetra massa massa ultricies",
      l5: "Massa ultricies mi quis hendrerit",
    },
  ];

  return (
    <div className="pricing">
      <h2 style={{ fontSize: "40px", color: "#37517E", fontWeight: "boldest" }}>PRICING</h2>
      <hr className="about_us_line" />
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui <br />
        impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="three_brouchers">
        {/* brouchers */}
        {
          broucher_items.map((item)=>{
            return(
              <div className="broucher">
              <div className="broucher_header">
                <span style={{ color: "#37517E", fontSize: "25px" }}>{item.span1}</span>
                <span style={{ color: "#37517E", fontSize: "35px" }}>
                  <sup style={{ fontSize: "20px", fontWeight: "bold" }}>$</sup>{item.span2}
                </span>
                <span style={{ color: "#47B2E4", fontSize: "20px" }}>{item.span3}</span>
              </div>
    
              <div className="broucher_list">
                <div>
                  <TiTick style={{ color: "#28A745" }} /> <span>{item.l1}</span>
                </div>
                <div>
                  <TiTick style={{ color: "#28A745" }} /> <span>{item.l2}</span>
                </div>
    
                <div>
                  <TiTick style={{ color: "#28A745" }} /> <span>{item.l3}</span>
                </div>
                <div>
                  <ImCross style={{ fontSize: "12px", color: "#CFCDCC" }} />{" "}
                  <span style={{ textDecoration: "line-through", color: "#CFCDCC" }}>
                   {item.l4}
                  </span>
                </div>
                <div>
                  <ImCross style={{ fontSize: "12px", color: "#CFCDCC" }} />{" "}
                  <span style={{ textDecoration: "line-through", color: "#CFCDCC" }} />
                  <span style={{ textDecoration: "line-through", color: "#CFCDCC" }}>
                    {item.l5}
                  </span>
                </div>
              </div>
              <div style={{ width: "100%" }}>
                <button className="broucher_btn">Get Started</button>
              </div>
            </div>
            )
          })
        }
       
      </div>
    </div>
  );
};

export default Pricing;
