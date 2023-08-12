import { useState } from "react";
import "./header.css";
import { Outlet, useNavigate } from "react-router";

export default function Headers({
  home,
  contact,
  services,
  isHovered,
  isHovered1,
  isHovered2,
}) {
  function handleMouseEnterHome() {
    home(true);
  }
  function handleMouseLeaveHome() {
    home(false);
  }

  function handleMouseEnterContact() {
    contact(true);
  }
  function handleMouseLeaveContact() {
    contact(false);
  }

  function handleMouseEnterServices() {
    services(true);
  }
  function handleMouseLeaveServices() {
    services(false);
  }

  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    if(inData==='nitish7376610360'){
      navigate('/admin');
    }
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
  }

  const [inData,setInData]=useState('');

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="img">
        <img
          src={require("./contact/Lawzon-India-Logo-3b.png")}
          alt="logo"
          className="img"
        />
      </div>

     <div className="inputField">
     <input type="text" className="input" onChange={(e)=>{
        setInData(e.target.value);
      }}/>
      <button
        className="button"
        onClick={handleClick}
        style={{
          backgroundColor: isClicked ? "#0D1282" : true,
          transform: isClicked ? "scale(0.8)" : true,
          // transition: isClicked ? "2s" : '0s',
        }}
      >
        Search
      </button>
     </div>
     <div className="componentsField">
     <div
        className="home"
        onMouseEnter={handleMouseEnterHome}
        onMouseLeave={handleMouseLeaveHome}
        style={{
          color: isHovered ? "#068fff" : "rgb(49, 66, 89)",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </div>
      <div
        className="ourservices"
        onMouseEnter={handleMouseEnterServices}
        onMouseLeave={handleMouseLeaveServices}
        style={{
          color: isHovered1 ? "#068fff" : "rgb(49, 66, 89)",

          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Our Services
      </div>
      <div
        className="contactus"
        onMouseEnter={handleMouseEnterContact}
        onMouseLeave={handleMouseLeaveContact}
        style={{
          color: isHovered2 ? "#068fff" : "rgb(49, 66, 89)",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/contact");
        }}
      >
        Contact Us
      </div>
     </div>
    </div>
  );
}
