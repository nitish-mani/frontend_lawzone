import { useState } from "react";

export default function Pass({ setPassword }) {
  const [adminP, setAdminP] = useState("");
  function handleSubmit() {
    if (adminP === "lawzone12345") {
      setPassword(adminP);
    } else {
      alert("Please enter right password");
    }
  }
  console.log(adminP);

  return (
    <div
      style={{
        width: "400px",
        height: "300px",
        marginTop: "5vh",
        marginBottom: "10vh",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "1px 1px 10px black",
        paddingTop: "5vh",
      }}
    >
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
      <div
        onClick={handleSubmit}
        style={{
          width: "100px",
          height: "30px",
          color: "white",
          backgroundColor: "black",
          borderRadius: "5px",
          textAlign: "center",

          marginLeft: "auto",
          marginRight: "auto",

          fontSize: "18px",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Submit
      </div>
    </div>
  );
}
