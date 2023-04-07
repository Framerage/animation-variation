import { createReducer } from "@reduxjs/toolkit";
import { getCatalogComponents } from "./actions";
import { CatalogComponents } from "@/typing/catalog";
interface CatalogInitialState {
  catalogComponents: CatalogComponents[] | null;
}
const initialState = {
  catalogComponents: null,
};
export const catalog = createReducer<CatalogInitialState>(initialState, {
  [getCatalogComponents.type]: (state, action) => {
    state.catalogComponents = action.payload;
  },
});
