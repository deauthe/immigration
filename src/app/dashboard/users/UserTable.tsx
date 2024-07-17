import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Question, UserAssesment } from "@prisma/client";
import Link from "next/link";

const staticTitles = [];

type User = {
	id: string;
	name?: string | null;
	email: string | null;
	role: string | null;
	userAssesment?: UserAssesment | null;
	questions?: Question[] | null;
	[key: string]: any;
};

const UserTable = ({ users }: { users: User[] }) => {
	return (
		<Table className="text-black bg-white/80 rounded-box max-w-full overflow-x-auto ">
			<TableCaption>A list of your recent users.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Id</TableHead>
					<TableHead>email</TableHead>
					<TableHead>name</TableHead>
					<TableHead className="text-right">questions</TableHead>
					<TableHead className="text-right">Assesments</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user) => {
					const assesmentId = user?.userAssesment?.id;
					const questions = user?.questions;
					return (
						<TableRow key={user.id}>
							<TableCell className="font-medium text-clip w-10 text-nowrap">
								{user.id}
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.name}</TableCell>
							<TableCell className="text-center  items-center justify-center flex">
								{user.questions?.length && user.questions?.length > 0 && (
									<Link
										href={`/dashboard/users/questions/${user.id}`}
										className=""
									>
										<LinkIcon />
									</Link>
								)}
							</TableCell>
							<TableCell className="text-center">
								{user.id && (
									<Link
										href={`/dashboard/users/assesments/${assesmentId}`}
										className="mx-auto "
									>
										<LinkIcon />
									</Link>
								)}
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={4}>Total</TableCell>
					<TableCell className="text-right"> {users.length}</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};

export default UserTable;

const LinkIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
			/>
		</svg>
	);
};
