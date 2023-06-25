import image from "../../assets/data-openoffice-logo-rectangle-xls.jpg";
// import image from "../../assets"
import { Card } from "antd";
import React from "react";
// import Table from "./Table";
import { useNavigate } from "react-router-dom";
const Tiles = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "block",
        width: "45%",
        padding: 10,
        marginLeft: "25%",
      }}
    >
      <h4 style={{ marginRight: "50%" }}>Table data</h4>
      <>
        <Card
          hoverable
          bordered={false}
          title="Table"
          onClick={() => {
            navigate("/Table");
          }}
          style={{
            width: "50%",
          }}
        >
          <p>click to generate table</p>
          <img src={image} alt="" style={{ width: "100%" }} />
        </Card>
      </>
    </div>
  );
};
export default Tiles;
