import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  product?: ProductWhereUniqueInput | null;
  roles?: Array<string>;
  username?: string;
};
