import React from "react";
import classes from "@/styles/BulkCube.module.css";

const BulkCube = () => {
  const figureWalls = [
    { id: 0, name: "left", color: "red" },
    { id: 1, name: "top", color: "blue" },
    { id: 2, name: "bottom", color: "green" },
    { id: 3, name: "right", color: "orange" },
  ];
  return (
    <div className={classes.cubeContainer}>
      <div className={classes.cubeShadow}></div>
      <div className={classes.cube}>
        {figureWalls.map((wall) => (
          <span
            key={wall.name}
            className={classes.cubeWall}
            style={{
              ["--elem"]: `${wall.id}`,
              backgroundColor: wall.color,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default BulkCube;
