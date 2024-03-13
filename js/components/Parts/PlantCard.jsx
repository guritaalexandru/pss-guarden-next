import React, {useEffect, useState} from "react";
import Image from "next/legacy/image";
import {deletePlant, updatePlant} from "@/js/utils/serverCalls";

export default function PlantCard(props){// New state to hold the editable name
	const {
		plant,
		plantTypes,
		userSensors,
	} = props;

	const {
		plantId,
		plantName,
		plantType,
		plantStatuses,
		plantThresholds,
		plantImage,
		reminders,
		sensor,
	} = plant;

	console.log(reminders);

	const {
		plantHumidity,
		plantTemperature,
	} = plantStatuses;

	const {
		plantHumidityUpperThreshold,
		plantHumidityLowerThreshold,
		plantTemperatureUpperThreshold,
		plantTemperatureLowerThreshold,
	} = plantThresholds;

	const [isDeleted, setIsDeleted] = useState(false);
	const [editMode, setEditMode] = useState(false); // New state to manage edit mode
	const [editableName, setEditableName] = useState(plantName);
	const [editableType, setEditableType] = useState(plantType);
	const [editableSensor, setEditableSensor] = useState(sensor);

	console.log('sensor', sensor);
	console.log('plantType', plantType);

	console.log('editableType', editableType);
	console.log('editableSensor', editableSensor);

	console.log('plantTypes', plantTypes);
	console.log('userSensors', userSensors);

	//reminder time
	const getReminderTime=()=>{
		if (reminders&& reminders.length!=0){

			const dateObject = new Date(reminders[0].time);
			const year = dateObject.getFullYear();
			const month = dateObject.getMonth() + 1; 
			const day = dateObject.getDate();
			const hours = dateObject.getHours();
			const minutes = dateObject.getMinutes();	
			const reminderTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hours}:${minutes}`;	 
			 return reminderTime;
		}
	}

	const ReminderTime=getReminderTime();



	// Function to determine the class for humidity
	const humidityClass = () => {
		if (plantHumidity > plantHumidityUpperThreshold || plantHumidity < plantHumidityLowerThreshold) {
			return "bg-red-100 border-red-500 text-red-700";
		} else {
			return "bg-green-100 border-green-500 text-green-700";
		}
	};

	// Function to determine the class for temperature
	const temperatureClass = () => {
		if (plantTemperature > plantTemperatureUpperThreshold || plantTemperature < plantTemperatureLowerThreshold) {
			return "bg-red-100 border-red-500 text-red-700";
		} else {
			return "bg-green-100 border-green-500 text-green-700";
		}
	};

	// Function to determine the temperature warning message
	const getTemperatureWarningMessage = () => {
		if (plantTemperature < plantTemperatureLowerThreshold) {
			return { message: "Temperature Too Low!", show: true };
		} else if (plantTemperature > plantTemperatureUpperThreshold) {
			return { message: "Temperature Too High!", show: true };
		} else {
			return { show: false }; // Do not show warning for optimal temperature
		}
	};

	// Function to determine the humidity warning message
	const getHumidityWarningMessage = () => {
		if (plantHumidity < plantHumidityLowerThreshold) {
			return { message: "Humidity Too Low!", show: true };
		} else if (plantHumidity > plantHumidityUpperThreshold) {
			return { message: "Humidity Too High!", show: true };
		} else {
			return { show: false }; // Do not show warning for optimal humidity
		}
	};

	const handleDelete = async () => {
		const deleteResponse = await deletePlant(plantId);
		console.log(deleteResponse);
		setIsDeleted(true);
	}

	const handleEditToggle = () => {
		setEditMode(!editMode);
	};

	const handleNameChange = (e) => {
		setEditableName(e.target.value);
	};

	const handleTypeChange = (e) => {
		const newType = plantTypes.find(type => type._id === parseInt(e.target.value));
		setEditableType(newType);
	}

	const handleSensorChange = (e) => {
		const newSensor = userSensors.find(sensor => sensor._id === parseInt(e.target.value));
		setEditableSensor(newSensor);
	}

	const handleSaveEdit = () => {
		const response = updatePlant(plantId, editableName, editableType._id, editableSensor._id);
		// After saving, toggle off edit mode
		setEditMode(false);
	};

	const temperatureWarning = getTemperatureWarningMessage();
    const humidityWarning = getHumidityWarningMessage();

	if (isDeleted) {
		return null;
	}

		return (
			<div className="flex bg-white bg-opacity-90 border border-green-500 shadow-md shadow-green-500/50 rounded-lg overflow-hidden">
				<div className="w-full p-4">
					<div className="grid md:grid-cols-4 gap-4">
						<Image layout="responsive" width={400} height={400} objectFit="cover"
						       className="rounded-t-lg md:rounded-none md:rounded-l-lg col-span-1" src={plantImage ? `data:${plantImage.contentType};base64,${plantImage.data}` : 'plant.png'}
						       alt={plantName}/>
						{/* Column 1: Plant Overall Information */}
						<div>
							<div className="mb-10">
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Plant
								information</h5>

								{editMode ? (
									<>
										<div className="mb-3">
											<label htmlFor="plantName" className="font-bold">Name:</label>
											<input
												id="plantName"
												type="text"
												value={editableName}
												onChange={handleNameChange}
												className="text-lg font-bold text-gray-900 bg-gray-100 rounded p-2 w-full"
											/>
										</div>
										<div className={'mb-3'}>
											<label htmlFor="plantType" className="font-bold">Type:</label>
											<select
												id="plantType"
												value={editableType?._id}
												onChange={handleTypeChange}
												className="text-lg font-bold text-gray-900 bg-gray-100 rounded p-2 w-full">
												{plantTypes.map((type, index) => {
													return (
														<option key={type._id} value={type._id}>{type.name}</option>
													);
												})}
											</select>
										</div>
										<div className={'mb-3'}>
											<label htmlFor="plantSensor" className="font-bold">Sensor:</label>
											<select
												id="plantSensor"
												value={editableSensor?._id}
												onChange={handleSensorChange}
												className="text-lg font-bold text-gray-900 bg-gray-100 rounded p-2 w-full">
												{userSensors.map((sensor, index) => {
													return (
														<option key={sensor._id} value={sensor._id}>{sensor.sensorName}</option>
													);
												})}
											</select>
										</div>
									</>
								) : (
									<>
										<p><span className={'font-bold'}>Name: </span>{editableName}</p>
										<p><span className={'font-bold'}>Type: </span>{editableType.name}</p>
										<p><span className={'font-bold'}>Sensor: </span>{editableSensor.sensorName}</p>
									</>
								)}
							</div>
							{reminders&& reminders.length!=0&&(
							<div className=" mt-3 bg-green-100  text-green-700">
								<div className="flex mb-4">
									<Image src="/assets/images/reminder.png" alt="reminder" width={40} height={40}/>
									<h4 className="pt-2 pl-2">
										Reminder:
									</h4>
								</div>
								<h4>
									{ReminderTime}
								</h4>

								<h4 className="mt-3">
									{reminders[0].reminderMessage}
								</h4>
								
							</div>)}
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

							<div className="mt-3 bg-red-100  text-red-700">
            				{temperatureWarning.show && (
								<div className="flex">
									<Image src="/assets/images/warning.png" alt="warning" width={40} height={40} />
									<div className="ml-2 mt-2">
										<p>{temperatureWarning.message}</p>
									</div>
								</div>
            				)}
							</div>

							<div className="mt-3 bg-red-100  text-red-700">
							{humidityWarning.show && (
								<div className="flex">
									<Image src="/assets/images/warning.png" alt="warning" width={40} height={40} />
									<div className="ml-2 mt-2">
										<p>{humidityWarning.message}</p>
									</div>
								</div>
							)}
        					</div>

						</div>

						{/* Column 3: Plant Actions */}
						<div>
							<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">Plant
								actions</h5>
							<div className="flex flex-wrap justify-start mt-4 space-y-2 mb-20">
								{editMode ? (
									<button
										type="button"
										onClick={handleSaveEdit}
										className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">
										Save Changes
									</button>
								) : (
									<button
										type="button"
										onClick={handleEditToggle}
										className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 font-bold">
										Edit Plant
									</button>
								)}
								<button type="button"
								        onClick={handleDelete}
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