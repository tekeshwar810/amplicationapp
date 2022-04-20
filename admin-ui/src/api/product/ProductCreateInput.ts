import { UserCreateNestedManyWithoutProductsInput } from "./UserCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  email?: string | null;
  fullName: string;
  startDate?: Date | null;
  users?: UserCreateNestedManyWithoutProductsInput;
};
