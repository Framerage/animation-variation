import React, { useEffect, useState } from "react";
import axios from "axios";
import { CatalogComponents } from "@/typing/catalog";
import classes from "@/styles/statistic/Statistic.module.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import StatisticHeader from "./components/StatisticHeader/StatisticHeader";
import { GRAPHIC_COLORS } from "@/constants/utils";

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
        backgroundColor: GRAPHIC_COLORS,
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
          backgroundColor: GRAPHIC_COLORS,
        },
      ],
    });
  }, [choosedGraphic]);
  return (
    <div className={classes.statisticContainer}>
      <StatisticHeader
        menuItems={statisticMenu}
        onChooseGraphic={onChooseGraphic}
        choosedGraphicKey={choosedGraphic}
      />
      <div className={classes.statisticContent}>
        <div className={classes.chartBlock}>
          <Bar data={barChartData} width="20px" height="5px" />
        </div>
      </div>
    </div>
  );
};
export default Statistic;
