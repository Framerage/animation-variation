import { ReactNode } from "react";

export interface CatalogComponents {
  name: string;
  component?: ReactNode;
  likes?: number;
}
