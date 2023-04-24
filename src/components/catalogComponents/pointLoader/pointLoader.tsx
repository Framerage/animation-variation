import React from "react";
import cn from "classnames";

import classes from "@/styles/catalogComponents/PointLoader.module.css";
const PointLoader = () => {
  return (
    <div className={classes.plContainer}>
      <div className={classes.plBlock}>
        <div className={classes.loaderLine}></div>
        <div className={cn(classes.loaderLine, classes.reverseLine)}></div>
      </div>
    </div>
  );
};
export default PointLoader;
