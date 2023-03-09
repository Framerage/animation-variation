import React, { useState } from "react";
import classes from "@/styles/Catalog.module.css";
import cn from "classnames";
import { CATALOG_COMPONENTS } from "@/constants/componentsBase";
const Catalog = () => {
  const [choosedItem, setChoosedItem] = useState(0);
  const onChooseItem = (index: number) => setChoosedItem(index);

  return (
    <div className={classes.catalogContainer}>
      <div className={classes.catalogMenu}>
        <h2 className={classes.catalogHeader}>Find your favorite animation</h2>
        <div className={classes.menuContainer}>
          {CATALOG_COMPONENTS.map((item, index) => (
            <div
              key={item.name + ":" + index}
              className={cn(classes.menuItem, {
                [classes.choosedItem]: choosedItem === index,
              })}
              onClick={() => onChooseItem(index)}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={classes.previewWindow}>
          {CATALOG_COMPONENTS[choosedItem].component || "Soon add..."}
        </div>
      </div>
    </div>
  );
};
export default Catalog;
