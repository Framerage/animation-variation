import React, { useEffect, useState } from "react";
import classes from "@/styles/Catalog.module.css";
import cn from "classnames";
import { CATALOG_COMPONENTS } from "@/constants/componentsBase";
import axios from "axios";
import { CatalogComponents } from "@/typing/catalog";

export async function getServerSideProps() {
  const resp = await axios(
    "https://640adea265d3a01f98095963.mockapi.io/catalog"
  );
  return {
    props: {
      catalog: resp.data,
    },
  };
}
const Catalog = ({ catalog }: { catalog: CatalogComponents[] }) => {
  const [catalogItems, setCatalogItems] = useState(catalog);
  const [choosedItem, setChoosedItem] = useState(0);
  const [pagination, setPagination] = useState(0);
  const onChooseItem = (index: number) => setChoosedItem(index);

  const postNewComponent = async () => {
    const authCheck = window.prompt("Введите пароль");
    if (authCheck === "9573") {
      const componentName = window.prompt("Название компонента");
      const resp = await axios.post(
        "https://640adea265d3a01f98095963.mockapi.io/catalog",
        {
          name: componentName,
        }
      );
      setCatalogItems([...catalogItems, resp.data]);
    } else {
      window.alert("Не угадал");
    }
  };
  return (
    <div className={classes.catalogContainer}>
      <div className={classes.catalogMenu}>
        <h2 className={classes.catalogHeader}>Find your favorite animation</h2>
        <div className={classes.menuContainer}>
          <div
            className={cn(classes.menuArrow, {
              [classes.disabledArrow]: pagination === 0,
            })}
            onClick={() => pagination != 0 && setPagination(pagination - 1)}
          >
            &#60;
          </div>
          <div className={classes.menuItems}>
            {catalogItems
              .slice(pagination * 8, (pagination + 1) * 8)
              .map((item, index) => (
                <div
                  key={item.name + ":" + index}
                  className={cn(classes.menuItem, {
                    [classes.choosedItem]:
                      choosedItem === index + pagination * 8,
                  })}
                  onClick={() => onChooseItem(index + pagination * 8)}
                >
                  {CATALOG_COMPONENTS[index + pagination * 8]?.name ||
                    "Soon add..."}
                </div>
              ))}
            <div className={cn(classes.menuItem)} onClick={postNewComponent}>
              +
            </div>
          </div>
          <div
            className={cn(classes.menuArrow, {
              [classes.disabledArrow]:
                pagination === Math.round(catalogItems.length / 8),
            })}
            onClick={() =>
              pagination !== Math.round(catalogItems.length / 8) &&
              setPagination(pagination + 1)
            }
          >
            &#62;
          </div>
        </div>
        <div className={classes.previewWindow}>
          <div className={classes.previewInfo}>
            <span>Отзывов: {catalogItems[choosedItem].reviews.length}</span>
            <span>
              {CATALOG_COMPONENTS[choosedItem]?.name || "Soon add..."}
            </span>
            <span>Лайков:</span>
            <div className={classes.itemReviews}>
              <input type="text" className={classes.reviewsInput} />
            </div>
          </div>
          <div className={classes.previewItem}>
            {CATALOG_COMPONENTS[choosedItem]?.component || "Soon add..."}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
