import React from "react";
import Link from "next/link";
import { getMonthlyUserAnalytics } from "@/lib/actions/users";
import LineChartUsers from "./LineChart";

async function UsersDashboard() {
	const analytics = await getMonthlyUserAnalytics();
	return (
		<div className="xl:max-w-[100rem] lg:max-w-[90rem] md:max-w-[50rem] ">
			<div className="mt-20 max-w-8xl w-full">
				<LineChartUsers data={analytics.usersLastYearCount} />
			</div>
		</div>
	);
}

export default UsersDashboard;
