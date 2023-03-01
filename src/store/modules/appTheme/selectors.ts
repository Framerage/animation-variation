import { createSelector } from "@reduxjs/toolkit";
import { selectRoot } from "../rootSelector";

const selectAppTheme = createSelector(selectRoot, (root) => root.appTheme);
export const selectThemeColor = createSelector(
  selectAppTheme,
  (state) => state.themeColor
);
