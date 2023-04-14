import { createSelector } from "@reduxjs/toolkit";
import { selectRoot } from "../rootSelector";

const selectCatalog = createSelector(selectRoot, (root) => root.catalog);
export const selectCatalogComponents = createSelector(
  selectCatalog,
  (state) => state.catalogComponents
);
export const selectNeededCatalogComponent = createSelector(
  selectCatalog,
  (state) => state.neededComponent
);
