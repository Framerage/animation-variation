import { createReducer } from "@reduxjs/toolkit";
import { chooseThemeColor } from "./actions";

const initialState = {
  themeColor: "white",
};
export const appTheme = createReducer(initialState, {
  [chooseThemeColor.type]: (state, action) => {
    state.themeColor = action.payload;
  },
});
