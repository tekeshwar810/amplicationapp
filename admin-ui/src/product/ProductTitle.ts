import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "fullName";

export const ProductTitle = (record: TProduct): string => {
  return record.fullName || record.id;
};
