import { combineReducers } from "@reduxjs/toolkit";
import { catalog } from "./catalogComponents";
import { appTheme } from "./appTheme/reducer";

export const rootReducer = combineReducers({
  appTheme,
  catalog,
});
export type RootState = ReturnType<typeof rootReducer>;
