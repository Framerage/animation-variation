import { createAction } from "@reduxjs/toolkit";

export const chooseThemeColor = createAction<{ left: number; right: number }>(
  "CHOOSE_COLOR"
);
