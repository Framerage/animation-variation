import React, { useCallback, useMemo, useState } from "react";
import classes from "@/styles/Games.module.css";
const Games = () => {
  const [wallCounter, setWallCounter] = useState(4);
  const [wallWidth, setWallWidth] = useState(200);
  const [wallHeight, setWallHeight] = useState(200);
  const [wallIndent, setWallIndent] = useState(100); //width/2

  const params = useMemo(() => {
    return [
      {
        name: "Width",
        min: 0,
        max: 1000,
        value: wallWidth,
        setValue: setWallWidth,
      },
      {
        name: "Height",
        min: 0,
        max: 1000,
        value: wallHeight,
        setValue: setWallHeight,
      },
      {
        name: "Walls",
        min: 0,
        max: 150,
        value: wallCounter,
        setValue: setWallCounter,
      },
      {
        name: "Отступ от центра",
        min: 0,
        max: 500,
        value: wallIndent,
        setValue: setWallIndent,
      },
    ];
  }, [wallHeight, wallCounter, wallWidth, wallIndent]);
  const figureWalls = useMemo(() => {
    if (wallCounter < 0) {
      return [];
    }
    return Array(wallCounter).fill({ id: 0 });
  }, [wallCounter]);

  const wallStyle = useCallback(
    (elem: number) => {
      return {
        transform: `rotateY(calc(360deg / ${figureWalls.length}*${elem} )) translateZ(${wallIndent}px)`,
        background:
          "linear-gradient(60deg, blue, rgb(255, 140, 0), blue, black)",
        borderRadius: "10px",
      };
    },
    [wallIndent, figureWalls]
  );
  const wallParams = useCallback(() => {
    return {
      width: `${wallWidth}px`,
      height: `${wallHeight}px`,
    };
  }, [wallWidth, wallHeight]);

  return (
    <div className={classes.gamesContainer}>
      <h1 className={classes.pageTitle}>Create your figure</h1>
      <div className={classes.gamesContent}>
        <div className={classes.previewBlock} style={wallParams()}>
          <div className={classes.itemShadow}></div>
          <div className={classes.item}>
            {figureWalls.map((wall, index) => (
              <span
                key={index}
                className={classes.itemWall}
                style={wallStyle(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className={classes.controlBlock}>
          {params.map((param) => (
            <div className={classes.controlItem}>
              <span className={classes.controlTitle}>{param.name}</span>
              <input
                type="number"
                value={param.value}
                min={param.min}
                max={param.max}
                onChange={(e) => param.setValue(Number(e.target.value))}
                className={classes.controlField}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Games;
