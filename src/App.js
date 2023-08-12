// import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/header/header";
// import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/header/contact/contact";
import Trademarks from "./components/header/services/trademarks/trademarks";
// import Footer from "./components/footer/footer";
import Root from "./components/root/root";
import Copyright from "./components/header/services/copyright/copyright";
import Barcode from "./components/header/services/barcode/barcode";
import IEC from "./components/header/services/impexp/iec";
import ISO from "./components/header/services/iso/iso";
import Proprietorship from "./components/header/services/proprietorship/proprietorship";
import LLP from "./components/header/services/llp/llp";
import Pvtltd from "./components/header/services/pvtltd/pvtltd";
import CSR from "./components/header/services/csr/csr";
import MSME from "./components/header/services/msme/msme";
import Partnership from "./components/header/services/partnership/partnership";
import FSSAI from "./components/header/services/fssai/fssai";
import FCRA from "./components/header/services/fcra/fcra";
import F12A_80G from "./components/header/services/12A&80G/12A&80G";
import NITIAayog from "./components/header/services/nitiayog/nitiayog";
import NGO from "./components/header/services/ngo/ngo";
import ISBN from "./components/header/services/isbn/isbn";
import PF_ESIC from "./components/header/services/pf&esic/pf&esic";
import Compliance from "./components/header/services/compliance/compliance";
// import axios from "axios";
import Admin from "./components/admin/admin";
import Pass from "./components/admin/pass";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  function home(startup_data) {
    setIsHovered(startup_data);
  }

  const [isHovered1, setIsHovered1] = useState(false);
  function services(trademark_data) {
    setIsHovered1(trademark_data);
  }

  const [isHovered2, setIsHovered2] = useState(false);
  function contact(gst_data) {
    setIsHovered2(gst_data);
  }

  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root
          home={home}
          contact={contact}
          services={services}
          isHovered={isHovered}
          isHovered1={isHovered1}
          isHovered2={isHovered2}
        ></Root>
      ),
      children: [
        {
          path: "/",
          element: <Main isHovered1={isHovered1} services={services}></Main>,
        },
        {
          path: "/contact",
          element: (
            <Contact
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/trademarks",
          element: (
            <Trademarks
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/copyright",
          element: (
            <Copyright
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/barcode",
          element: (
            <Barcode
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/iec",
          element: (
            <IEC
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            ></IEC>
          ),
        },
        {
          path: "/iso",
          element: (
            <ISO
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/proprietorship",
          element: (
            <Proprietorship
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/llp",
          element: (
            <LLP
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/pvtltd",
          element: (
            <Pvtltd
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/csr",
          element: (
            <CSR
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/msme",
          element: (
            <MSME
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/partnership",
          element: (
            <Partnership
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/fssai",
          element: (
            <FSSAI
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/fcra",
          element: (
            <FCRA
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/12A&80G",
          element: (
            <F12A_80G
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/niti",
          element: (
            <NITIAayog
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/ngo",
          element: (
            <NGO
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/isbn",
          element: (
            <ISBN
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/pfesic",
          element: (
            <PF_ESIC
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/compliance",
          element: (
            <Compliance
              name={name}
              setName={setName}
              mob={mob}
              setMob={setMob}
              email={email}
              setEmail={setEmail}
            />
          ),
        },
        {
          path: "/admin",
          element:
            password === "lawzone12345" ? (
              <Admin />
            ) : (
              <Pass setPassword={setPassword} />
            ),
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}></RouterProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
