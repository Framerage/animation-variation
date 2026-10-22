import { createReducer } from "@reduxjs/toolkit";
import { chooseThemeColor } from "./actions";

const initialState = {
  themeColor: { left: 0, right: 0 },
};
export const appTheme = createReducer(initialState, (builder) => {
  builder.addCase(chooseThemeColor, (state, action) => {
    state.themeColor = action.payload;
  });
});
