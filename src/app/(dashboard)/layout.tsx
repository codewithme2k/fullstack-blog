import { currentRole } from "@/lib/auth";
import { EUserRole } from "@prisma/client";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await currentRole();

  if (role === EUserRole.USER) return <h1 className="">CAM VO</h1>;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      {children}
    </div>
  );
}
