"use client"

import React, { useState } from "react";
import {loginUser} from "@/js/utils/serverCalls";
import {useRouter} from "next/navigation";

export default function LoginSection() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const router = useRouter();

	let token = '';
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('token')
	}
	if (token) {
		router.push("/dashboard");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const responseDate = await loginUser(username, password);
		console.log(responseDate);

		if (responseDate.error) {
			setError("Error logging in");
		}
		else if (responseDate.token) {
			localStorage.setItem("token", responseDate.token);
			router.push("/dashboard");
		}

		// Reset form fields
		setUsername("");
		setPassword("");
	};

	return (
		<form onSubmit={handleSubmit}
		      className="max-w-2xl mx-auto bg-white bg-opacity-50 border border-green-500 shadow-md shadow-green-500/50 rounded-lg p-10">
			{
				error && <p className="text-red-500 text-center">{error}</p>
			}
			<div className="mb-4">
				<label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
				<input
					type="text"
					id="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>

			<button
				type="submit"
				className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
			>
				Login
			</button>
		</form>
	);
}
