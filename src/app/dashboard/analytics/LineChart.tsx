"use client";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { getMonthlyUserAnalytics } from "@/lib/actions/users";

interface chartData {
	month: String;
	year: number;
	count: number;
}
const chartData = [
	{ month: "January", desktop: 2 },
	{ month: "February", desktop: 3 },
	{ month: "March", desktop: 6 },
	{ month: "April", desktop: 3 },
	{ month: "May", desktop: 7 },
	{ month: "June", desktop: 9 },
];
const chartConfig = {
	users: {
		label: "Users",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

type Props = {
	data: chartData[];
	growthLastMonth: number;
};

function LineChartUsers({ data }: { data: chartData[] }) {
	const [chartData, setChartData] = useState<chartData[]>();
	const [lastMonthGrowth, setLastMonthGrowth] = useState<string>();
	useEffect(() => {
		const fetchData = async () => {
			const data = await getMonthlyUserAnalytics();
			setChartData(data.usersLastYearCount);
			setLastMonthGrowth(data.growthThisMonth);
		};
		fetchData();
	}, []);
	return (
		<Card className="max-w-5xl w-full bg-black mx-auto">
			<CardHeader className="text-white">
				<CardTitle>Users over the months</CardTitle>
				<CardDescription>
					Showing total new users for the last 2 years
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							className="text-white"
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<Area
							dataKey="count"
							type="natural"
							fill="var(--color-users)"
							fillOpacity={0.4}
							stroke="var(--color-users)"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 font-medium leading-none text-white">
							Trending up by {lastMonthGrowth} this month{" "}
							<TrendingUp className="h-4 w-4" />
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}

export default LineChartUsers;
