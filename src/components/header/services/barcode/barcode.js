import "./barcode.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Barcode({
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

  function handleSubmit() {
    setUserDetails({
      name: name,
      phoneNumber: mob,
      email: email,
      service: "Barcode",

      date: `${new Date().getDate()} / ${
        new Date().getMonth() + 1
      } / ${new Date().getFullYear()}`,
      time: `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`,
    });
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  }

  useEffect(() => {
    createData();
  }, [userDetails]);

  return (
    <div className="barcodeB">
      <div className="trademarksTFirstChild">
        <div className="trademarksTFirstChild_1st">
          <div className="trademarksTFirstChild_1st_1st">
            <div className="div">
              <img src={require("../trademarks/trademarks.png")} alt="photo" />
            </div>
          </div>
          <div
            className="trademarksTFirstChild_1st_2nd"
            style={{
              color: "rgb(49, 66, 89)",
              lineHeight: "32px",
              margin: "20px 0px",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            <h2>Barcode</h2>
            <div className="trademarksTFirstChild_1st_2nd_1st">
              <div className="ratings">4.9</div>
              <div className="ratings1">100 Customers</div>
            </div>
            <div
              style={{
                borderBottom: "1px solid rgb(0 0 0/40%)",
                marginLeft: "0.5vw",
                marginRight: "0.5vw",
              }}
            >
              <p
                style={{
                  color: "rgb(49, 66, 89)",
                  lineHeight: "32px",
                  margin: "20px 0px",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                A barcode or bar code is a method of representing data in a
                visual, machine-readable form.
              </p>
            </div>
            <div className="trademarksTFirstChild_1st_2nd_2nd">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.9PJv2rh57BUBBYgH6UXMwQHaFQ&pid=Api&P=0&h=180"
                alt="photo"
              />
            </div>
          </div>
        </div>
        <div className="trademarksTFirstChild_2nd">
          <div className="trademarksTFirstChild_2nd_1st">
            <h3
              style={{
                color: "rgb(49, 66, 89)",
                lineHeight: "32px",
                margin: "20px 0px",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              Contact Us for more details
            </h3>
          </div>
          <div className="trademarksTFirstChild_2nd_2nd">
            <input
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              placeholder="Mobile No."
              onChange={(e) => {
                setMob(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div
              className="trademarksTFirstChild_2nd_2nd_button"
              onClick={handleSubmit}
              style={{
                backgroundColor: isClicked ? true : false,
                transform: isClicked ? "scale(0.9)" : false,
              }}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "10vh" }}>
        <h1>What is Barcode ?</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          A barcode or bar code is a method of representing data in a visual,
          machine-readable form. Initially, barcodes represented data by varying
          the widths, spacings and sizes of parallel lines. These barcodes, now
          commonly referred to as linear or one-dimensional (1D), can be scanned
          by special optical scanners, called barcode readers, of which there
          are several types. Later, two-dimensional (2D) variants were
          developed, using rectangles, dots, hexagons and other patterns, called
          matrix codes or 2D barcodes, although they do not use bars as such. 2D
          barcodes can be read using purpose-built 2D optical scanners, which
          exist in a few different forms. 2D barcodes can also be read by a
          digital camera connected to a microcomputer running software that
          takes a photographic image of the barcode and analyzes the image to
          deconstruct and decode the 2D barcode. A mobile device with a built-in
          camera, such as smartphone, can function as the latter type of 2D
          barcode reader using specialized application software (The same sort
          of mobile device could also read 1D barcodes, depending on the
          application software).
        </p>
        <h1>Uses of Barcode</h1>
        <p
          style={{
            color: "rgb(49, 66, 89)",
            lineHeight: "32px",
            margin: "20px 0px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Barcodes are widely used around the world in many contexts. In stores,
          UPC barcodes are pre-printed on most items other than fresh produce
          from a grocery store. This speeds up processing at check-outs and
          helps track items and also reduces instances of shoplifting involving
          price tag swapping, although shoplifters can now print their own
          barcodes.[22] Barcodes that encode a book's ISBN are also widely
          pre-printed on books, journals and other printed materials. In
          addition, retail chain membership cards use barcodes to identify
          customers, allowing for customized marketing and greater understanding
          of individual consumer shopping patterns. At the point of sale,
          shoppers can get product discounts or special marketing offers through
          the address or e-mail address provided at registration.
        </p>
      </div>
    </div>
  );
}
