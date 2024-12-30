"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { GiRamProfile } from "react-icons/gi";

type Props = {};

const LoginButton = (props: Props) => {
	const session = useSession();

	useEffect(() => {
		console.log(session);
	}, [session]);

	if (session.data?.user?.name != null) {
		return (
			<div className="flex flex-row gap-2 ">
				<button
					className=" bg-secondary h-fit rounded-full du-btn du-btn-sm uppercase hover:scale-105 border-none text-primary-content transition-all duration-300"
					onClick={() => signOut()}
				>
					logout
				</button>
				{session?.data?.user?.image && (
					<div className="avatar">
						<div className="w-8 rounded-full overflow-hidden">
							<Image
								src={session?.data?.user?.image || "profile.png"}
								alt=""
								width={100}
								height={100}
							/>
						</div>
					</div>
				)}
			</div>
		);
	} else {
		return (
			<button
				className="du-btn rounded-full du-btn-primary h-fit du-btn-sm uppercase"
				onClick={() => signIn()}
			>
				Login
			</button>
		);
	}
};

export default LoginButton;
