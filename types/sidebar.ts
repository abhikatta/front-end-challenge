import { PERMISSIONS } from "@/constants/roles";
import { HugeiconsIconProps } from "@hugeicons/react";

export interface SidebarItem {
  title: string;
  url?: string;
  icon: HugeiconsIconProps["icon"] | null;
  children: SidebarItemChild[] | null;
  isActive: boolean;
  permission: PERMISSIONS;
}

export interface SidebarItemChild extends Omit<
  SidebarItem,
  "isActive" | "children"
> {
  url: string;
}
