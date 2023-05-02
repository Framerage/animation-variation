import React from "react";
import classes from "@/styles/catalogComponents/DotLoader.module.css";
const DotLoader = () => {
  const dots = Array(18).fill({ color: "rgba(0,255,0,0.9)" }, 0);

  const itemStyle = (index: number) => {
    return {
      transform: `rotate(calc(360deg / ${dots.length} * ${index}))`,
    };
  };
  const dotStyle = (index: number) => {
    return {
      animationDelay: `calc(0.1s * ${index})`,
    };
  };
  return (
    <div className={classes.dlContainer}>
      {dots.map((_, index) => (
        <div key={index} className={classes.dlItem} style={itemStyle(index)}>
          <div className={classes.dot} style={dotStyle(index)}></div>
        </div>
      ))}
    </div>
  );
};
export default DotLoader;
