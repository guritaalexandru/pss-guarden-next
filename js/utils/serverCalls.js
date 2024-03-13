const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (username, email, password) => {
	const body = {
		username,
		email,
		password,
	};
	const response = await fetch(`${API_URL}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
	return responseData;
}

export const loginUser = async (username, password) => {
	const body = {
		username,
		password,
	};
	const response = await fetch(`${API_URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
	return responseData;
}

export const verifyToken = async (token) => {
	const response = await fetch(`${API_URL}/verify`, {
		method: 'POST',
		headers: {
			'Authorization': token,
		},
	});
	const responseData = await response.json();
	return responseData;

}

export const getPlantsByUser = async () => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/plants`, {
		headers: {
			'Authorization': token,
		},
	});

	const data = await response.json();
	console.log(data);
	return data.map(plant => {
		return {
			plantId: plant._id,
			plantName: plant.name,
			plantImage: plant.image,
			plantType: plant.plantType,
			plantStatuses: {
				plantHumidity: plant.plantStatuses?.humidity,
				plantTemperature: plant.plantStatuses?.temperature,
			},
			plantThresholds: {
				plantHumidityUpperThreshold: plant.plantType?.upperThresholdHumid,
				plantHumidityLowerThreshold: plant.plantType?.lowerThresholdHumid,
				plantTemperatureUpperThreshold: plant.plantType?.upperThresholdTemp,
				plantTemperatureLowerThreshold: plant.plantType?.lowerThresholdTemp,
			},
			reminders: plant.reminders,
			sensor: plant.sensor
		}
	});
}

export const getPlantsTypes = async () => {
	const response = await fetch(`${API_URL}/planttypes`);
	const data = await response.json();
	return data.map(plantType => {
		return {
			plantTypeId: plantType._id,
			plantTypeName: plantType.name,
		}
	});
}

export const postNewPlant = async (plantName, plantTypeId, plantSensorId) => {
	const token = localStorage.getItem('token');

	const body = {
		name: plantName,
		typeId: plantTypeId,
		sensorId: plantSensorId,
	};
	const response = await fetch(`${API_URL}/plants`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
	return responseData;
}

export const postPlantImage = async (plantId, imageFile) => {
	const token = localStorage.getItem('token');

	try {
		// Create a new FormData object
		const formData = new FormData();
		formData.append('image', imageFile);

        const response = await fetch(`${API_URL}/plants/${plantId}/image`, {
            method: 'POST',
	        headers: {
		        'Authorization': token
	        },
            body: formData // Use the FormData object as the body
        });

        if (!response.ok) {
            throw new Error('Failed to upload image');
        }

        const responseData = await response.text(); // Assuming the response is text
        return responseData;
    } catch (error) {
        console.error('Error uploading image:', error.message);
        throw error;
    }
}

export const updatePlant = async (plantId, plantName, plantTypeId, plantSensorId) => {
	const token = localStorage.getItem('token');

	const body = {
		name: plantName,
		typeId: plantTypeId,
		sensorId: plantSensorId,
	};
	const response = await fetch(`${API_URL}/plants/${plantId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
	return responseData;
}

export const deletePlant = async (plantId) => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/plants/${plantId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
	});

	const responseData = await response.json();
	return responseData;
}

export const getRemindersByUser = async () => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/reminders`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
	});
	const data = await response.json();
	return data.map(reminder => {
		return {
			reminderId: reminder._id,
			reminderTime: reminder.time,
			reminderDescription: reminder.description,
			reminderPlantId: reminder.plantId,
		}
	});
}

export const updateReminder = async (reminderId, time, description, plantId) => {
	const token = localStorage.getItem('token');

	const body = {
		time,
		description,
		plantId,
	};
	const response = await fetch(`${API_URL}/reminders/${reminderId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
	return responseData;
}

export const deleteReminder = async (reminderId) => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/reminders/${reminderId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
	});

	const responseData = await response.json();
	return responseData;
}

export const postNewReminder = async (time, description, plantId) => {
	const token = localStorage.getItem('token');

	const body = {
		time,
		description,
		plantId,
	};
	const response = await fetch(`${API_URL}/reminders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
}

export const getSensorsByUser = async () => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/sensors`, {
		headers: {
			'Authorization': token
		}
	});
	const data = await response.json();
	return data.map(sensor => {
		return {
			sensorId: sensor._id,
			sensorName: sensor.sensorName,
		}
	});
}

export const postNewSensor = async (sensorName) => {
	const token = localStorage.getItem('token');

	// TODO: Add userId when BE ready
	const body = {
		sensorName
	};
	const response = await fetch(`${API_URL}/sensors`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
}

export const deleteSensor = async (sensorId) => {
	const token = localStorage.getItem('token');

	const response = await fetch(`${API_URL}/sensors/${sensorId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
	});

	const responseData = await response.json();
	return responseData;
}

export const updateSensor = async (sensorId, sensorName) => {
	const token = localStorage.getItem('token');

	const body = {
		sensorName,
	};
	const response = await fetch(`${API_URL}/sensors/${sensorId}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
	return responseData;
}