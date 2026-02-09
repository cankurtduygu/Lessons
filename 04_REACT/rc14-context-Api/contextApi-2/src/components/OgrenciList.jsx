import React from "react";
import OgrenciItem from "./OgrenciItem";

const OgrenciList = () => {
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2024/10/13/14/30/boy-9117346_1280.jpg"
        alt=""
        width="100%"
        height="500px"
      />
      <h2 style={{ textAlign: "center", background: "pink" }}>
        ÖĞRENCİ LİSTESİ
      </h2>

      <OgrenciItem />
    </div>
  );
};

export default OgrenciList;
