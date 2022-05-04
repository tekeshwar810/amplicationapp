import { User } from "../user/User";

export type Product = {
  address: string | null;
  data: string | null;
  email: string | null;
  emorphism: string | null;
  fullName: string;
  id: string;
  startDate: Date | null;
  users?: Array<User>;
};
