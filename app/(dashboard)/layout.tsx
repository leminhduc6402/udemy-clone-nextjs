import "@/app/globals.css";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper grid h-screen grid-cols-[300px_1fr]">
      <Sidebar />
      <div className="flex items-center justify-center">
        <main>{children}</main>
      </div>
    </div>
  );
}
