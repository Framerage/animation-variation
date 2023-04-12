import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import classes from "@/styles/catalogComponents/Heart.module.css";

const Heart = () => {
  return (
    <div className={classes.heartContainer}>
      <div className={cn(classes.heart, classes.leftPart)}>
        <div className={classes.smallHeart}></div>
      </div>
      {/* <div className={cn(classes.heart, classes.rightPart)}></div> */}
    </div>
  );
};
export default Heart;
