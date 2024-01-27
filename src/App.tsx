import React, { useEffect, useState } from "react";
import Routings from "@pages/index";
// ANT DESIGN
import { Modal } from "antd"; // Import Modal from Ant Design
import { Footer } from "@components/Footer/Footer.tsx";

function App() {

  return (
    <>
      <Routings />
      <Footer />

      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
      </div>
    </>
  );
}

export default App;
