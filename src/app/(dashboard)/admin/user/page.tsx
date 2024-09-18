"use client";
import { UseCurrentUser } from "@/hooks/use-current-user";

const page = () => {
  const user = UseCurrentUser();
  return <div>{user?.name}</div>;
};

export default page;
