import AliveBg from "@/components/catalogComponents/alive-bg";
import AppMenu from "@/components/catalogComponents/appMenu";
import BulkCube from "@/components/catalogComponents/bulkCube";
import DotLoader from "@/components/catalogComponents/dotLoader";
import Heart from "@/components/catalogComponents/heart";
import Loader from "@/components/catalogComponents/loader";
import Menu3d from "@/components/catalogComponents/menu-3d/menu3d";
import PointLoader from "@/components/catalogComponents/pointLoader";
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
  {
    name: "heart",
    component: <Heart />,
  },
  {
    name: "alive-bg",
    component: <AliveBg />,
  },
  {
    name: "point-loader",
    component: <PointLoader />,
  },
  {
    name: "dot-loader",
    component: <DotLoader />,
  },
  {
    name: "menu-3d",
    component: <Menu3d />,
  },
];
export const APP_THEME_LEFT = [
  "white",
  "lightblue",
  "red",
  "orange",
  "yellow",
  "yellowgreen",
  "green",
  "blue",
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
