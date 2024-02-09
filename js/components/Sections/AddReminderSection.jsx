"use client"

import React, { useState } from "react";

// Assuming you have a list of plants to select from
const plants = [
	{ name: "Rose", type: "Flower" },
	{ name: "Tomato", type: "Vegetable" },
	{ name: "Fern", type: "Houseplant" }
];

export default function AddReminderSection(props) {
	const [selectedPlant, setSelectedPlant] = useState(plants[0].name); // Default to first plant
	const [reminderDate, setReminderDate] = useState("");
	const [reminderDescription, setReminderDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Reminder Set For:", selectedPlant, reminderDate, reminderDescription);

		// Resetting form fields after submission
		setSelectedPlant(plants[0].name);
		setReminderDate("");
		setReminderDescription("");
	};

	return (
		<form onSubmit={handleSubmit}
		      className="max-w-2xl mx-auto bg-white bg-opacity-50 border border-green-500 shadow-md shadow-green-500/50 rounded-lg p-10">
			<div className="mb-4">
				<label htmlFor="selectedPlant" className="block text-gray-700 font-bold mb-2">Select Plant</label>
				<select
					id="selectedPlant"
					value={selectedPlant}
					onChange={(e) => setSelectedPlant(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				>
					{plants.map((plant, index) => (
						<option key={index} value={plant.name}>{plant.name}</option>
					))}
				</select>
			</div>

			<div className="mb-4">
				<label htmlFor="reminderDate" className="block text-gray-700 font-bold mb-2">Reminder Date & Time</label>
				<input
					type="datetime-local"
					id="reminderDate"
					value={reminderDate}
					onChange={(e) => setReminderDate(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="reminderDescription" className="block text-gray-700 font-bold mb-2">Reminder Description</label>
				<textarea
					id="reminderDescription"
					value={reminderDescription}
					onChange={(e) => setReminderDescription(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					rows="3"
				></textarea>
			</div>

			<button type="submit"
			        className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
				Set Reminder
			</button>
		</form>
	);
}
