import { NextRequest, NextResponse } from "next/server";

export enum ROLES {
  MANAGER = "manager",
  STORE_KEEPER = "store_keeper",
}

export enum PERMISSIONS {
  HOME = "/",
  DASHBOARD = "dashboard",
  PRODUCT_VIEW = "product_view",
  PRODUCT_ADD = "product_add",
  PRODUCT_EDIT = "product_edit",
  ANALYTIC = "analytic",
  TRAFFIC = "traffic",
  EARNING = "earning",
  PAYMENT = "payment",
  PAYOUT = "payout",
  ACCOUNT_SETTING = "account_setting",
  MY_PROFILE = "my_profile",
  SECURITY = "security",
  HELP_AND_SUPPORT = "help_and_support",
  FINANCES = "finances",
}

export const ROLE_PERMISSIONS = {
  [ROLES.MANAGER]: [
    PERMISSIONS.HOME,
    PERMISSIONS.DASHBOARD,
    PERMISSIONS.PRODUCT_ADD,
    PERMISSIONS.PRODUCT_EDIT,
    PERMISSIONS.PRODUCT_VIEW,
    PERMISSIONS.ANALYTIC,
    PERMISSIONS.TRAFFIC,
    PERMISSIONS.EARNING,
    PERMISSIONS.PAYMENT,
    PERMISSIONS.PAYOUT,
    PERMISSIONS.ACCOUNT_SETTING,
    PERMISSIONS.MY_PROFILE,
    PERMISSIONS.SECURITY,
    PERMISSIONS.HELP_AND_SUPPORT,
    PERMISSIONS.FINANCES,
  ],
  [ROLES.STORE_KEEPER]: [
    PERMISSIONS.HOME,
    PERMISSIONS.PRODUCT_ADD,
    PERMISSIONS.PRODUCT_EDIT,
    PERMISSIONS.PRODUCT_VIEW,
    PERMISSIONS.ANALYTIC,
    PERMISSIONS.TRAFFIC,
    PERMISSIONS.EARNING,
    PERMISSIONS.PAYMENT,
    PERMISSIONS.PAYOUT,
    PERMISSIONS.ACCOUNT_SETTING,
    PERMISSIONS.MY_PROFILE,
    PERMISSIONS.SECURITY,
    PERMISSIONS.HELP_AND_SUPPORT,
    PERMISSIONS.FINANCES,
  ],
};
const users = [
  {
    email: "manager@test.com",
    name: "manager1",
    password: "123456",
    role: ROLES.MANAGER,
    permissions: ROLE_PERMISSIONS[ROLES.MANAGER],
  },
  {
    email: "store@test.com",
    password: "123456",
    name: "storeKeeper1",
    role: ROLES.STORE_KEEPER,
    permissions: ROLE_PERMISSIONS[ROLES.STORE_KEEPER],
  },
];

export async function POST(req: NextRequest) {
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
    permissions: user.permissions,
  };

  res.cookies.set("user", JSON.stringify(userDetails), {
    httpOnly: true,
    path: "/",
  });

  return res;
}
