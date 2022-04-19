import { User } from "../user/User";

export type Product = {
  email: string | null;
  fullName: string;
  id: string;
  startDate: Date | null;
  users?: Array<User>;
};
