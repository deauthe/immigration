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
				className="du-btn du-glass bg-transparent rounded-full uppercase text-primary-content font-extralight hover:text-black transition-all duration-300"
				onClick={() => signOut()}
			>
				logout
			</button>
		);
	} else {
		return (
			<button
				className="du-btn du-btn-primary uppercase"
				onClick={() => signIn()}
			>
				Login
			</button>
		);
	}
};

export default LoginButton;
