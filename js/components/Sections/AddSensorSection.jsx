"use client"

import React, { useState } from "react";
import { postNewSensor } from "@/js/utils/serverCalls"; // Assuming this is the function to call for adding a new sensor

export default function AddSensorSection(props) {
	const [sensorName, setSensorName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Assuming the function postNewSensor takes the sensor name as its parameter
		postNewSensor(sensorName);

		// Resetting form fields after submission
		setSensorName("");
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white bg-opacity-50 border border-green-500 shadow-md shadow-green-500/50 rounded-lg p-10">
			<div className="mb-4">
				<label htmlFor="sensorName" className="block text-gray-700 font-bold mb-2">Sensor Name</label>
				<input
					type="text"
					id="sensorName"
					value={sensorName}
					onChange={(e) => setSensorName(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter sensor name"
					required
				/>
			</div>

			<button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
				Add Sensor
			</button>
		</form>
	);
}
