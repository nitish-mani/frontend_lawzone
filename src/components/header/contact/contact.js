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

  const createData = () =>
    axios({
      method: "POST",
      url: "https://q9i3qxmuzi.execute-api.ap-south-1.amazonaws.com/second/postData",
      data: userDetails,
    });

  function handleFormInput() {
    setUserDetails({
      name: name,
      phoneNumber: mob,
      email: email,
      date: `${new Date().getDate()} / ${
        new Date().getMonth() + 1
      } / ${new Date().getFullYear()}`,
      time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
    });

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 150);
  }

  useEffect(() => {
    createData();
  }, []);

  return (
    <div className="contactC">
      <h1>Contact Us</h1>

      <div className="contactForm">
        <form>
          <div className="contactFormName">
            <span>Name</span>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="contactFormMob">
            <span>Mobile No.</span>
            <input
              type="text"
              onChange={(e) => {
                setMob(e.target.value);
              }}
            />
          </div>
          <div className="contactFormEmail">
            <span>Email</span>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
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
