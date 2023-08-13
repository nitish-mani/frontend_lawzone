import "./fssai.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FSSAI({ name, setName, mob, setMob, email, setEmail }) {
  const [radio1, setRadio1] = useState(true);
  const [radio2, setRadio2] = useState(false);

  function handleRadio1() {
    setRadio1(true);
    setRadio2(false);
  }
  function handleRadio2() {
    setRadio1(false);
    setRadio2(true);
  }
  const [isClicked, setIsClicked] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const [dataN, setDataN] = useState("");
  const [dataM, setDataM] = useState("");
  const [dataE, setDataE] = useState("");

  const createData = () =>
    axios({
      method: "POST",
      url: "https://q9i3qxmuzi.execute-api.ap-south-1.amazonaws.com/second/postData",
      data: userDetails,
    });

  function handleSubmit() {
    if (name && mob && email) {
      setUserDetails({
        name: name,
        phoneNumber: mob,
        email: email,
        service: "FSSAI",

        date: `${new Date().getDate()} / ${
          new Date().getMonth() + 1
        } / ${new Date().getFullYear()}`,
        time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
      });
      setIsClicked(true);
      setDataE("");
      setDataM("");
      setDataN("");
      setTimeout(() => {
        setIsClicked(false);
      }, 100);
    } else {
      alert("Please fill the details");
    }
  }

  useEffect(() => {
    createData();
  }, [userDetails]);

  return (
    <div className="fssaiF">
      <div className="trademarksTFirstChild">
        <div className="trademarksTFirstChild_1st">
          <div className="trademarksTFirstChild_1st_1st">
            <div className="div">
              <img src={require("../trademarks/trademarks.png")} alt="photo" />
            </div>
            <div
              className="div1"
              style={{
                color: "rgb(49, 66, 89)",
                lineHeight: "32px",
                margin: "20px",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              <h3>Document Required</h3>

              <p>Passport</p>
              <p>Pan Card</p>
              <p>Promoter's Passport size photo</p>
            </div>
          </div>
          <div
            className="trademarksTFirstChild_1st_2nd"
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            <h2>FSSAI Registration</h2>
            <div className="trademarksTFirstChild_1st_2nd_1st">
              <div className="ratings">4.9</div>
              <div className="ratings1">100 Customers</div>
            </div>
            <div
              style={{
                borderBottom: "1px solid rgb(0 0 0/40%)",
                marginLeft: "0.5vw",
                marginRight: "0.5vw",
              }}
            >
              <p
                style={{
                  color: "rgb(49, 66, 89)",
                  lineHeight: "32px",
                  margin: "20px 0px",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                FSSAI Registration application preparation and filing for small
                food businesses, petty retailers, juice shops and hawkers by
                FSSAI consultant.
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <div
                className="div1"
                style={{ backgroundColor: radio1 ? "aliceblue" : "white" }}
                onClick={handleRadio1}
              >
                <input
                  type="radio"
                  name="same"
                  checked={radio1 ? true : false}
                />{" "}
                <span style={{ fontWeight: "bold" }}>Basic</span>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "32px",
                    margin: "20px 0px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  <ul>
                    <li>FSSAI Registration</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="trademarksTFirstChild_2nd">
          <div className="trademarksTFirstChild_2nd_1st">
            <h3
              style={{
                color: "rgb(49, 66, 89)",
                lineHeight: "32px",
                margin: "20px 0px",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Contact Us for more details
            </h3>
          </div>
          <div className="trademarksTFirstChild_2nd_2nd">
            <input
              placeholder="Name"
              autoFocus
              value={dataN}
              onChange={(e) => {
                setName(e.target.value);
                setDataN(e.target.value);
              }}
            />
            <input
              placeholder="Mobile No."
              value={dataM}
              onChange={(e) => {
                setMob(e.target.value);
                setDataM(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              value={dataE}
              onChange={(e) => {
                setEmail(e.target.value);
                setDataE(e.target.value);
              }}
            />
            <div
              className="trademarksTFirstChild_2nd_2nd_button"
              onClick={handleSubmit}
              style={{
                backgroundColor: isClicked ? true : false,
                transform: isClicked ? "scale(0.9)" : false,
              }}
            >
              Submit
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20vh" }}>
        <h1>FSSAI License and Registration</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          FSSAI License and Registration is required for any food business in
          India that manufactures, stores, transports, or distributes food.
          Depending on the size and nature of the company, FSSAI registration or
          license may be required. In the FSSAI Registration process, the FBO
          will get a 14 digit number that needs to be printed on food packages.
          Obtaining a FSSAI license can provide the food business with legal
          benefits, build goodwill, ensure food safety, create consumer
          awareness, and assist in business expansion. IndiaFilings can help you
          obtain an FSSAI license throughout the country very quickly. We also
          help to get FSSAI registration. Our experts will guide you in
          selecting the proper food category and license.
        </p>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          The Food Safety and Standards Authority of India (FSSAI) is a legal
          authority that offers a food license to all food business operators
          (FBO) in India. As per Section 31(1) Food Safety and Standards Act,
          2006, every Food Business Operator in the country must be licensed
          under the Food Safety & Standards Authority of India (FSSAI). The
          FSSAI licensing and registration procedure and requirements are
          regulated by the Food Safety & Standards (Licensing and Registration
          of Food Business) Regulations, 2011.
        </p>
        <h1 style={{ marginTop: "10vh" }}>
          Food Business Operators Who Require FSSAI Registration?
        </h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          The Food Business Operators (FBOs) carrying on the following kinds of
          the food business must have FSSAI License/Registration:
          <ul>
            <li>
              Petty retailers, Retail Shops, Snacks shops, Confectionery or
              Bakery shops, etc
            </li>
            <li>
              Temporary stalls, fixed stalls, or food premises are involved in
              preparing, storing, distributing, and selling food products.
            </li>
            <li>
              Hawkers sell packaged or freshly prepared food by traveling from
              one location to another.
            </li>
            <li>
              Dairy Units, including Milk Chilling Units, Petty Milkmen, and
              Milk Vendors
            </li>
            <li>Slaughtering house</li>
            <li>Fish Processing, Meat Processing, and unit</li>
            <li>All Food Manufacturing units that include Repacking food</li>
            <li>Vegetable Oil Processing Units</li>
            <li>Proprietary food and Novel food</li>
            <li>Cold/refrigerated storage facility</li>
            <li>
              Transporter of food products having several specialized vehicles
              like insulated refrigerated vans/wagons, milk tankers, food
              wagons, food trucks, etc
            </li>
            <li>
              Wholesalers, suppliers, distributors, and marketers of food
              products
            </li>
            <li>Hotels, Restaurants, and Bars</li>
            <li>Canteens and Cafeteria, including mid-day meal canteens</li>
            <li>Food Vending Agencies and Caterers</li>
            <li>
              Dhaba, PG provides food, a Banquet hall with food catering
              arrangements, Home Based Canteen, and Food stalls at fairs or
              religious institutions.
            </li>
            <li>Importers and Exporters of food items and food ingredients</li>
            <li>E-Commerce food suppliers, including cloud kitchens</li>
            <li>Eligibility Criteria for Food Business Registration/License</li>
            <li>
              The document attached here provides eligibility criteria for Food
              Business Registration/License.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
