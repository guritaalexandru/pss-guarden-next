"use client"

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getPlantsTypes, postNewPlant, postPlantImage, getSensorsByUser} from "@/js/utils/serverCalls";

export default function AddPlantSection(props){
	const [plantName, setPlantName] = useState("");
	const [plantImage, setPlantImage] = useState(null);
	const [plantType, setPlantType] = useState("");
	const [plantSensor, setPlantSensor] = useState("");

	const [plantTypes, setPlantTypes] = useState([]);
	const [userSensors, setUserSensors] = useState([]);

	const router = useRouter();

	useEffect(() => {
		const fetchSelectorsData = async () => {
			const plantTypes = await getPlantsTypes();
			setPlantTypes(plantTypes);

			const sensors = await getSensorsByUser();
			setUserSensors(sensors);
		}
		fetchSelectorsData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log("Submitted:", plantName, plantImage, plantType, plantSensor);

		const newPlant = await postNewPlant(plantName, plantType, plantSensor);
		const newPlantId = newPlant._id;
		postPlantImage(newPlantId, plantImage);

		// Resetting form fields after submission
		setPlantName("");
		setPlantImage(null);
		setPlantType("");
		setPlantSensor("");

		router.push("/dashboard");
	};

	const handleImageChange = (e) => {
		// Get the selected file from the file input
		const file = e.target.files[0];
		setPlantImage(file);
	};

	return (
		<form onSubmit={handleSubmit}
			  encType="multipart/form-data"
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
				<label htmlFor="plantImage" className="block text-gray-700 font-bold mb-2">Plant Image</label>
				<input
					type="file"
					name="image"
					id="plantImage"
					accept="image/*"
					onChange={(e) => handleImageChange(e)}
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

			<div className="mb-4">
				<label htmlFor="plantSensor" className="block text-gray-700 font-bold mb-2">Plant Sensor</label>
				<select
					id="plantSensor"
					value={plantSensor}
					onChange={(e) => setPlantSensor(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
					<option value="">Select a sensor</option>
					{
						userSensors.length && userSensors.map((sensor, index) => {
							return (
								<option key={index} value={sensor.sensorId}>{sensor.sensorName}</option>
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
