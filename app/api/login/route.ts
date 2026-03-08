import { ROLES } from "@/constants/roles";
import { NextResponse } from "next/server";

const users = [
  {
    email: "manager@test.com",
    name: "manager1",
    password: "123456",
    role: ROLES.MANAGER,
  },
  {
    email: "store@test.com",
    password: "123456",
    name: "storeKeeper1",
    role: ROLES.STORE_KEEPER,
  },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!user) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }

  const res = NextResponse.json({
    success: true,
    role: user.role,
  });

  const userDetails = {
    email: user.email,
    name: user.name,
    role: user.role,
  };

  res.cookies.set("user", JSON.stringify(userDetails), {
    httpOnly: true,
    path: "/",
  });

  return res;
}
