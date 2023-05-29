import React from "react";
import classes from "@/styles/System.module.css";
const Systems = () => {
  return (
    <div className={classes.systemsContainer}>
      <h1>Количество времени, которое затрачивает каждая задача</h1>
      <div>
        <span className={classes.timeItem}>some text</span>
      </div>
    </div>
  );
};
export default Systems;
