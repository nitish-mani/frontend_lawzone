import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footerF">
      <div className="footerF_1st">
        <a href="https://www.facebook.com/groups/lawsindia.in/" target="_blank">
          <FacebookIcon />{" "}
        </a>

        <a href="#" target="_blank">
          <InstagramIcon />
        </a>

        <a href="#" target="_blank">
          <YouTubeIcon />
        </a>

        <a href="#" target="_blank">
          <TwitterIcon />
        </a>
      </div>

      <div className="footerF_2nd">
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </h3>
        <span>/</span>
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          Our Services
        </h3>
        <span>/</span>
        <h3
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </h3>
      </div>
      <h3>Copyright ©2023 Lawzon India . All rights reserved.</h3>
    </div>
  );
}
