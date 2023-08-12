import { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import Admin_Card from "./admin_card";

export default function Admin() {
  const [getData, setGetData] = useState([]);

  const [count, setCount] = useState(0);

  const userData = async () => {
    const res = await axios.get(
      "https://q9i3qxmuzi.execute-api.ap-south-1.amazonaws.com/second/getData"
    );
    // console.log(res.data);
    setGetData(res.data.reverse());
  };

  const userUpdate = async (id) => {
    const res = await axios.patch(
      `https://q9i3qxmuzi.execute-api.ap-south-1.amazonaws.com/second/updateData/${id}`,
      {
        read: true,
      }
    );
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
    });
    setCount(x);
  };
  useEffect(() => {
    getCount();
  }, [getData]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%" }}>
          <h1
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "25px",
              fontWeight: "900",
            }}
          >
            Hello Mr. Admin
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",

            width: "50%",
          }}
        >
          <h3
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            All ({getData.length})
          </h3>
          <h3
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Read ({count})
          </h3>
          <h3
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Unread ({getData.length - count})
          </h3>
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
              <Admin_Card user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
