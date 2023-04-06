import React from "react";
import cn from "classnames";
import classes from "@/styles/catalogComponents/Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.componentContainer}>
      <div className={cn(classes.loaderContainer)}>
        <div className={cn(classes.loaderRing, classes.leftRing)}></div>
        <div className={cn(classes.loaderRing, classes.rightRing)}></div>
        <div className={cn(classes.loaderRing, classes.topRing)}></div>
      </div>
      <span className={classes.loadingText}>Loading . . .</span>
    </div>
  );
};
export default Loader;
