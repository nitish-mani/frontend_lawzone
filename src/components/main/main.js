import Contact from "../header/contact/contact";
import Services from "../header/services/services";
import Card from "./card/card";
import "./main.css";

export default function Main({ isHovered1, services }) {
  return (
    <div>
      <section className="section1">
        {isHovered1 ? <Services services={services} /> : false}

        <div className="div1">
          <h3
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "2rem",
              margin: "20px 0px",
              fontSize: "1rem",
              fontWeight: "700",
            }}
          >
            PERFECT SOLUTION FOR YOUR COMPANY
          </h3>
          <h1
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "3.1rem",
              margin: "20px 0px",
              fontSize: "2.5rem",
              fontWeight: "700",
            }}
          >
            Registration & Certification
            <span style={{ color: "#FD8D14", marginLeft: "1vw" }}>
              Services
            </span>
          </h1>
          <p
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "2rem",
              margin: "20px 0px",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            TRADE MARKS, COPYRIGHTS, BARCODE, ISO, IEC (IMPORT & EXPORT CODE),
            COMPANY PVT. LTD. / LIMITED, LLP REGISTRATION, PROPRIETORSHIP,
            PARTNERSHIP FIRM, FSSAI (REGISTRATION & LICENSE) , NGO (SOCIETY,
            TRUST & SECTION 8 CO.), CSR, FCRA, 12A & 80 G, NITI AAYOG, ISBN,
            MSME, PF & ESIC, COMPLIANCE WORK
          </p>
        </div>
        <div className="div2">
          {/* <div>
            <img src="" alt="photo" />
          </div> */}
        </div>
      </section>
      <section className="section2">
        <div className="sec2_div1">
          <img
            src="https://lawzonindia.com/wp-content/themes/econsulting-agency/images/computer-working-person-group-people-meeting-559565-pxhere.com.jpg"
            alt="photo"
          />
        </div>
        <div className="sec2_div2">
          <h1
            style={{
              color: "rgb(30, 30, 30)",
              lineHeight: "3.1rem",

              fontSize: "2.5rem",
              fontWeight: "900",
            }}
          >
            सभी सर्विसेज, जगह सिर्फ
            <span style={{ color: "#FD8D14", marginLeft: "1vw" }}>'1'</span>
          </h1>
          <p
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "2rem",

              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            जी हाँ!
          </p>
          <p
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "2rem",

              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            Lawzon India आपकी तमाम सर्टिफिकेशन एवं रजिस्ट्रेशन की ज़रूरतों को
            पूरा करता है. एक जगह पर, बिना किसी कठिनाई के. वह चाहे आपकी कंपनी का
            रजिस्ट्रेशन हो, चाहे आपकी कंपनी के स्टैण्डर्ड का सर्टिफिकेशन ही
            क्यों न हो!
          </p>
          <p
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "2rem",

              fontSize: "1.1rem",
              fontWeight: "600",
            }}
          >
            अब किसी भी प्रकार की सरकारी फॉर्मेलिटी से घबराएं नहीं. किसी भी उलझन
            के लिए Lawzon India से संपर्क करें.
          </p>
        </div>
      </section>
      <h1
        style={{
          color: "rgb(49, 66, 89)",
          marginTop: "15vh",
          textAlign: "center",
          lineHeight: "3.1rem",
          // margin: "20px 0px",
          fontSize: "2.5rem",
          fontWeight: "900",
        }}
      >
        Works <span style={{ color: "#FD8D14" }}>&</span> Services
      </h1>
      <Card />
    </div>
  );
}
