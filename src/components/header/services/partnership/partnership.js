import "./partnership.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Partnership({
  name,
  setName,
  mob,
  setMob,
  email,
  setEmail,
}) {
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
      url: `${process.env.REACT_APP_BASE_URL}/postData`,
      data: userDetails,
    });

  function handleSubmit() {
    if (name && mob && email) {
      setUserDetails({
        name: name,
        phoneNumber: mob,
        email: email,
        service: "Partnership",

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
    <div className="partnershipP">
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

              <p>Aadhaar Card</p>
              <p>Pan Card</p>
              <p>Rental Agreement</p>
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
            <h2>Partnership Firm Registration</h2>
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
                Partnership deed drafting along with GST registration.
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
                    <li>Preparation of Deed</li>
                    <li>PAN of Firm</li>
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
        <h1>Partnership Firm</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Everything you need to know about the partnership form of business.
          The need for partnership form or organization arose from the
          limitations of sole proprietor­ship and joint hindu family firm.
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
          With the expansion of business, it became necessary for a group of
          person to join hands together and supply necessary capital and skill.
          A person may possess exceptional business ability but no capital; he
          can have a financing partner.
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
          Section 4 of Indian Partnership Act of 1932 defines partnership as
          “the relation between person who has agreed to share profits of a
          business carried on by all or any of them acting for all.”
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
          Owners of the partnership business are individually called partners
          can collectively called a “firm”.
        </p>
      </div>
    </div>
  );
}
