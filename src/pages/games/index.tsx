import React, { useCallback, useMemo, useState } from "react";
import classes from "@/styles/Games.module.css";
const Games = () => {
  const [wallCounter, setWallCounter] = useState(6);
  const [wallWidth, setWallWidth] = useState(200);
  const figureWalls = useMemo(() => {
    if (wallCounter < 0) {
      return [];
    }
    return Array(wallCounter).fill({ id: 0 });
  }, [wallCounter]);

  const wallStyle = useCallback(
    (elem: number) => {
      return {
        transform: `rotateY(calc(360deg / ${figureWalls.length}*${elem} )) translateZ(175px)`,
        background:
          "linear-gradient(60deg, blue, rgb(255, 140, 0), blue, black)",
      };
    },
    [wallCounter]
  );
  const wallParams = useCallback(() => {
    return {
      width: `${wallWidth}px`,
    };
  }, [wallWidth]);
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
          <div className={classes.controlItem}>
            <span className={classes.controlTitle}>Walls:</span>
            <input
              type="number"
              value={wallCounter}
              min={0}
              max={150}
              onChange={(e) => setWallCounter(Number(e.target.value))}
              className={classes.controlField}
            />
          </div>
          <div className={classes.controlItem}>
            <span className={classes.controlTitle}>Width:</span>
            <input
              type="number"
              value={wallWidth}
              min={0}
              max={1100}
              onChange={(e) => setWallWidth(Number(e.target.value))}
              className={classes.controlField}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Games;
