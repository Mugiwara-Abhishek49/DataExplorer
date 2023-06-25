import image from "../../assets/download.png";
// import image from "../../assets"
import { Card } from "antd";
import React from "react";
// import Table from "./Table";
import { useNavigate } from "react-router-dom";

const Tiles2 = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {}}
      style={{
        display: "align-items-center",
        width: "45%",
        padding: 10,
      }}
    >
      <h4 style={{ marginRight: "50%" }}>Chart data</h4>
      <>
        <Card
          hoverable
          bordered={false}
          title="Charts"
          onClick={() => {
            navigate("/Charts");
          }}
          style={{
            width: "50%",
          }}
        >
          <p>click to generate chart</p>
          <img src={image} alt="" style={{ width: "100%" }} />
        </Card>
      </>
    </div>
  );
};
export default Tiles2;
