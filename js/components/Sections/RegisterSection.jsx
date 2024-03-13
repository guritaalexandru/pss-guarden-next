"use client"

import React, { useState } from "react";
import {registerUser} from "@/js/utils/serverCalls";
import {useRouter} from "next/navigation";

export default function RegisterSection() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

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
		const responseDate = await registerUser(username, email, password);
		if (responseDate.status === 400) {
			setError("Error creating user");
			setSuccess("");
		} else {
			setSuccess("User created successfully");
			setError("");
		}

		// Reset form fields
		setUsername("");
		setPassword("");
		setEmail("");
	};

	return (
		<form onSubmit={handleSubmit}
		      className="max-w-2xl mx-auto bg-white bg-opacity-50 border border-green-500 shadow-md shadow-green-500/50 rounded-lg p-10">
			{
				error && <p className="text-red-500 text-center">{error}</p>
			}
			{
				success && <p className="text-green-500 text-center">{success}</p>
			}
			<div className="mb-4">
				<label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>

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
				Register
			</button>
		</form>
	);
}
