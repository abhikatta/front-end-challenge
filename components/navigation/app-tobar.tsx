import { ROLE_LABELS } from "@/constants/roles";
import { getUser } from "@/lib/auth";
import { Profile } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ThemeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutButton from "./logout-button";

const AppTopbar = async () => {
  const user = await getUser();
  if (!user) return <></>;

  return (
    <div className="w-full h-16 flex items-center justify-end p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <HugeiconsIcon icon={Profile} strokeWidth={2} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{ROLE_LABELS[user?.role]}</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>My Account</DropdownMenuItem>
          <ThemeToggle />

          <DropdownMenuSeparator />

          <LogoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AppTopbar;
