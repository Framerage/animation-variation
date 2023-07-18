import React, { useEffect, useState } from "react";
import { CATALOG_COMPONENTS } from "@/constants/componentsBase";
import axios from "axios";
import { CatalogComponents } from "@/typing/catalog";
import cn from "classnames";

import classes from "@/styles/Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getCatalogComponents,
  selectCatalogComponents,
  selectNeededCatalogComponent,
} from "@/store/modules/catalogComponents";
import { editFirstSymbolToUpperCase } from "@/utils/helpers";
import Heart from "@/components/catalogComponents/heart/heart";
import BackBtn from "@/components/appComponents/backBtn/backBtn";

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
  const dispatch = useDispatch();

  const catalogItems = useSelector(selectCatalogComponents);
  const neededComponent = useSelector(selectNeededCatalogComponent);

  const [choosedItem, setChoosedItem] = useState(0);
  const [pagination, setPagination] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const likeIcon =
    catalogItems && catalogItems[choosedItem]?.isLiked ? "red" : "white";

  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  useEffect(() => {
    catalogItems?.map((item, index) => {
      if (item.name.includes(neededComponent)) {
        setChoosedItem(index + pagination * 8);
      }
    });
  }, [neededComponent]);

  useEffect(() => {
    if (!catalog) {
      return;
    }
    dispatch(getCatalogComponents(catalog));
  }, [catalog]);

  useEffect(() => {
    document.documentElement.style.setProperty("--smallheartbg", `${likeIcon}`);
  }, [choosedItem]);
  const onChooseItem = (index: number) => setChoosedItem(index);

  const onLikeComponent = () => {
    if (catalogItems && catalogItems[choosedItem].isLiked) {
      return;
    }
    document.documentElement.style.setProperty("--smallheartbg", `red`);
    if (catalogItems) {
      const newCatalog = catalogItems.map((item: CatalogComponents) => {
        if (Number(item.id) === choosedItem + 1) {
          return { ...item, isLiked: true, likes: item.likes + 1 };
        }
        return item;
      });
      dispatch(getCatalogComponents(newCatalog));
      onEditComponent(
        choosedItem + 1,
        "likes",
        catalogItems[choosedItem].likes + 1
      );
    }
  };
  const onEditComponent = async (
    id: number,
    componentKey: keyof CatalogComponents,
    value: any
  ) => {
    //TODO: в диспатч и asyncthunk
    await axios.put(
      `https://640adea265d3a01f98095963.mockapi.io/catalog/${id}`,
      { [componentKey]: value }
    );
  };
  const postNewComponent = async () => {
    const authCheck = window.prompt("Введите пароль");
    if (authCheck === "9573") {
      const componentName = window.prompt("Название компонента");
      //TODO: в диспатч и asyncthunk
      const resp = await axios.post(
        "https://640adea265d3a01f98095963.mockapi.io/catalog",
        {
          name: componentName,
        }
      );
      onEditComponent(resp.data.id, "likes", 0);
      catalogItems &&
        dispatch(
          getCatalogComponents([...catalogItems, { ...resp.data, likes: 0 }])
        );
    } else {
      window.alert("Не угадал");
    }
  };
  const onUseBackPagination = () => {
    catalogItems && pagination !== 0 && setPagination(pagination - 1);
  };
  const onUseForwardPagination = () => {
    catalogItems &&
      catalogItems.length % 8 !== 0 &&
      pagination !== Math.floor(catalogItems.length / 8) &&
      setPagination(pagination + 1);
  };

  const onAddReview = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    if (inputValue.length < 4) {
      setInputError("Не менее 4-х символов");
      return;
    }
    if (catalogItems) {
      const newCatalog = catalogItems.map((item: CatalogComponents) => {
        if (Number(item.id) === choosedItem + 1) {
          return {
            ...item,
            reviews: [...catalogItems[choosedItem].reviews, inputValue],
          };
        }
        return item;
      });
      setInputError("");
      dispatch(getCatalogComponents(newCatalog));
      onEditComponent(id, "reviews", [
        ...catalogItems[choosedItem].reviews,
        inputValue,
      ]);
      setInputValue("");
    }
  };

  return (
    <div className={classes.catalogContainer}>
      <div className={classes.catalogMenu}>
        <div className={classes.catalogHeader}>
          <BackBtn />
          <h2 className={classes.headerText}>Find your favorite animation</h2>
          <div className={classes.helpInfo}>{"?"}</div>
        </div>
        <div className={classes.menuContainer}>
          <div
            className={cn(classes.menuArrow, {
              [classes.disabledArrow]: pagination === 0,
            })}
            onClick={onUseBackPagination}
          >
            &#60;
          </div>
          <div className={classes.menuItems}>
            {catalogItems &&
              catalogItems.length &&
              catalogItems
                .slice(pagination * 8, (pagination + 1) * 8)
                .map((item: CatalogComponents, index: number) => (
                  <div
                    key={item.name + ":" + index}
                    className={cn(classes.menuItem, {
                      [classes.choosedItem]:
                        choosedItem === index + pagination * 8,
                    })}
                    onClick={() => onChooseItem(index + pagination * 8)}
                  >
                    {item.name}
                  </div>
                ))}
            <div className={cn(classes.menuItem)} onClick={postNewComponent}>
              +
            </div>
          </div>
          <div
            className={cn(classes.menuArrow, {
              [classes.disabledArrow]:
                (catalogItems &&
                  pagination === Math.floor(catalogItems.length / 8)) ||
                (catalogItems && catalogItems.length % 8 === 0),
            })}
            onClick={onUseForwardPagination}
          >
            &#62;
          </div>
        </div>
        <div className={classes.previewWindow}>
          <div className={classes.previewInfo}>
            <span>
              Отзывов:&nbsp;
              {catalogItems ? catalogItems[choosedItem]?.reviews.length : 0}
            </span>
            <span>
              {CATALOG_COMPONENTS[choosedItem]?.name || "Soon add..."}
            </span>
            <span className={classes.likesContainer}>
              <div
                style={{ transform: "scale(0.2)" }}
                onClick={onLikeComponent}
              >
                <Heart />
              </div>
              :&nbsp;
              {catalogItems &&
              catalogItems.length &&
              catalogItems[choosedItem].likes
                ? catalogItems[choosedItem].likes
                : 0}
            </span>
            <div className={classes.itemReviews}>
              <div className={classes.reviewsBlock}>
                {catalogItems &&
                  catalogItems[choosedItem].reviews.map(
                    (review: string, index: number) => (
                      <span
                        key={review + ":" + index}
                        className={classes.review}
                      >
                        {editFirstSymbolToUpperCase(review)}
                      </span>
                    )
                  )}
              </div>
              <div className={classes.reviewsError}>{inputError}</div>
              <form
                className={classes.reviewForm}
                onSubmit={(e) => {
                  onAddReview(e, choosedItem + 1);
                }}
              >
                <textarea
                  title="Не менее 4-х символов"
                  className={classes.reviewsInput}
                  placeholder="Напишите отзыв"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className={classes.reviewBtn}>Ok</button>
              </form>
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
