"use client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();
  const signOut = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "GET",
      });
      if (res.ok) {
        router.replace("/login");
      }
    } catch (e) {
      toast.error("Something went wrong! Please try again.");
      console.error(e);
    } finally {
      router.refresh();
    }
  };

  return <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>;
};

export default LogoutButton;
