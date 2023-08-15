import { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import AdminCard from "./admincard";
// require("dotenv").config();
// import "dotenv/config";

export default function Admin() {
  const [getData, setGetData] = useState([]);

  const [count, setCount] = useState(0);

  const userData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/getData`);
    // console.log(res.data);
    setGetData(res.data.reverse());
  };

  const userUpdate = async (id) => {
    console.log(id);
    await axios.patch(`${process.env.REACT_APP_BASE_URL}/updateData/${id}`, {
      read: true,
    });
    await userData();
  };

  useEffect(() => {
    userData();
  }, []);

  const getCount = () => {
    let x = 0;
    getData.map((user) => {
      if (user.read === true) {
        x++;
      }
      return;
    });
    setCount(x);
  };
  useEffect(() => {
    getCount();
  }, [getData]);

  return (
    <div className="div_parent_admin">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          <h1>Hello Mr. Admin</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",

            width: "50%",
          }}
        >
          <h3>All ({getData.length})</h3>
          <h3>Read ({count})</h3>
          <h3>Unread ({getData.length - count})</h3>
        </div>
      </div>
      <div className="parent-admin">
        {getData.map((user) => {
          return (
            <div
              onClick={() => {
                userUpdate(user._id);
              }}
            >
              <AdminCard user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
