import AppSidebar from "@/components/navigation/app-sidebar";
import AppTopbar from "@/components/navigation/app-tobar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full p-0 m-0">
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full h-full">
          <AppTopbar />
          {children}
        </div>
      </SidebarProvider>
    </main>
  );
}
