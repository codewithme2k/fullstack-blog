import PageNotFound from "@/app/not-found";
import AddCourseForm from "@/components/forms/AddCourseForm";
import { commonPath } from "@/constants";
import { currentRole, currentUser } from "@/lib/auth";

import { Role } from "@/types/enums";

import { redirect } from "next/navigation";

export default async function Page() {
  const role = await currentRole();
  const user = await currentUser();
  if (!role) redirect(commonPath.LOGIN);

  if (![Role.ADMIN, Role.EXPERT].includes(role)) return <PageNotFound />;
  const newUserId = user!.id;
  return <AddCourseForm userId={newUserId || ""}></AddCourseForm>;
}
