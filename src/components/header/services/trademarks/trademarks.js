import { useState, useEffect } from "react";
import "./trademarks.css";
import axios from "axios";

export default function Trademarks({
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
      url: "https://q9i3qxmuzi.execute-api.ap-south-1.amazonaws.com/second/postData",
      data: userDetails,
    });

  function handleSubmit() {
    if (name && mob && email) {
      setUserDetails({
        name: name,
        phoneNumber: mob,
        email: email,
        service: "Trademarks",
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
    <div className="trademarksT">
      <div className="trademarksTFirstChild">
        <div className="trademarksTFirstChild_1st">
          <div className="trademarksTFirstChild_1st_1st">
            <div className="div">
              <img src={require("./trademarks.png")} alt="photo" />
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
              <p>Incorporation Certificate</p>
              <p>Partnership Deed</p>
              <p>Pan Card</p>
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
            <h2>Trademark Registration</h2>
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
                  display: radio2 ? "block" : "none",
                  color: "rgb(49, 66, 89)",
                  lineHeight: "32px",
                  margin: "20px 0px",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Trademark filing under one class for large enterprises not
                eligible of MSME registration.
              </p>
              <p
                style={{
                  display: radio1 ? "block" : "none",

                  color: "rgb(49, 66, 89)",
                  lineHeight: "32px",
                  margin: "20px 0px",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                Trademark search and application filing under one class.
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
                <span style={{ fontWeight: "bold" }}>MSME</span>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "32px",
                    margin: "20px 0px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Trademark Filing including Government fee for individuals and
                  SMEs.
                </p>
              </div>
              <div
                className="div2"
                style={{ backgroundColor: radio2 ? "aliceblue" : "white" }}
                onClick={handleRadio2}
              >
                <input
                  type="radio"
                  name="same"
                  checked={radio2 ? true : false}
                />
                <span style={{ fontWeight: "bold" }}>Regular</span>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "32px",
                    margin: "20px 0px",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Trademark Filing including Government fee for entities NOT
                  having MSME registration.
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
      <div className="trademarksTSecondChild">
        <div style={{ marginTop: "20vh" }}>
          <h2>What is Trademark</h2>
          <p
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Trademark defined under Section 2 of the Trade Marks Act, 1999 as,
            "trade mark means a mark capable of being represented graphically
            and which is capable of distinguishing the goods or services of one
            person from those of others and may include shape of goods, their
            packaging and combination of colours." A mark can include a device,
            brand, heading, label, ticket, name, signature, word, letter,
            numeral, shape of goods, packaging or combination of colors or any
            such combinations. The trademark prevents unauthorized use of an
            individual's or company's product or service without their
            permission.
          </p>
        </div>
        <div>
          <h2 style={{ marginTop: "10vh" }}>
            Documents Required for Trademark Registration
          </h2>
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
              <li>Incorporation Certificate</li>
              <li>Partnership Deed</li>
              <li>Form TM-48 Signed</li>
              <li>Aadhaar Card</li>
              <li>Pan Card</li>
              <li>Logo</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
