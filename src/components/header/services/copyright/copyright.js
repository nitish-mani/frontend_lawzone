import "./copyright.css";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Copyright({
  name,
  setName,
  mob,
  setMob,
  email,
  setEmail,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const createData = () =>
    axios({
      method: "POST",
      url: "https://q9i3qxmuzi.execute-api.ap-south-1.amazonaws.com/second/postData",
      data: userDetails,
    });

  function handleSubmit() {
    setUserDetails({
      name: name,
      phoneNumber: mob,
      email: email,
      service: "Copyrights",

      date: `${new Date().getDate()} / ${
        new Date().getMonth() + 1
      } / ${new Date().getFullYear()}`,
      time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
    });
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  }

  useEffect(() => {
    createData();
  }, [userDetails]);

  return (
    <div className="copyrightC">
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
            <h2>Copyright Registration</h2>
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
                Copyright registration for logos, books, periodicals and
                magazines.
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.n2DRlfaWtWaY6Sr4MCzsmQHaHa&pid=Api&P=0&h=180"
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
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="Mobile No."
              onChange={(e) => {
                setMob(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
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
        <h1>What is Copyright ?</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Copyright is a bundle of rights given by the law to the creators of
          literary, dramatic, musical and artistic works and the producers of
          cinematograph films and sound recordings. The rights provided under
          Copyright law include the rights of reproduction of the work,
          communication of the work to the public, adaptation of the work and
          translation of the work. The scope and duration of protection provided
          under copyright law varies with the nature of the protected work.
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
          In a 2016 copyright lawsuit, the Delhi High Court states that
          copyright is "not an inevitable, divine, or natural right that confers
          on authors the absolute ownership of their creations. It is designed
          rather to stimulate activity and progress in the arts for the
          intellectual enrichment of the public. Copyright is intended to
          increase and not to impede the harvest of knowledge. It is intended to
          motivate the creative activity of authors and inventors in order to
          benefit the public.
        </p>
      </div>
      <div style={{ marginTop: "10vh" }}>
        <h1>Documents Required for Copyright</h1>
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
            <li>Aadhaar Card</li>
            <li>Pan Card</li>
            <li>Incorporation Certificate</li>
            <li>Company PAN</li>
            <li>Company TAN</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
