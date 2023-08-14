import "./pvtltd.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Pvtltd({
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
        service: "Private Limited Company",

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
    <div className="pvtltdP">
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
              <p>Passport (foreigners only)</p>
              <p>Aadhaar Card</p>
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
            <h2>Pvt. Ltd. Company Registration</h2>
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
                  lineHeight: "25px",
                  margin: "20px 0px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                Company registration including Government Fee & Stamp Duty*.
                Incorporation kit with share certificates.
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
                Instant Name Application for Company.
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
                <span style={{ fontWeight: "bold" }}>Name Approval</span>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "32px",
                    margin: "20px 0px",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  <ul>
                    <li>Instant Filing</li>
                    <li>4 Name Choice</li>
                  </ul>
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
                <span style={{ fontWeight: "bold" }}>Incorporation</span>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "18px",
                    margin: "20px 0px",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  <ul>
                    <li>Company Registration</li>
                    <li>Share Certificates</li>
                    <li>Current Account Opening</li>
                    <li>2 Digital Signatures</li>
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
        <h1>What Is A Private Limited Company?</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          According to the Companies Act, 2013, a private limited company is a
          company whose article of association restricts the transferability of
          shares and prevents the public from subscribing to them. This is a
          distinct feature that differentiates private limited companies from
          other types of public companies. With the rapid business growth across
          the country, there is a demand to learn more about the distinct
          business entities in India and their legal terms and conditions. In
          this article, we discuss what is a private limited company, explore
          the various types of private limited companies and learn how to start
          one.
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
          Section 2 of The Companies Act, 2013 defines a private limited company
          as a separate entity that is held privately and provides limited
          liability. It does not freely transfer its shares to the public like
          other public companies. In a private limited company, all business
          profits and liabilities belong to the company itself and stakeholders
          may not be responsible for debts incurred by the company.
        </p>
        <h1>Who can set up and run a private limited company?</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          A private limited company can have a minimum of two directors and a
          maximum of fifteen directors. In addition, at least two shareholders
          can have a legal distribution of shares of a private limited company.
          A total number of two hundred shareholders is acceptable.
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
          Similarly, it requires at least two directors to manage a private
          limited company. They can be shareholders of the company. According to
          Section 2 (clause 68) of The Companies Act, 2013, any private limited
          company may have paid-up capital of 1 lakh rupees minimum or higher,
          which is specified by the government.
        </p>
      </div>
    </div>
  );
}
