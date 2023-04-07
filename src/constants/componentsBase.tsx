import AppMenu from "@/components/catalogComponents/appMenu";
import BulkCube from "@/components/catalogComponents/bulkCube";
import Loader from "@/components/catalogComponents/loader/loader";
import Searcher from "@/components/catalogComponents/searcher";
import { ReactNode } from "react";

export const CATALOG_COMPONENTS: { name: string; component?: ReactNode }[] = [
  {
    name: "menu",
    component: <AppMenu />,
  },
  {
    name: "cube",
    component: <BulkCube />,
  },
  {
    name: "searcher",
    component: <Searcher />,
  },
  {
    name: "loader",
    component: <Loader />,
  },
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
