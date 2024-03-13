"use client"

import React, { useEffect, useState } from "react";
import SensorCard from "@/js/components/Parts/SensorCard"; // Import the SensorCard component
import { getSensorsByUser } from "@/js/utils/serverCalls"; // Import the function to fetch sensors

export default function SensorsListingSection() {
	const [sensorsArray, setSensorsArray] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchSensors = async () => {
			const sensors = await getSensorsByUser(); // Fetch sensors for the user
			setSensorsArray(sensors);
			setLoading(false);
		};

		fetchSensors();
	}, []);

	if (sensorsArray.length === 0 && loading) {
		return (
			<div className="loaderContainer">
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	} else if (sensorsArray.length === 0 && !loading) {
		return (
			<div id="SensorsListingSection">
				<div className="content-container">
					<div>
						<h1 className="text-2xl font-semibold">Your Sensors</h1>
						<p>You don't have any sensors yet. Add a sensor to get started.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="SensorsListingSection">
			<div className="content-container">
				<div>
					<h1 className="text-2xl font-semibold">Your Sensors</h1>
					<div className="flex flex-wrap">
						{sensorsArray.map((sensor, index) => (
							<div className="w-full mt-4" key={index}>
								<SensorCard sensor={sensor} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
