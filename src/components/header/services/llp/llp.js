import "./llp.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LLP({ name, setName, mob, setMob, email, setEmail }) {
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
        service: "LLP Registration",

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
    <div className="llpL">
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
              <p>Voter Identity Card</p>
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
            <h2>LLP Registration</h2>
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
                LLP Registration and deed drafting.
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
                Instant Name Application for LLP.
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
                    <li>LLP Deed Drafting</li>
                    <li>LLP Registration</li>
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
        <h1>Limited Liability Partnership (LLP) Registration</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Limited Liability Partnership (LLP) has become a preferred form of
          organization among entrepreneurs in India. An LLP incorporates the
          benefits of a partnership firm and a company. As the name suggests, an
          LLP is a partnership firm established by a minimum of two partners who
          enter into an LLP agreement. However, the partners of an LLP have
          limited liability and the LLP has perpetual succession just like a
          company.
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
          The concept of the Limited Liability Partnership (LLP) was introduced
          in India in 2008. The Limited Liability Partnership Act, 2008
          regulates the LLPs in India. Minimum two partners are required to
          incorporate an LLP. However, there is no upper limit on the maximum
          number of partners of an LLP.
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
          Among the partners, there should be a minimum of two designated
          partners who must be natural persons, and at least one of them should
          be resident in India. The rights and duties of designated partners are
          governed by the LLP agreement. They are directly responsible for the
          compliance of all the provisions of the LLP Act, 2008 and provisions
          specified in the LLP agreement.
        </p>
        <h1>Documents Required for LLP Registration</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          <h2>A. Documents of Partners</h2>
          <ul>
            <li>PAN Card/ ID Proof of Partners</li>
            <li>Address Proof of Partners</li>
            <li>Residence Proof of Partners</li>
            <li>Photograph</li>
            <li>Passport (in case of Foreign Nationals/ NRIs) </li>
          </ul>
          <h2>B. Documents of LLP</h2>
          <ul>
            <li>Proof of Registered Office Address</li>
            <li>Digital Signature Certificate</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
