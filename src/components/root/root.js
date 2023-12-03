import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router";
import "./root.css";

import PhoneIphoneSharpIcon from "@mui/icons-material/PhoneIphoneSharp";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Root({
  isHovered,
  isHovered1,
  isHovered2,
  home,
  services,
  contact,
}) {
  return (
    <div className="rootR">
   
      <div style={{ margin: "10px", textAlign: "center" }}>
        <marquee direction="left">
          Your Free Tier has been ended on 3rd of December 2023. Please pay your
          bill.
        </marquee>
      </div>
      <h1 style={{textAlign:'center', fontSize:'100px' }}> Page Not Available. Please Pay Your Bill.... </h1>
            
{/* <div className="rootRFirstChild">
        <div className="rootR_1st">
          <div
            style={{
              borderRight: "2px solid white",
              paddingRight: "1vw",
              marginRight: "1vw",
            }}
          >
            <span>
              <PhoneIphoneSharpIcon />
            </span>
            9350833018, 9999088138
          </div>
          <div
            style={{
              borderRight: "2px solid white",
              paddingRight: "1vw",
              marginRight: "1vw",
            }}
          >
            <span style={{ marginRight: "0.5vw" }}>
              <MailOutlineSharpIcon />
            </span>
            lawzonindia@gmail.com
          </div>
          <div>
            <span>
              <LocationOnOutlinedIcon />
            </span>
            New Delhi
          </div>
        </div>
        <div className="rootR_2nd">
          <a
            href="https://www.facebook.com/profile.php?id=100072873714809"
            target="_blank"
          >
            <FacebookIcon />
          </a>

          <a href="https://www.instagram.com/lawzonindia/" target="_blank">
            <InstagramIcon />
          </a>

          <a
            href="https://www.youtube.com/channel/UC6PbI5o7f--w5U_CtoyLMaQ"
            target="_blank"
          >
            <YouTubeIcon />
          </a>

          <a href="https://twitter.com/LawzonI" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>

      <Header
        home={home}
        contact={contact}
        services={services}
        isHovered={isHovered}
        isHovered1={isHovered1}
        isHovered2={isHovered2}
      ></Header>
      <div className="outlet">
        <Outlet></Outlet>
      </div>
      <div className="whatsapp">
        <ReactWhatsapp
          number="9350833018"
          message="जी हाँ! मैं Lawzon India द्वारा दी जाने वाली सर्विसेज में इंटरेस्टेड हूँ. मेरा नाम है ... ...... ........... ..."
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#16FF00",
            border: "none",
            cursor: "pointer",
          }}
          className="whatsapp_1st"
        >
          <WhatsAppIcon
            sx={{
              color: "white",
              width: "100%",
              height: "100%",
            }}
          />
        </ReactWhatsapp>
      </div>
      <Footer />*/}
    </div>
  );
}
