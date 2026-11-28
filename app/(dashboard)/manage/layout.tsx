import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const instant = false;
export const dynamic = "force-dynamic";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");

  return <div>{children}</div>;
};

export default AdminLayout;
