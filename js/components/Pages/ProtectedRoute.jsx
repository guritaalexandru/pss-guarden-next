"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { verifyToken } from "@/js/utils/serverCalls"; // Assuming you have a function to verify the token

const ProtectedRoute = ({ children }) => {
	const [tokenVerified, setTokenVerified] = useState(false);
	const [loading, setLoading] = useState(true);

	const router = useRouter();
	let token = '';
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('token')
	}

	useEffect(() => {
		const checkToken = async () => {
			try {
				if (token) {
					const response = await verifyToken(token); // Assuming verifyToken is a function to verify the token
					if (response.valid) {
						setTokenVerified(true);
						setLoading(false);
					} else {
						localStorage.removeItem('token');
						router.push('/login');
					}
				} else {
					router.push('/login');
				}
			} catch (error) {
				console.error("Error verifying token:", error);
				router.push('/login');
			}
		};

		checkToken();
	}, []);

	if (loading) {
		// You might want to display a loading spinner or message while verifying the token
		return <div>Loading...</div>;
	}

	return tokenVerified ? <>{children}</> : null;
};

export default ProtectedRoute;
