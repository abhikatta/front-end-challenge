import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import {
  BarChart,
  CreditCard,
  DashboardCircleIcon,
  Gear,
  Home,
  Person,
  Store,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react";
import SidebarSection from "./sidebar-group";
import { getUserRole } from "@/lib/auth";
import { ROLES } from "@/constants/roles";

interface SidebarItemChild extends Omit<SidebarItem, "isActive" | "children"> {
  url: string;
}

export interface SidebarItem {
  title: string;
  url?: string;
  icon: HugeiconsIconProps["icon"] | null;
  children: SidebarItemChild[] | null;
  isActive: boolean;
}

const sidebar: SidebarItem[] = [
  {
    title: "Home",
    icon: Home,
    isActive: false,
    children: null,
    url: "/",
  },
  {
    title: "Dashboard",
    icon: DashboardCircleIcon,
    isActive: false,
    children: null,
    url: "/dashboard",
  },
  {
    title: "Store",
    isActive: true,
    icon: Store,
    children: [
      {
        title: "Products",
        url: "/store/products",
        icon: null,
      },
      {
        title: "Add Product",
        icon: null,
        url: "/store/add-product",
      },
    ],
  },
  {
    title: "Analytic",
    icon: BarChart,
    isActive: true,
    children: [
      {
        title: "Traffic",
        url: "/analytics/traffic",
        icon: null,
      },
      {
        title: "Earning",
        url: "/analytics/earning",
        icon: null,
      },
    ],
  },
  {
    isActive: true,
    title: "Finances",
    icon: CreditCard,
    children: [
      {
        title: "Payment",
        url: "/finances/payment",
        icon: null,
      },
      {
        title: "Payout",
        url: "/finances/payout",
        icon: null,
      },
    ],
  },
  {
    title: "Account Setting",
    isActive: true,
    icon: Gear,
    children: [
      {
        title: "My Profile",
        url: "/account-setting/my-profile",
        icon: null,
      },
      {
        title: "Security",
        url: "/account-setting/security",
        icon: null,
      },
    ],
  },
  {
    isActive: false,
    title: "Help and Support",
    icon: Gear,
    url: "/help-and-support",
    children: null,
  },
];

const AppSidebar = async () => {
  const isStoreManager = await getUserRole();
  const sidebarData =
    isStoreManager === ROLES.STORE_KEEPER
      ? sidebar.filter((item) => item.title !== "Dashboard")
      : sidebar;

  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <div className="flex items-center  gap-3">
          <div className="rounded-full border border-border p-2">
            <HugeiconsIcon icon={Person} />
          </div>
          <p className="text-lg font-semibold">Bitstore</p>
        </div>
        <SidebarSection items={sidebarData} />
      </SidebarHeader>
    </Sidebar>
  );
};

export default AppSidebar;
