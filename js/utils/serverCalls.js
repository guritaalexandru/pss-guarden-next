const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getPlantsByUser = async (userId) => {
	const response = await fetch(`${API_URL}/users/${userId}/plants`);
	const data = await response.json();
	return data.map(plant => {
		return {
			plantId: plant._id,
			plantName: plant.name,
			plantImage: plant.image,
			plantType: plant.plantType?.name,
			plantStatuses: {
				plantHumidity: plant.plantStatuses?.humidity,
				plantTemperature: plant.plantStatuses?.temperature,
			},
			plantThresholds: {
				plantHumidityThreshold: plant.plantType?.thresholdHumid,
				plantTemperatureThreshold: plant.plantType?.thresholdTemp,
			}
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

export const postNewPlant = async (userId, plantName, plantImageUrl, plantTypeId) => {
	const body = {
		name: plantName,
		image: plantImageUrl,
		typeId: plantTypeId,
	};
	const response = await fetch(`${API_URL}/users/${userId}/plants`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
}

export const postNewReminder = async (userId, time, description, plantId) => {
	const body = {
		time,
		description,
		plantId,
	};
	const response = await fetch(`${API_URL}/users/${userId}/reminders`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	const responseData = await response.json();
}