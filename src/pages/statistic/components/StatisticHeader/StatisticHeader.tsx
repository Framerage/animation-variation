import React from "react";
import cn from "classnames";

import classes from "@/styles/statistic/Statistic.module.css";

interface StisticHeaderProps {
  menuItems: { name: string; key: string }[];
  onChooseGraphic: (key: string) => void;
  choosedGraphicKey: string;
}
const StatisticHeader: React.FC<StisticHeaderProps> = ({
  menuItems,
  onChooseGraphic,
  choosedGraphicKey,
}) => {
  return (
    <>
      <h1 className={classes.statisticHeader}>Components statistic</h1>
      <div className={classes.statisticMenu}>
        {menuItems.map((item) => (
          <li
            key={item.key}
            onClick={() => onChooseGraphic(item.key)}
            className={cn(classes.menuItem, {
              [classes.activeItem]: choosedGraphicKey === item.key,
            })}
          >
            {item.name}
          </li>
        ))}
      </div>
    </>
  );
};
export default StatisticHeader;
