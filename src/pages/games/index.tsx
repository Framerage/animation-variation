import React, { useCallback, useMemo, useState } from "react";
import classes from "@/styles/Games.module.css";
import BackBtn from "@/components/appComponents/backBtn";
const Games = () => {
  const [wallCounter, setWallCounter] = useState(4);
  const [wallWidth, setWallWidth] = useState(200);
  const [wallHeight, setWallHeight] = useState(200);
  const [wallIndent, setWallIndent] = useState(100); //width/2
  const [wallBorderRadius, setWallBorderRadius] = useState(0);
  const [wallIncline, setWallIncline] = useState(0);

  const [firstColor, setFirstColor] = useState("blue");
  const [secondColor, setSecondColor] = useState("orange");

  const [borderColor, setBorderColor] = useState("black");
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
        name: "Indent",
        min: 0,
        max: 500,
        value: wallIndent,
        setValue: setWallIndent,
      },
      {
        name: "Border radius",
        min: 0,
        max: 500,
        value: wallBorderRadius,
        setValue: setWallBorderRadius,
      },
      {
        name: "Incline",
        min: -180,
        max: 180,
        value: wallIncline,
        setValue: setWallIncline,
      },
    ];
  }, [
    wallHeight,
    wallCounter,
    wallWidth,
    wallIndent,
    wallBorderRadius,
    wallIncline,
  ]);

  const figureWalls = useMemo(() => {
    if (wallCounter < 0) {
      return [];
    }
    return Array(wallCounter).fill({ id: 0 });
  }, [wallCounter]);

  const wallStyle = useCallback(
    (elem: number) => {
      return {
        transform: `rotateY(calc(360deg / ${figureWalls.length}*${elem} )) rotateX(${wallIncline}deg) translateZ(${wallIndent}px)`,
        background: secondColor
          ? `linear-gradient(60deg, ${firstColor}, ${secondColor})`
          : `${firstColor}`,
        borderRadius: `${wallBorderRadius}px`,
        border: borderColor ? `1px solid ${borderColor}` : "none",
      };
    },
    [
      wallIndent,
      figureWalls,
      wallBorderRadius,
      wallIncline,
      firstColor,
      secondColor,
      borderColor,
    ]
  );
  const wallParams = useCallback(() => {
    return {
      width: `${wallWidth}px`,
      height: `${wallHeight}px`,
    };
  }, [wallWidth, wallHeight]);

  return (
    <div className={classes.gamesContainer}>
      <div className={classes.gamesHeader}>
        <BackBtn />
        <h1 className={classes.pageTitle}>Create your figure</h1>
        <div>{"_"}</div>
      </div>
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
          <div className={classes.controlItem}>
            <span
              className={classes.previewColor}
              style={{ backgroundColor: `${firstColor}` }}
            ></span>
            <input
              type="text"
              value={firstColor}
              onChange={(e) => setFirstColor(e.target.value)}
              className={classes.controlField}
            />
            <span
              className={classes.previewColor}
              style={{ backgroundColor: `${secondColor}` }}
            ></span>
            <input
              type="text"
              value={secondColor}
              onChange={(e) => setSecondColor(e.target.value)}
              className={classes.controlField}
            />
          </div>
          <div className={classes.controlItem}>
            <span className={classes.controlTitle}>Border color</span>
            <input
              type="text"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              className={classes.controlField}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Games;
