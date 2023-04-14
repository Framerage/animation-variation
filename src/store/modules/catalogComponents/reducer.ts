import { createReducer } from "@reduxjs/toolkit";
import { getCatalogComponents, getNeededCatalogComponent } from "./actions";
import { CatalogComponents } from "@/typing/catalog";
interface CatalogInitialState {
  catalogComponents: CatalogComponents[] | null;
  neededComponent: string;
}
const initialState = {
  catalogComponents: null,
  neededComponent: "",
};
export const catalog = createReducer<CatalogInitialState>(initialState, {
  [getCatalogComponents.type]: (state, action) => {
    state.catalogComponents = action.payload;
  },
  [getNeededCatalogComponent.type]: (state, action) => {
    state.neededComponent = action.payload;
  },
});
