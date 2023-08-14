import "./nitiayog.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NITIAayog({
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
      url: `${process.env.REACT_APP_BASE_URL}/postData`,
      data: userDetails,
    });

  function handleSubmit() {
    if (name && mob && email) {
      setUserDetails({
        name: name,
        phoneNumber: mob,
        email: email,
        service: "NITI Aayog",

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
    <div className="nitiA">
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
            <h2>NITI Aayog Registration</h2>
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
                Niti Aayog has been started out by the Government of India to
                create and promote healthy partnership between NGOs/VOs and the
                Government of India. Niti Aayog has initiated a portal named
                NGO-Darpan. This portal enables VOs/NGOs to enroll centrally and
                thus facilitates creation of a repository of information about
                NGOs/VOs, sector-wise/state-wise. If any NGO is desirous of
                receiving grants under Govt. schemes, it has to sign-up on the
                NGO-DARPAN portal and obtain a Unique Identity Number (UIN) by
                providing requisite information
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.YjUAgISKSsZuc1b_-mFg2QHaEK&pid=Api&P=0&h=180"
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

      <div style={{ marginTop: "25vh" }}>
        <h1>NITI Aayog Registration</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          The Planning Commission of India supervised the five-year plan for the
          economic development of the country. However, in 2014, the 65-year-old
          Planning Commission was dissolved and a think tank – NITI Aayog
          (National Institution for Transforming India) took its place. In this
          article, we will look at the aims and objectives of the NITI Aayog.
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
          In the period of Digitalization, now Government is focusing on
          maintaining a centralized database of all NGO/Society/Trust which want
          to avail government grant/funding to achieve their objectives. For
          that purpose, government has now, made it mandatory for all
          NGO/Society/ Trust to take registration in Niti Aayog before
          approaching any government department to present their project/ apply
          for government welfare scheme funding from them.
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
          As explained above, the aim of government is to maintain a centralized
          database of all NGO/Trust/Society desirous to work for the welfare of
          society and wants to raise fund/grant from government department to
          achieve their objectives.
        </p>

        <h1 style={{ marginTop: "10vh" }}>
          Eligibility Criteria for Niti Aayog Registration:
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
          <ul>
            <li>
              As on Date, NGO/Trust/Society having valid PAN Number is eligible
              to apply for Niti Aayog Registration. Persons in Individual
              Capacity are not allowed to apply for Niti Aayog Registration
            </li>
            <li>Must have valid mail id and Mobile Number</li>
            <li>
              Must have valid PAN Card, Aadhar Card details of governing body
              members
            </li>
            <li>
              Must have valid Trust Deed/ Society Registration Certificate
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
