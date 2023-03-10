import { ReactNode } from "react";

export interface CatalogComponents {
  name: string;
  component?: ReactNode;
  likes?: number;
  componentId?: string;
  reviews: string[];
  id?: string;
}
