import { ROLES } from "@/constants/roles";
import { User } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user")?.value;
  return userCookie ? (JSON.parse(userCookie) as User) : null;
};

export async function getUserRole(): Promise<ROLES | null> {
  const user = await getUser();
  if (user) {
    return user.role;
  } else return null;
}
