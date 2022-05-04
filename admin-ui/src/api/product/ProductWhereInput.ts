import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProductWhereInput = {
  address?: StringNullableFilter;
  data?: StringNullableFilter;
  email?: StringNullableFilter;
  emorphism?: StringNullableFilter;
  fullName?: StringFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  users?: UserListRelationFilter;
};
