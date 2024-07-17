"use server ";
import { redirect } from "next/navigation";
function DashboardPage() {
	redirect("/dashboard/users");
}

export default DashboardPage;
