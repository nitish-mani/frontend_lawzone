import { useState } from "react";
import "./services.css";
import { useNavigate } from "react-router";

export default function Services({ services }) {
  function handleMouseEnterSer() {
    services("black");
  }
  function handleMouseLeaveSer() {
    services(false);
  }

  const [isHoveredT, setIsHoveredT] = useState(false);
  function handleMouseEnterSerT() {
    setIsHoveredT("black");
  }
  function handleMouseLeaveSerT() {
    setIsHoveredT(false);
  }

  const [isHoveredC, setIsHoveredC] = useState(false);
  function handleMouseEnterSerC() {
    setIsHoveredC("black");
  }
  function handleMouseLeaveSerC() {
    setIsHoveredC(false);
  }

  const [isHoveredB, setIsHoveredB] = useState(false);
  function handleMouseEnterSerB() {
    setIsHoveredB("black");
  }
  function handleMouseLeaveSerB() {
    setIsHoveredB(false);
  }
  const [isHoveredIEC, setIsHoveredIEC] = useState(false);
  function handleMouseEnterSerIEC() {
    setIsHoveredIEC("black");
  }
  function handleMouseLeaveSerIEC() {
    setIsHoveredIEC(false);
  }

  const [isHoveredISO, setIsHoveredISO] = useState(false);
  function handleMouseEnterSerISO() {
    setIsHoveredISO("black");
  }
  function handleMouseLeaveSerISO() {
    setIsHoveredISO(false);
  }
  const [isHoveredPR, setIsHoveredPR] = useState(false);
  function handleMouseEnterSerPR() {
    setIsHoveredPR("black");
  }
  function handleMouseLeaveSerPR() {
    setIsHoveredPR(false);
  }
  const [isHoveredLLP, setIsHoveredLLP] = useState(false);
  function handleMouseEnterSerLLP() {
    setIsHoveredLLP("black");
  }
  function handleMouseLeaveSerLLP() {
    setIsHoveredLLP(false);
  }
  const [isHoveredPvt, setIsHoveredPvt] = useState(false);
  function handleMouseEnterSerPvt() {
    setIsHoveredPvt("black");
  }
  function handleMouseLeaveSerPvt() {
    setIsHoveredPvt(false);
  }
  const [isHoveredCSR, setIsHoveredCSR] = useState(false);
  function handleMouseEnterSerCSR() {
    setIsHoveredCSR("black");
  }
  function handleMouseLeaveSerCSR() {
    setIsHoveredCSR(false);
  }

  const [isHoveredMSME, setIsHoveredMSME] = useState(false);
  function handleMouseEnterSerMSME() {
    setIsHoveredMSME("black");
  }
  function handleMouseLeaveSerMSME() {
    setIsHoveredMSME(false);
  }
  const [isHoveredPa, setIsHoveredPa] = useState(false);
  function handleMouseEnterSerPa() {
    setIsHoveredPa("black");
  }
  function handleMouseLeaveSerPa() {
    setIsHoveredPa(false);
  }
  const [isHoveredFSSAI, setIsHoveredFSSAI] = useState(false);
  function handleMouseEnterSerFSSAI() {
    setIsHoveredFSSAI("black");
  }
  function handleMouseLeaveSerFSSAI() {
    setIsHoveredFSSAI(false);
  }

  const [isHoveredFCRA, setIsHoveredFCRA] = useState(false);
  function handleMouseEnterSerFCRA() {
    setIsHoveredFCRA("black");
  }
  function handleMouseLeaveSerFCRA() {
    setIsHoveredFCRA(false);
  }
  const [isHovered12A, setIsHovered12A] = useState(false);
  function handleMouseEnterSer12A() {
    setIsHovered12A("black");
  }
  function handleMouseLeaveSer12A() {
    setIsHovered12A(false);
  }
  const [isHoveredNITI, setIsHoveredNITI] = useState(false);
  function handleMouseEnterSerNITI() {
    setIsHoveredNITI("black");
  }
  function handleMouseLeaveSerNITI() {
    setIsHoveredNITI(false);
  }
  const [isHoveredNGO, setIsHoveredNGO] = useState(false);
  function handleMouseEnterSerNGO() {
    setIsHoveredNGO("black");
  }
  function handleMouseLeaveSerNGO() {
    setIsHoveredNGO(false);
  }

  const [isHoveredISBN, setIsHoveredISBN] = useState(false);
  function handleMouseEnterSerISBN() {
    setIsHoveredISBN("black");
  }
  function handleMouseLeaveSerISBN() {
    setIsHoveredISBN(false);
  }
  const [isHoveredPF, setIsHoveredPF] = useState(false);
  function handleMouseEnterSerPF() {
    setIsHoveredPF("black");
  }
  function handleMouseLeaveSerPF() {
    setIsHoveredPF(false);
  }
  const [isHoveredCom, setIsHoveredCom] = useState(false);
  function handleMouseEnterSerCom() {
    setIsHoveredCom("black");
  }
  function handleMouseLeaveSerCom() {
    setIsHoveredCom(false);
  }

  const navigate = useNavigate();

  return (
    <div
      className="servicesS"
      onMouseEnter={handleMouseEnterSer}
      onMouseLeave={handleMouseLeaveSer}
    >
      <div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerT}
          onMouseLeave={handleMouseLeaveSerT}
          style={{ color: isHoveredT ? "#068fff" : true, cursor: "pointer" }}
          onClick={() => {
            navigate("/trademarks");
          }}
        >
          Trademarks
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerC}
          onMouseLeave={handleMouseLeaveSerC}
          style={{ color: isHoveredC ? "#068fff" :true , cursor: "pointer" }}
          onClick={() => {
            navigate("/copyright");
          }}
        >
          Copyright
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerB}
          onMouseLeave={handleMouseLeaveSerB}
          style={{ color: isHoveredB ? "#068fff" : true, cursor: "pointer" }}
          onClick={() => {
            navigate("/barcode");
          }}
        >
          Barcode
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerIEC}
          onMouseLeave={handleMouseLeaveSerIEC}
          style={{
            color: isHoveredIEC ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/iec");
          }}
        >
          IEC (Import-Export Code)
        </div>
      </div>

      <div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerISO}
          onMouseLeave={handleMouseLeaveSerISO}
          style={{
            color: isHoveredISO ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/iso");
          }}
        >
          ISO
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerPR}
          onMouseLeave={handleMouseLeaveSerPR}
          style={{
            color: isHoveredPR ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/proprietorship");
          }}
        >
          Proprietorship
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerLLP}
          onMouseLeave={handleMouseLeaveSerLLP}
          style={{
            color: isHoveredLLP ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/llp");
          }}
        >
          LLP Registration
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerPvt}
          onMouseLeave={handleMouseLeaveSerPvt}
          style={{
            color: isHoveredPvt ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/pvtltd");
          }}
        >
          Company Pvt. Ltd./Limited
        </div>
      </div>

      <div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerCSR}
          onMouseLeave={handleMouseLeaveSerCSR}
          style={{
            color: isHoveredCSR ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/csr");
          }}
        >
          CSR
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerMSME}
          onMouseLeave={handleMouseLeaveSerMSME}
          style={{
            color: isHoveredMSME ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/msme");
          }}
        >
          MSME
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerPa}
          onMouseLeave={handleMouseLeaveSerPa}
          style={{
            color: isHoveredPa ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/partnership");
          }}
        >
          Partnership Firm
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerFSSAI}
          onMouseLeave={handleMouseLeaveSerFSSAI}
          style={{
            color: isHoveredFSSAI ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/fssai");
          }}
        >
          FSSAI (Registration & Licence)
        </div>
      </div>

      <div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerFCRA}
          onMouseLeave={handleMouseLeaveSerFCRA}
          style={{
            color: isHoveredFCRA ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/fcra");
          }}
        >
          FCRA
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSer12A}
          onMouseLeave={handleMouseLeaveSer12A}
          style={{
            color: isHovered12A ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/12A&80G");
          }}
        >
          12A & 80G
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerNITI}
          onMouseLeave={handleMouseLeaveSerNITI}
          style={{
            color: isHoveredNITI ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/niti");
          }}
        >
          NITI Aayog
        </div>

        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerNGO}
          onMouseLeave={handleMouseLeaveSerNGO}
          style={{
            color: isHoveredNGO ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/ngo");
          }}
        >
          NGO (Society, Trust & section 8 Co.)
        </div>
      </div>

      <div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerISBN}
          onMouseLeave={handleMouseLeaveSerISBN}
          style={{
            color: isHoveredISBN ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/isbn");
          }}
        >
          ISBN
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerPF}
          onMouseLeave={handleMouseLeaveSerPF}
          style={{
            color: isHoveredPF ? "#068fff" :true ,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/pfesic");
          }}
        >
          PF & ESIC
        </div>
        <div
          className="gap"
          onMouseEnter={handleMouseEnterSerCom}
          onMouseLeave={handleMouseLeaveSerCom}
          style={{
            color: isHoveredCom ? "#068fff" : true,
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/compliance");
          }}
        >
          Compliance Work
        </div>
      </div>
    </div>
  );
}
