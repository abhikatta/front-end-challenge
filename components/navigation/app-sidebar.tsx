import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import { ROLE_PERMISSIONS } from "@/constants/roles";
import { sidebar } from "@/constants/sidebar";
import { getUserRole } from "@/lib/auth";
import { Person } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SidebarSection from "./sidebar-group";

const AppSidebar = async () => {
  const role = await getUserRole();

  if (!role) return <></>;

  const sidebarData = sidebar.filter((item) =>
    ROLE_PERMISSIONS[role].includes(item.permission),
  );

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-3">
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
