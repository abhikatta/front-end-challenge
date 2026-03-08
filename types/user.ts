import { ROLES } from "@/constants/roles";

export interface User {
  email: string;
  name: string;
  password: string;
  role: ROLES;
}
