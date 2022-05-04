import { UserUpdateManyWithoutProductsInput } from "./UserUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  address?: string | null;
  data?: string | null;
  email?: string | null;
  emorphism?: string | null;
  fullName?: string;
  startDate?: Date | null;
  users?: UserUpdateManyWithoutProductsInput;
};
