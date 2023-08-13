import "./iec.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function IEC({ name, setName, mob, setMob, email, setEmail }) {
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
        service: "Import & Export Code",

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
    <div className="iecI">
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
              <p>Incorporation Certificate</p>
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
            <h2>Impor & Export Code</h2>
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
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Get your Import Export Code & RCMC registrations with Exclusive
                Benefits of DBS Exporter Bank Account.
              </p>
              <p
                style={{
                  display: radio1 ? "block" : "none",

                  color: "rgb(49, 66, 89)",
                  lineHeight: "32px",
                  margin: "20px 0px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Start an import or export business from India. Enjoy exclusive
                offers from DBS Bank India on low forex rates and LEDGERS Export
                invoicing software.
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
                <span style={{ fontWeight: "bold" }}>Startup</span>
                <p style={{ fontSize: "13px" }}>New Registration</p>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "25px",
                    margin: "20px 0px",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  <ul>
                    <li>DGFT IE Code</li>
                    <li>Export Invoicing Software</li>
                    <li>DBS Exporter Account</li>
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
                <span style={{ fontWeight: "bold" }}>ScaleUp</span>
                <p style={{ fontSize: "13px" }}>Upgrade Registration</p>
                <p
                  style={{
                    color: "rgb(49, 66, 89)",
                    lineHeight: "25px",
                    margin: "20px 0px",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  <ul>
                    <li>DBS Exporter Account</li>
                    <li>DGFT Digital Signature</li>
                    <li>ICE Gate</li>
                    <li>GST LUT</li>
                    <li>RCMC Registration</li>
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
        <h1>What is Import Export Code ?</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Import Export Code (also known as IEC code) is a 10-digit
          identification number that is issued by the DGFT (Director General of
          Foreign Trade), Department of Commerce, Government of India. It is
          also known as Importer Exporter Code. Companies and businesses must
          obtain this code to start a business that deals with imports and
          export in the Indian territory. It is not possible to deal with export
          or import business without this IEC code.
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
          IEC registration certificate is mandatory for a business involved in
          import and export. Hence, before initiating an import of goods into
          India, an importer must ensure that the importing entity has GST
          registration and IE code – both of which are required to clear
          customs.
        </p>

        <h1>Document Required</h1>
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
            <li>Pan Card</li>
            <li>Aadhaar Card</li>
            <li>Incorporation Certificate</li>
            <li>Cancelled Bank Cheque</li>
            <li>Electricity Bill</li>
            <li>Rental Agreement</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
