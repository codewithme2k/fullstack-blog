import { currentRole } from "@/lib/auth";
import { EUserRole } from "@prisma/client";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await currentRole();

  const notifications = "123123";

  if (role === EUserRole.USER) return <h1 className="">CAM VO</h1>;
  return (
    <>
      <Header
        notifications={
          notifications ? JSON.parse(JSON.stringify(notifications)) : []
        }
      ></Header>
      <main className="grid grid-cols-1 pt-8 xl:pt-0 xl:w-[calc(100%-300px)] ml-auto lg:min-h-screen relative items-start">
        <Sidebar role={role ? JSON.parse(JSON.stringify(role)) : []}></Sidebar>
        <section className="px-5 lg:px-8 pb-5 lg:pb-10">
          {children}
          <Navigation role={role}></Navigation>
        </section>
      </main>
    </>
  );
}
