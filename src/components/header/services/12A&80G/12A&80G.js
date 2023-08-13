import "./12A&80G.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function F12A_80G({
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
        service: "12A & 80G",

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
            <h2>12A & 80G</h2>
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
                The charitable institutions are eligible for certain tax
                exemptions and benefits in India. The exemptions and benefits
                are dealt with under Sections 12A/12AA and 80G of the Income Tax
                Act, 1961. The institutions availing benefits under Section 12A
                and 80G had to revalidate their registrations under these two
                sections before August 2020 to continue to obtain the benefits.
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.oCd2tguGV32esjLdWiP09AHaD4&pid=Api&P=0&h=180"
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
                backgroundColor: isClicked ? "black" : false,
                transform: isClicked ? "scale(0.9)" : false,
              }}
            >
              Submit
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10vh" }}>
        <h1>Revalidation of 80G and 12A – Process and Procedure</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          The charitable institutions are eligible for certain tax exemptions
          and benefits in India. The exemptions and benefits are dealt with
          under Sections 12A/12AA and 80G of the Income Tax Act, 1961. The
          institutions availing benefits under Section 12A and 80G had to
          revalidate their registrations under these two sections before August
          2020 to continue to obtain the benefits.
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
          The existing religious or charitable institutions or NGO’s had to
          re-apply to the Income Tax authorities for revalidation of the
          existing registrations. The charitable institutions cannot claim the
          benefits provided to them under 12A and 80G deductions without
          revalidation. This revalidation process focuses on whether the
          charitable activities of the institution or trust, or NGO are genuine
          or not.
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
          The revalidation is necessary due to the changes made by way of
          amendment to the Finance Act, 2020, which mandates that the charitable
          institutions registered under Sections 12A/12AA and/or 80G of the
          Income Tax Act, 1961 are required to re-apply online for
          approval/registration by 31 August 2020. This amended provision came
          into force on 1 June 2020.
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
          However, due to the COVID-19 situation, the CBDT (Central Board of
          Direct Taxes) deferred the start date to 1 October 2020, and the
          charitable institutions had to re-apply for registration by 31
          December 2020. On the 26 of March 2021, the CBDT notified the
          Income-Tax (6th Amendment) Rules, 2021 that states the procedure for
          fresh registration and the list of documents required for
          organisations registered under Section 12A/12AA/80G.
        </p>
      </div>
    </div>
  );
}
