import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Table } from "antd";

const Table2 = () => {
  let [data, setData] = useState();
  const { Column } = Table;
  let [fig, setFig] = useState(0);
  let api = "https://dummyjson.com/products";

  const changeImg = (images, fig) => {
    images?.length >= fig ? setFig(fig + 1) : setFig(0);
    // console.log(images, "fig", fig);
  };

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
            tableLayout={"auto"}
            rowKey={data?.id}
          >
            <Column title="Product Name" dataIndex="brand" key="brand" />
            <Column title="title" dataIndex="title" key="title" />

            <Column
              title="description"
              dataIndex="description"
              key="description"
            />
            <Column title="price" dataIndex="price" key="price" width="80px" />
            <Column
              width="100px"
              title="discount"
              dataIndex="discountPercentage"
              key="discountPercentage"
            />
            <Column title="stock" dataIndex="stock" key="stock" width="80px" />
            <Column
              title="images"
              dataIndex={"images"}
              key="images"
              width="100px"
              render={(image) => (
                <>
                  {" "}
                  <img
                    onClick={() => {
                      changeImg(image, fig);
                    }}
                    height="80px"
                    width="80px"
                    src={image[fig]}
                    alt={"no pics"}
                  />
                </>
              )}
            />
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Table2;
