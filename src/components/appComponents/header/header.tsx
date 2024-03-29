import Searcher from "@/components/catalogComponents/searcher";
import { APP_THEMES_RIGHT, APP_THEME_LEFT } from "@/constants/componentsBase";
import { chooseThemeColor, selectThemeColor } from "@/store/modules/appTheme";
import { getNeededCatalogComponent } from "@/store/modules/catalogComponents";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const location = useRouter();
  const appThemesStore = useSelector(selectThemeColor);
  const [appThemes, setAppThemes] = useState(appThemesStore);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--leftRange",
      `${APP_THEME_LEFT}`
    );
    document.documentElement.style.setProperty(
      "--rightRange",
      `${APP_THEMES_RIGHT}`
    );
  }, []);

  const changeFirstTheme = (index: string) => {
    setAppThemes({ ...appThemes, left: Number(index) });
    document.documentElement.style.setProperty(
      "--firstTheme",
      `${APP_THEME_LEFT[Number(index)]}`
    );
    dispatch(chooseThemeColor({ ...appThemes, left: Number(index) }));
  };
  const changeSecondTheme = (index: string) => {
    setAppThemes({ ...appThemes, right: Number(index) });
    document.documentElement.style.setProperty(
      "--secondTheme",
      `${APP_THEMES_RIGHT[Number(index)]}`
    );
    dispatch(chooseThemeColor({ ...appThemes, right: Number(index) }));
  };

  const onSearchComponent = (value: string) => {
    dispatch(getNeededCatalogComponent(value));
  };
  return (
    <header>
      <div className="headerText">
        <div>
          {location.pathname === "/catalog" && (
            <Searcher
              inputValue={searchValue}
              onChangeInputValue={setSearchValue}
              onSearchItem={onSearchComponent}
            />
          )}
        </div>
        <Link href="/" className="appName">
          <span className="firstText">Animation</span>
          <span className="secondText">Variation</span>
        </Link>
      </div>
      <div className="appThemes">
        <input
          type="range"
          className={cn("themeRange", "leftRange")}
          min={0}
          max={APP_THEME_LEFT.length - 1}
          value={appThemes.left}
          onChange={(e) => changeFirstTheme(e.target.value)}
        />
        <input
          type="range"
          className={cn("themeRange", "rightRange")}
          min={0}
          max={APP_THEMES_RIGHT.length - 1}
          value={appThemes.right}
          onChange={(e) => changeSecondTheme(e.target.value)}
        />
      </div>
    </header>
  );
};
export default Header;
