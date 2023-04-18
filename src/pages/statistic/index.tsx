import React, { useEffect, useState } from "react";
import axios from "axios";
import { CatalogComponents } from "@/typing/catalog";
import cn from "classnames";
import classes from "@/styles/statistic/Statistic.module.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export async function getServerSideProps() {
  const resp = await axios(
    "https://640adea265d3a01f98095963.mockapi.io/catalog"
  );
  return {
    props: {
      componentsInfo: resp.data,
    },
  };
}
const Statistic = ({
  componentsInfo,
}: {
  componentsInfo: CatalogComponents[];
}) => {
  const statisticMenu = [
    { name: "Отзывы", key: "reviews" },
    { name: "Лайки", key: "likes" },
  ];
  const [choosedGraphic, setChoosedGraphic] = useState("");

  const [barChartData, setBarChartData] = useState({
    labels: componentsInfo.map((item) => {
      return item.name;
    }),
    datasets: [
      {
        data: componentsInfo.map((item) => {
          if (choosedGraphic === "reviews") {
            return String(item.reviews.length);
          }
          return String(item[choosedGraphic as keyof CatalogComponents]);
        }),
        label: choosedGraphic,
        backgroundColor: [
          "red",
          "yellow",
          "green",
          "blue",
          "purple",
          "orange",
          "grey",
          "white",
          "black",
          "yellowgreen",
          "orangered",
          "turquoise",
          "lightblue",
          "darkblue",
          "darkcyan",
          "darkgoldenrod",
          "darkgray",
          "darkgreen",
          "oceanblue",
        ],
      },
    ],
  });

  const onChooseGraphic = (itemKey: string) => setChoosedGraphic(itemKey);
  useEffect(() => {
    if (!choosedGraphic) {
      return;
    }
    setBarChartData({
      ...barChartData,
      datasets: [
        {
          data: componentsInfo.map((item) => {
            if (choosedGraphic === "reviews") {
              return String(item.reviews.length);
            }
            return String(item[choosedGraphic as keyof CatalogComponents]);
          }),
          label: choosedGraphic,
          backgroundColor: [
            "red",
            "yellow",
            "green",
            "blue",
            "purple",
            "orange",
            "grey",
            "white",
            "black",
            "yellowgreen",
            "orangered",
            "turquoise",
            "lightblue",
            "darkblue",
            "darkcyan",
            "darkgoldenrod",
            "darkgray",
            "darkgreen",
            "oceanblue",
          ],
        },
      ],
    });
  }, [choosedGraphic]);
  return (
    <div className={classes.statisticContainer}>
      <h1 className={classes.statisticHeader}>Components statistic</h1>
      <div className={classes.statisticMenu}>
        {statisticMenu.map((item) => (
          <li
            key={item.key}
            onClick={() => onChooseGraphic(item.key)}
            className={cn(classes.menuItem, {
              [classes.activeItem]: choosedGraphic === item.key,
            })}
          >
            {item.name}
          </li>
        ))}
      </div>
      <div className={classes.statisticContent}>
        <Bar data={barChartData} width="20px" height="5px" />
      </div>
    </div>
  );
};
export default Statistic;
