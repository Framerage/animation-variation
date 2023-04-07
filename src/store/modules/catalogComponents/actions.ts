import { CatalogComponents } from "@/typing/catalog";
import { createAction } from "@reduxjs/toolkit";
export const getCatalogComponents = createAction<CatalogComponents[] | null>(
  "GET_COMPONENTS"
);
