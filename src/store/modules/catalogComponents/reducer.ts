import { createReducer } from "@reduxjs/toolkit";
import { getCatalogComponents, getNeededCatalogComponent } from "./actions";
import { CatalogComponents } from "@/typing/catalog";
interface CatalogInitialState {
  catalogComponents: CatalogComponents[] | null;
  neededComponent: string;
}
const initialState: CatalogInitialState = {
  catalogComponents: null,
  neededComponent: "",
};
export const catalog = createReducer(initialState, (builder) => {
  builder
    .addCase(getCatalogComponents, (state, action) => {
      state.catalogComponents = action.payload;
    })
    .addCase(getNeededCatalogComponent, (state, action) => {
      state.neededComponent = action.payload;
    });
});
