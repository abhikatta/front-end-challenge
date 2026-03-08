import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import {
  BarChart,
  CreditCard,
  Gear,
  Home,
  Person,
  Store,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react";
import SidebarSection from "./sidebar-group";

interface SidebarItemChild extends Omit<SidebarItem, "isActive" | "children"> {
  url: string;
}

export interface SidebarItem {
  id: number | string;
  title: string;
  url?: string;
  icon: HugeiconsIconProps["icon"] | null;
  children: SidebarItemChild[] | null;
  isActive: boolean;
}

const sidebar: SidebarItem[] = [
  {
    id: 1,
    title: "Home",
    icon: Home,
    isActive: false,
    children: null,
    url: "/",
  },
  {
    id: 2,
    title: "Store",
    isActive: true,
    icon: Store,
    children: [
      {
        id: 21,
        title: "Products",
        url: "/store/products",
        icon: null,
      },
      {
        id: 22,
        title: "Add Product",
        icon: null,
        url: "/store/add-product",
      },
    ],
  },
  {
    id: 3,
    title: "Analytic",
    icon: BarChart,
    isActive: true,
    children: [
      {
        id: 31,
        title: "Traffic",
        url: "/analytics/traffic",
        icon: null,
      },
      {
        id: 32,
        title: "Earning",
        url: "/analytics/earning",
        icon: null,
      },
    ],
  },
  {
    id: 4,
    isActive: true,
    title: "Finances",
    icon: CreditCard,
    children: [
      {
        id: 41,
        title: "Payment",
        url: "/finances/payment",
        icon: null,
      },
      {
        id: 42,
        title: "Payout",
        url: "/finances/payout",
        icon: null,
      },
    ],
  },
  {
    id: 5,
    title: "Account Setting",
    isActive: true,
    icon: Gear,
    children: [
      {
        id: 51,
        title: "My Profile",
        url: "/account-setting/my-profile",
        icon: null,
      },
      {
        id: 52,
        title: "Security",
        url: "/account-setting/security",
        icon: null,
      },
    ],
  },
  {
    id: 6,
    isActive: false,
    title: "Help and Support",
    icon: Gear,
    url: "/help-and-support",
    children: null,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="offcanvas" variant="inset">
      <SidebarHeader>
        <div className="flex items-center  gap-3">
          <div className="rounded-full border border-border p-2">
            <HugeiconsIcon icon={Person} />
          </div>
          <p className="text-lg font-semibold">Bitstore</p>
        </div>
        <SidebarSection items={sidebar} />
      </SidebarHeader>
    </Sidebar>
  );
};

export default AppSidebar;
