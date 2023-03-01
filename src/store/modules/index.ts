import { combineReducers } from "@reduxjs/toolkit";
import { appTheme } from "./appTheme";

export const rootReducer = combineReducers({
  appTheme,
});
export type RootState = ReturnType<typeof rootReducer>;
