import "./msme.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MSME({ name, setName, mob, setMob, email, setEmail }) {
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
        service: "MSME",

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
    <div className="msme">
      <div className="trademarksTFirstChild">
        <div className="trademarksTFirstChild_1st">
          <div className="trademarksTFirstChild_1st_1st">
            <div className="div">
              <img
                src="https://www.eastgateexport.com/wp-content/uploads/2021/04/MSME-Certificate_Page1.jpg"
                alt="photo"
              />
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
            <h2>MSME</h2>
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
                  lineHeight: "25px",
                  margin: "20px 0px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                The government of India provides a MSME registration to the
                Micro, Small and Medium (MSME) industries. The MSME registration
                helps MSMEs to obtain various benefits provided by the
                government for their establishment and growth. MSME industries
                are the backbone of the economy. They are known as Small Scale
                Industries (SSIs).
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.xph86ri7vtkFASHx9PzW0QAAAA&pid=Api&P=0&h=180"
                alt="photo"
              />
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

      <div style={{ marginTop: "10vh" }}>
        <h1>What is MSME classification?</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Initially, when the government introduced the MSME registration in
          2006, the MSME classification was based on the investment criteria in
          plant and machinery or equipment. The government revised the MSME
          classification by inserting annual investment and annual criteria.
          Also, the distinction between the manufacturing and the services
          sectors under the MSME definition was removed.
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
          The following is the current revised MSME classification, where the
          investment and annual turnover are to be considered for deciding if an
          entity is considered as an MSME:
        </p>
      </div>
      <div
        className="msme-data"
        style={{
          color: "rgb(49, 66, 89)",
          lineHeight: "32px",
          margin: "20px 0px",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        <div className="msme-data-1st">Revised MSME Classification</div>
        <div className="msme-data-2nd">
          <div>Criteria</div>
          <div>Micro</div>
          <div>Small</div>
          <div>Medium*</div>
        </div>
        <div className="msme-data-3rd">
          <div>Investment & Annual Turnover</div>
          <div>{"< Rs.1 crore & < Rs.5 crore"}</div>
          <div>{"< Rs.10 crore & < Rs.50 crore"}</div>
          <div>{"< Rs.50 crore & < Rs.250 crore"}</div>
        </div>
      </div>
      <h1 style={{ marginTop: "10vh" }}>
        Documents Required for MSME Registration
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
        <h3>The MSME registration documents are as follows:</h3>
        <li>Aadhaar Card</li>
        <li>Pan Card</li>
      </p>
    </div>
  );
}
