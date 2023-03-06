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
