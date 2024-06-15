"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const LoginButton = (props: Props) => {
	const session = useSession();

	useEffect(() => {
		console.log(session);
	}, [session]);

	if (session.data?.user?.name != null) {
		return (
			<button
				className=" bg-white h-fit rounded-full du-btn-sm uppercase  font-extralight hover:text-black transition-all duration-300"
				onClick={() => signOut()}
			>
				logout
			</button>
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
