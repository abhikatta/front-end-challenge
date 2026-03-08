import { SidebarItem } from "@/types/sidebar";
import {
  BarChart,
  CreditCard,
  DashboardCircleIcon,
  Gear,
  Home,
  Store,
} from "@hugeicons/core-free-icons";
import { PERMISSIONS } from "./roles";

export const sidebar: SidebarItem[] = [
  {
    title: "Home",
    icon: Home,
    isActive: false,
    children: null,
    url: "/",
    permission: PERMISSIONS.HOME,
  },
  {
    title: "Dashboard",
    icon: DashboardCircleIcon,
    isActive: false,
    children: null,
    url: "/dashboard",
    permission: PERMISSIONS.DASHBOARD,
  },
  {
    title: "Store",
    isActive: true,
    icon: Store,
    permission: PERMISSIONS.PRODUCT_VIEW,
    children: [
      {
        title: "Products",
        url: "/store/products",
        icon: null,
        permission: PERMISSIONS.PRODUCT_VIEW,
      },
      {
        title: "Add Product",
        icon: null,
        url: "/store/add-product",
        permission: PERMISSIONS.PRODUCT_ADD,
      },
    ],
  },
  {
    title: "Analytic",
    icon: BarChart,
    isActive: true,
    permission: PERMISSIONS.ANALYTIC,
    children: [
      {
        title: "Traffic",
        url: "/analytics/traffic",
        icon: null,
        permission: PERMISSIONS.TRAFFIC,
      },
      {
        title: "Earning",
        url: "/analytics/earning",
        icon: null,
        permission: PERMISSIONS.EARNING,
      },
    ],
  },
  {
    isActive: true,
    title: "Finances",
    icon: CreditCard,
    permission: PERMISSIONS.FINANCES,
    children: [
      {
        title: "Payment",
        url: "/finances/payment",
        icon: null,
        permission: PERMISSIONS.PAYMENT,
      },
      {
        title: "Payout",
        url: "/finances/payout",
        icon: null,
        permission: PERMISSIONS.PAYOUT,
      },
    ],
  },
  {
    title: "Account Setting",
    isActive: true,
    icon: Gear,
    permission: PERMISSIONS.ACCOUNT_SETTING,
    children: [
      {
        title: "My Profile",
        url: "/account-setting/my-profile",
        icon: null,
        permission: PERMISSIONS.MY_PROFILE,
      },
      {
        title: "Security",
        url: "/account-setting/security",
        icon: null,
        permission: PERMISSIONS.SECURITY,
      },
    ],
  },
  {
    isActive: false,
    title: "Help and Support",
    icon: Gear,
    permission: PERMISSIONS.HELP_AND_SUPPORT,
    url: "/help-and-support",
    children: null,
  },
];
