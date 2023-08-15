import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
// require("dotenv").config();
// import "dotenv/config";
export default function Pass({ setPassword }) {
  const navigate = useNavigate();
  const [adminP, setAdminP] = useState("");
  function handleSubmit() {
    if (adminP === process.env.REACT_APP_ADMIN_PASS) {
      setPassword(adminP);
    } else {
      alert("Please enter right password");
    }
  }
  console.log(adminP);

  return (
    <div className="passP">
      <h2
        style={{
          color: "rgb(49, 66, 89)",

          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        Password
      </h2>
      <br />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setAdminP(e.target.value);
        }}
        style={{
          width: "60%",
          height: "30px",
          marginBottom: "40px",

          color: "rgb(49, 66, 89)",

          fontSize: "12px",
          fontWeight: "500",
          textAlign: "center",
        }}
      />
      <div onClick={handleSubmit} className="passSubmit">
        Submit
      </div>
    </div>
  );
}
