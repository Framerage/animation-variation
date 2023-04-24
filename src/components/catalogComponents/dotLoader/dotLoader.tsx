import React from "react";
import classes from "@/styles/catalogComponents/DotLoader.module.css";
const DotLoader = () => {
  const dots = Array(36).fill({ color: "rgba(0,255,0,0.9)" }, 0);

  const dotStyle = (dotColor: string, index: number) => {
    return {
      transitionDelay: `calc(0.1s*${index}`,
      transform: `rotate(calc(360deg / ${dots.length} * ${index + 1}))`,
      backgroundColor: dotColor,
      boxShadow: `0 0 10px ${dotColor},
      0 0 20px white,
      0 0 30px ${dotColor},
      0 0 40px ${dotColor},
      0 0 50px ${dotColor}`,
    };
  };
  return (
    <div className={classes.dlContainer}>
      {dots.map((el, index) => (
        <div
          key={index}
          className={classes.dlItem}
          style={dotStyle(el.color, index)}
        ></div>
      ))}
    </div>
  );
};
export default DotLoader;
