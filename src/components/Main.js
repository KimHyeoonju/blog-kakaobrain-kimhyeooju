import React from "react";
import MainTop from "./MainTop";
import MainBottom from "./MainBottom";
import "../css/main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="inner">
        <MainTop />
        <MainBottom />
      </div>
    </main>
  );
};

export default Main;
