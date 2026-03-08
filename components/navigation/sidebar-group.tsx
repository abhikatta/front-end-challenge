"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { SidebarItem } from "./sidebar";
import { ChevronDown } from "@hugeicons/core-free-icons";
import Link from "next/link";

const SidebarChildItem = ({ menuItem }: { menuItem: SidebarItem }) => {
  return menuItem.url ? (
    <Button variant={"secondary"} key={menuItem.id}>
      <Link
        href={menuItem.url}
        className="flex gap-3 items-center justify-start w-full">
        {menuItem.icon && <HugeiconsIcon icon={menuItem.icon} />}
        {menuItem.title}
        {menuItem.children && (
          <HugeiconsIcon icon={ChevronDown} className="ml-auto" />
        )}
      </Link>
    </Button>
  ) : (
    <Button
      key={menuItem.id}
      variant={"secondary"}
      className="flex gap-3 items-center justify-start">
      {menuItem.icon && <HugeiconsIcon icon={menuItem.icon} />}
      {menuItem.title}
      {menuItem.children && (
        <HugeiconsIcon icon={ChevronDown} className="ml-auto" />
      )}
    </Button>
  );
};

const SidebarSection = ({ items }: { items: SidebarItem[] }) => {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((menuItem) =>
          !menuItem.children ? (
            <SidebarChildItem key={menuItem.id} menuItem={menuItem} />
          ) : (
            <Collapsible
              key={menuItem.id}
              asChild
              defaultOpen={menuItem.isActive}
              className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    asChild
                    className="data-[slot=sidebar-menu-button]:p-1.5!">
                    <Button
                      variant={"secondary"}
                      className="flex gap-3 items-center justify-start">
                      {menuItem.icon && <HugeiconsIcon icon={menuItem.icon} />}
                      {menuItem.title}
                      {menuItem.children && (
                        <HugeiconsIcon icon={ChevronDown} className="ml-auto" />
                      )}
                    </Button>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {menuItem.children?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.id}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url} className="w-full">
                            {subItem.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarSection;
