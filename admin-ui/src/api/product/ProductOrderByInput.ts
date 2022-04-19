import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
};
