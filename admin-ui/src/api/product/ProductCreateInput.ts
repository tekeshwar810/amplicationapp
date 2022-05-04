import { UserCreateNestedManyWithoutProductsInput } from "./UserCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  address?: string | null;
  data?: string | null;
  email?: string | null;
  emorphism?: string | null;
  fullName: string;
  startDate?: Date | null;
  users?: UserCreateNestedManyWithoutProductsInput;
};
