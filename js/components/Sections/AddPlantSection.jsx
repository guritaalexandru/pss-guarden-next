"use client"

import React, {useEffect, useState} from "react";
import {getPlantsTypes, postNewPlant} from "@/js/utils/serverCalls";

export default function AddPlantSection(props){
	const [plantName, setPlantName] = useState("");
	const [plantImage, setPlantImage] = useState("");
	const [plantType, setPlantType] = useState("");

	const [plantTypes, setPlantTypes] = useState([]);

	useEffect(() => {
		const fetchPlantTypes = async () => {
			const plantTypes = await getPlantsTypes();
			setPlantTypes(plantTypes)
		}
		fetchPlantTypes();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Submitted:", plantName, plantImage, plantType);

		postNewPlant(1, plantName, plantImage, plantType);

		// Resetting form fields after submission
		setPlantName("");
		setPlantImage("");
		setPlantType("");
	};

	return (
		<form onSubmit={handleSubmit}
		      className="max-w-2xl mx-auto bg-white bg-opacity-50 border border-green-500 shadow-md shadow-green-500/50 rounded-lg p-10">
			<div className="mb-4">
				<label htmlFor="plantName" className="block text-gray-700 font-bold mb-2">Plant Name</label>
				<input
					type="text"
					id="plantName"
					value={plantName}
					onChange={(e) => setPlantName(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="plantImage" className="block text-gray-700 font-bold mb-2">Plant Image URL</label>
				<input
					type="text"
					id="plantImage"
					value={plantImage}
					onChange={(e) => setPlantImage(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="plantType" className="block text-gray-700 font-bold mb-2">Plant Type</label>
				<select
					id="plantType"
					value={plantType}
					onChange={(e) => setPlantType(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
					<option value="">Select a plant type</option>
					{
						plantTypes.length && plantTypes.map((type, index) => {
							return (
								<option key={index} value={type.plantTypeId}>{type.plantTypeName}</option>
							)
						})
					}
				</select>
			</div>

			<button type="submit"
			        className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
				Add Plant
			</button>
		</form>
	);
};
