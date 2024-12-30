import React from "react";
import Link from "next/link";
import { getAllUsers } from "@/lib/actions/users";
import UserTable from "./UserTable";

async function UsersDashboard() {
  const users = await getAllUsers();
  return (
    <div className="w-full ">
      <div className="mt-20 max-w-5xl w-full ">
        <UserTable users={users} />
      </div>
    </div>
  );
}

export default UsersDashboard;
