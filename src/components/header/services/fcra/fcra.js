import "./fcra.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FCRA({ name, setName, mob, setMob, email, setEmail }) {
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
        service: "FCRA",

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
    <div className="fcraF">
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
            <h2>FCRA</h2>
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
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                All the Charitable trust, societies and Section 8 Company that
                receives foreign contribution or donation from foreign resources
                shall apply for FCRA Registration. FCRA registration is done
                under the Foreign Contribution Regulation Act, 2010. FCRA stands
                for Foreign Contribution Regulation Act.
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.1u-NBxVPBGJ-Kqc0Qz5wkwHaFr&pid=Api&P=0&h=180"
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
        <h1>
          FCRA Registration – Eligibility & Application Procedure in India
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
          In the present scenario, the world is more focused towards social and
          environmental causes. Businesses themselves, apart from their regular
          objective of profit-making, are actively involved in activities that
          promote social, economic, cultural and environmental growth and
          prosperity.
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
          The world today is so well connected and so well linked that
          accessibility to any part of the world is easy. Transactions between
          people, places and countries take place on a day to day basis. As a
          result, the flow of foreign currency into and out of each country is
          now completely natural and an absolute commonality.
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
          The volume at which these transactions are carried on is at a pretty
          high level, and as a result, it is almost not possible to keep track
          of the inflow and outflow of foreign currency in a regular manner.
          This brought about the need for the Foreign Contribution Regulation
          Act, 2010.
        </p>

        <h1 style={{ marginTop: "10vh" }}>
          Eligibility for obtaining FCRA Registration
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
          Organizations seeking foreign contributions for definite cultural,
          social, economic, educational or religious programmes may obtain FCRA
          registration or receive foreign contribution through “prior
          permission” route. It is preferable for an FCRA applicant to be a
          Trust or Society or a Section 8 Company. The not-for-profit entity
          must have also been in existence for a minimum of three years while
          making the FCRA application and should not have received any foreign
          contribution prior to that without the Government’s approval.
          Additionally, the entity seeking registration should have spent at
          least Rs.10,00,000/- over the last three years on its aims and
          objects, excluding administrative expenditure. Statements of Income &
          Expenditure, duly audited by Chartered Accountant, for last three
          years are to be submitted to substantiate that it meets the financial
          parameter.
        </p>
      </div>
    </div>
  );
}
