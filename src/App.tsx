import React, { useEffect, useState } from "react";
import Routings from "@pages/index";
// ANT DESIGN
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Footer } from "@components/Footer/Footer.tsx";

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1100);
  // }, []);

  // if (isLoading) {
  //   const antIcon = (
  //     <LoadingOutlined style={{ fontSize: 60, color: "#525252" }} spin />
  //   );
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         marginTop: "300px",
  //       }}
  //       className="loading-container"
  //     >
  //       <Spin indicator={antIcon} />
  //       <p style={{ fontSize: "20px", color: "#525252" }}>
  //         Welcome back, thanks for visiting!
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <>
      <Routings />
      {/* <Footer /> */}

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
