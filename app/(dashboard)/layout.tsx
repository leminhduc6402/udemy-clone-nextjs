import "@/app/globals.css";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="wrapper grid h-screen w-full grid-cols-[300px_1fr]">
      <Sidebar />
      <main className="p-5">{children}</main>
    </div>
  );
}
