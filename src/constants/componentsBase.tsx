import AppMenu from "@/components/catalogComponents/appMenu";
import BulkCube from "@/components/catalogComponents/bulkCube";
import Searcher from "@/components/catalogComponents/searcher";
import { CatalogComponents } from "@/typing/catalog";

export const CATALOG_COMPONENTS: CatalogComponents[] = [
  { name: "menu", component: <AppMenu /> },
  { name: "cube", component: <BulkCube /> },
  { name: "searcher", component: <Searcher /> },
  { name: "searcher", component: "" },
];
export const APP_THEME_LEFT = [
  "red",
  "orange",
  "yellow",
  "yellowgreen",
  "green",
  "blue",
  "lightblue",
  "white",
];
export const APP_THEMES_RIGHT = [
  "lightpink",
  "pink",
  "violet",
  "red",
  "orangered",
  "red",
  "brown",
  "black",
];
