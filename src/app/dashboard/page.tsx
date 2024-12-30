"use server ";
import { redirect } from "next/navigation";
function DashboardPage() {
  const dashBoardAuth = false;
  if (!dashBoardAuth) {
    redirect("/dashboard/login");
  }
}
export default DashboardPage;
