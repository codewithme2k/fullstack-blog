import PageNotFound from "@/app/not-found";
import { commonPath } from "@/constants";

import { currentRole, currentUser } from "@/lib/auth";

import { Role } from "@/types/enums";

import { redirect } from "next/navigation";
import React from "react";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = currentUser();
  const role = await currentRole();
  if (!user) redirect(commonPath.LOGIN);

  if (![Role.ADMIN, Role.EXPERT].includes(role))
    return <PageNotFound></PageNotFound>;
  return <>{children}</>;
};

export default AdminLayout;
