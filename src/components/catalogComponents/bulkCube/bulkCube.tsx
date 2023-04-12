import React from "react";
import classes from "@/styles/catalogComponents/BulkCube.module.css";

const BulkCube = () => {
  const figureWalls = [
    { id: 0, name: "left", color: "red" },
    { id: 1, name: "top", color: "blue" },
    { id: 2, name: "bottom", color: "green" },
    { id: 3, name: "right", color: "orange" },
  ];
  const wallStyle = (elem: number) => {
    return {
      transform: `rotateY(calc(90deg * ${figureWalls[elem].id} )) translateZ(150px)`,
      backgroundColor: figureWalls[elem].color,
    };
  };
  return (
    <div className={classes.cubeContainer}>
      <div className={classes.cubeShadow}></div>
      <div className={classes.cube}>
        {figureWalls.map((wall, index) => (
          <span
            key={wall.name}
            className={classes.cubeWall}
            style={wallStyle(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default BulkCube;
