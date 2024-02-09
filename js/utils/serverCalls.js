const plantsDataStub = [
	{
		userId: 1,
		plantId: 1,
		plantName: 'First Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'First Plant Type',
		plantStatuses: {
			plantHumidity: 50,
			plantTemperature: 25,
		},
	},
	{
		userId: 1,
		plantId: 2,
		plantName: 'Second Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Second Plant Type',
		plantStatuses: {
			plantHumidity: 60,
			plantTemperature: 30,
		},
	},
	{
		userId: 1,
		plantId: 3,
		plantName: 'Third Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Third Plant Type',
		plantStatuses: {
			plantHumidity: 70,
			plantTemperature: 35,
		},
	},
	{
		userId: 1,
		plantId: 4,
		plantName: 'Fourth Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Fourth Plant Type',
		plantStatuses: {
			plantHumidity: 80,
			plantTemperature: 40,
		},
	},
	{
		userId: 1,
		plantId: 5,
		plantName: 'Fifth Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Fifth Plant Type',
		plantStatuses: {
			plantHumidity: 90,
			plantTemperature: 45,
		},
	},
	{
		userId: 1,
		plantId: 6,
		plantName: 'Sixth Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Sixth Plant Type',
		plantStatuses: {
			plantHumidity: 100,
			plantTemperature: 50,
		},
	},
	{
		userId: 1,
		plantId: 7,
		plantName: 'Seventh Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Seventh Plant Type',
		plantStatuses: {
			plantHumidity: 110,
			plantTemperature: 55,
		},
	},
	{
		userId: 1,
		plantId: 8,
		plantName: 'Eighth Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Eighth Plant Type',
		plantStatuses: {
			plantHumidity: 120,
			plantTemperature: 60,
		},
	},
	{
		userId: 1,
		plantId: 9,
		plantName: 'Ninth Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Ninth Plant Type',
		plantStatuses: {
			plantHumidity: 130,
			plantTemperature: 65,
		},
	},
	{
		userId: 1,
		plantId: 10,
		plantName: 'Tenth Plant',
		plantImage: 'https://via.placeholder.com/150',
		plantType: 'Tenth Plant Type',
		plantStatuses: {
			plantHumidity: 140,
			plantTemperature: 70,
		},
	},
];
export const getPlantsByUser = async (userId) => {
	return plantsDataStub.filter(plant => plant.userId === userId);
}