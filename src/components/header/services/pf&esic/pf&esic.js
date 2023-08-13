import "./pf&esic.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PF_ESIC({
  name,
  setName,
  mob,
  setMob,
  email,
  setEmail,
}) {
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
        service: "PF & ESIC",

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
    <div className="pfesic">
      <div className="trademarksTFirstChild">
        <div className="trademarksTFirstChild_1st">
          <div className="trademarksTFirstChild_1st_1st">
            <div className="div">
              <img src={require("../trademarks/trademarks.png")} alt="photo" />
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
            <h2>PF & ESIC</h2>
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
                The government introduced the ESI scheme for Indian workers. ESI
                stands for Employee State Insurance managed by the Employee
                State Insurance Corporation (ESIC). The ESIC is an autonomous
                body created by the law under the Ministry of Labour and
                Employment, Government of India.
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.iqawv3hXNxp9tsCBOB4IDQAAAA&pid=Api&P=0&h=180"
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
        <h1>PF & ESIC</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          The government introduced the ESI scheme for Indian workers. ESI
          stands for Employee State Insurance managed by the Employee State
          Insurance Corporation (ESIC). The ESIC is an autonomous body created
          by the law under the Ministry of Labour and Employment, Government of
          India.
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
          ESI scheme provides social security to the workers. Employers and
          employees contribute a percentage of employee's wages towards ESI
          every month. Huge variety of medical, monetary and other benefits are
          provided to workers covered under the ESI Act.
        </p>

        <h1 style={{ marginTop: "10vh" }}>ESIC Registration Eligibility</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Any non-seasonal factory or establishment having more than 10
          employees (in some states it is 20 employees) who have a maximum
          salary of Rs. 21,000/- are covered under the ESI scheme and thus, they
          have to mandatorily register with the ESIC within 15 days from the
          date of its applicability.
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
          Under this scheme, the employer needs to contribute an amount of 3.25%
          of the total monthly salary payable to the employee whereas the
          employee needs to contribute only 0.75% of his monthly salary every
          month of the year. The only exemption to the employee in paying his
          contribution is whose salary is less than Rs. 176/- per day.
        </p>
      </div>
      <div
        className="lastDiv"
        style={{ textAlign: "center", marginTop: "10vh" }}
      >
        <img
          src={require("./30092022_ESIC-Registration1-1024x654.jpg")}
          alt="photo"
        />
      </div>
    </div>
  );
}
