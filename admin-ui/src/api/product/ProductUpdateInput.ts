import { UserUpdateManyWithoutProductsInput } from "./UserUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  email?: string | null;
  fullName?: string;
  startDate?: Date | null;
  users?: UserUpdateManyWithoutProductsInput;
};
