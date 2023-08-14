import { useEffect, useState } from "react";
import "./contact.css";
import axios from "axios";

export default function Contact({
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

  function handleFormInput() {
    if (name && mob && email) {
      setUserDetails({
        name: name,
        phoneNumber: mob,
        email: email,
        date: `${new Date().getDate()} / ${
          new Date().getMonth() + 1
        } / ${new Date().getFullYear()}`,
        time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
      });
      setDataN("");
      setDataM("");
      setDataE("");
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    } else {
      alert("Please fill the details");
    }
  }

  useEffect(() => {
    createData();
  }, [userDetails]);

  return (
    <div className="contactC">
      <h1>Contact Us</h1>

      <div className="contactForm">
        <form>
          <div className="contactFormName">
            <span>Name</span>
            <input
              type="text"
              value={dataN}
              autoFocus
              onChange={(e) => {
                setName(e.target.value);
                setDataN(e.target.value);
              }}
            />
          </div>
          <div className="contactFormMob">
            <span>Mobile No.</span>
            <input
              type="text"
              value={dataM}
              onChange={(e) => {
                setMob(e.target.value);
                setDataM(e.target.value);
              }}
            />
          </div>
          <div className="contactFormEmail">
            <span>Email</span>
            <input
              type="email"
              value={dataE}
              onChange={(e) => {
                setEmail(e.target.value);
                setDataE(e.target.value);
              }}
            />
          </div>
          <div
            className="contactFormButton"
            type="submit"
            onClick={handleFormInput}
            style={{
              backgroundColor: isClicked ? "white" : true,
              transform: isClicked ? "scale(0.8)" : true,
            }}
          >
            Submit
          </div>
        </form>
      </div>
    </div>
  );
}
