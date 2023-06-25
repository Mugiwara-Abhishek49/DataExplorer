import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Table } from "antd";

// import "../cards/myDesign";
const Table2 = () => {
  let [data, setData] = useState();
  const { Column } = Table;
  let api = "https://dummyjson.com/products";
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data.products);
      console.log(data);
    })();
  }, []);
  return (
    <div className="container">
      <Card
        title="My Table"
        bordered={false}
        style={{
          width: "90%",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Table
            dataSource={data}
            scroll={{
              y: 340,
            }}
            responsive={["xxl", "xl", "lg", "md", "sm", "xs"]}
          >
            <Column title="Product Name" dataIndex="brand" key="brand" />
            <Column title="title" dataIndex="title" key="title" />

            <Column
              title="description"
              dataIndex="description"
              key="description"
            />
            <Column title="price" dataIndex="price" key="price" />
            <Column
              title="discountPercentage"
              dataIndex="discountPercentage"
              key="discountPercentage"
            />
            <Column title="stock" dataIndex="stock" key="stock" />
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Table2;
