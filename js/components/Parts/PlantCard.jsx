import React from "react";
import Image from "next/image";

export default function PlantCard(props){
	const {
		plant,
	} = props;

	const {
		plantId,
		plantName,
		plantImage,
		plantType,
		plantStatuses,
		plantThresholds,
	} = plant;

	const {
		plantHumidity,
		plantTemperature,
	} = plantStatuses;

	const {
		plantHumidityThreshold,
		plantTemperatureThreshold,
	} = plantThresholds;

	// Function to determine the class for humidity
	const humidityClass = () => {
		if (plantHumidity < plantHumidityThreshold) {
			return "bg-blue-100 border-blue-500 text-blue-700";
		} else if (plantHumidity > plantHumidityThreshold) {
			return "bg-red-100 border-red-500 text-red-700";
		} else {
			return "bg-green-100 border-green-500 text-green-700";
		}
	};

	// Function to determine the class for temperature
	const temperatureClass = () => {
		if (plantTemperature < plantTemperatureThreshold) {
			return "bg-blue-100 border-blue-500 text-blue-700";
		} else if (plantTemperature > plantTemperatureThreshold) {
			return "bg-red-100 border-red-500 text-red-700";
		} else {
			return "bg-green-100 border-green-500 text-green-700";
		}
	};

		return (
			<div className="flex bg-white bg-opacity-90 border border-green-500 shadow-md shadow-green-500/50 rounded-lg overflow-hidden">
				<div className="w-full p-4">
					<div className="grid md:grid-cols-4 gap-4">
						<Image layout="responsive" width={400} height={400} objectFit="cover"
						       className="rounded-t-lg md:rounded-none md:rounded-l-lg col-span-1" src={plantImage || 'https://via.placeholder.com/150'}
						       alt={plantName}/>
						{/* Column 1: Plant Overall Information */}
						<div>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Plant
								information</h5>

							<p><span className={'font-bold'}>Name: </span>{plantName}</p>
							<p><span className={'font-bold'}>Type: </span>{plantType}</p>
						</div>
						{/* Column 2: Plant Statistics */}
						<div>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Plant
								statistics</h5>

							<div className={`${humidityClass()} border-l-4 p-2 mb-2`}>
								<p className="font-bold">Soil humidity</p>
								<p>{plantHumidity}%</p>
							</div>

							<div className={`${temperatureClass()} border-l-4 p-2 mb-2`}>
								<p className="font-bold">Soil temperature</p>
								<p>{plantTemperature}°C</p>
							</div>
						</div>
						{/* Column 3: Plant Actions */}
						<div>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Plant
								actions</h5>
							<div className="flex flex-wrap justify-start mt-4 space-y-2">
								<button type="button"
								        className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">
									Edit Plant
								</button>
								<button type="button"
								        className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">
									Delete Plant
								</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
}