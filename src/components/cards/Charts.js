import React, { useState, useEffect } from "react";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Charts = () => {
  let [data, setData] = useState();
  let api = "https://dummyjson.com/products";
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data.products);
      console.log(data);
    })();
  }, []);
  let price = data?.map((products) => {
    return products.price;
  });
  let stock = data?.map((products) => {
    return products.stock;
  });
  let Item = data?.map((products) => {
    return products.title;
  });
  // console.log(price);
  // var Highcharts = require("highcharts");
  const chart = {
    chart: {
      type: "column",
      // scrollablePlotArea: {
      //   minWidth: 700,
      //   scrollPositionX: 1,
      // },
    },
    // Custom option for templates

    title: {
      text: "Product prices vs stock",
      align: "left",
    },
    subtitle: {
      text:
        "Comparing the various product prices with its availibility " + "" + "",
      align: "left",
    },
    plotOptions: {
      series: {
        grouping: false,
        borderWidth: 0,
      },
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      headerFormat:
        '<span style="font-size: 15px">' +
        // `${Item.map((item) => {
        //   return Item.title;
        // })}` +
        "</span><br/>",
      pointFormat:
        '<span style="color:{point.color}">\u25CF</span> ' +
        "{series.name}: <b>{point.y} rupees</b><br/>",
    },
    xAxis: {
      type: "category",
      accessibility: {
        description: "Countries",
        labels: {
          overflow: "justify",
        },
      },
      // min: 0,
      // max: 5,
      // scrollbar: {
      //   enabled: true,
      // },
      // tickLength: 0,

      max: 5,
      labels: {
        useHTML: true,
        animate: true,
        // format: `${Item}`,
        style: {
          textAlign: "center",
        },
      },
      categories: Item,
    },

    yAxis: [
      {
        title: {
          text: "number Range",
        },
        showFirstLabel: false,
      },
    ],
    series: [
      {
        color: "red",
        pointPlacement: -0.2,
        linkedTo: "main",
        data: stock,
        name: "stock",
      },

      {
        data: price,
        name: "price",
        id: "main",
      },
    ],
    exporting: {
      allowHTML: true,
    },
  };
  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={chart} />
    </div>
  );
};

export default Charts;
