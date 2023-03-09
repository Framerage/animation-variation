import { createReducer } from "@reduxjs/toolkit";
import { chooseThemeColor } from "./actions";

const initialState = {
  themeColor: { left: 0, right: 0 },
};
export const appTheme = createReducer(initialState, {
  [chooseThemeColor.type]: (state, action) => {
    state.themeColor = action.payload;
  },
});
