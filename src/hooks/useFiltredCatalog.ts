import { CatalogComponents } from "@/typing/catalog";
import { useMemo } from "react";

export const useFiltredCatalog = (
  componentList: CatalogComponents[],
  searchValue: string
) => {
  return useMemo(() => {
    if (!searchValue) {
      return componentList;
    }
    return componentList.filter((item) => item.name.includes(searchValue));
  }, [componentList, searchValue]);
};
