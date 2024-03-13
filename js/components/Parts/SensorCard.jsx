import React, { useState } from "react";
import { deleteSensor, updateSensor } from "@/js/utils/serverCalls";

const SensorCard = ({ sensor }) => {
	const [editing, setEditing] = useState(false);
	const [editedName, setEditedName] = useState(sensor.sensorName);
	const [isDeleted, setIsDeleted] = useState(false);

	const handleEdit = () => {
		setEditing(true);
	};

	const handleSave = async () => {
		const updateResponse = await updateSensor(sensor.sensorId, editedName);
		setEditing(false);
		// Handle update response as needed
	};

	const handleCancel = () => {
		// Reset the edited name and cancel editing
		setEditedName(sensor.sensorName);
		setEditing(false);
	};

	const handleChange = (e) => {
		setEditedName(e.target.value);
	};

	const handleDelete = async () => {
		const deleteResponse = await deleteSensor(sensor.sensorId);
		console.log(deleteResponse);
		setIsDeleted(true);
		// Handle delete response as needed
	};

	if (isDeleted) {
		return null;
	}

	return (
		<div className="bg-white rounded-lg p-4 shadow-md">
			{editing ? (
				<div>
					<input
						type="text"
						value={editedName}
						onChange={handleChange}
						className="w-full border rounded-lg p-2 mb-2"
					/>
					<div className="flex justify-end">
						<button onClick={handleCancel} className="mr-2 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg">
							Cancel
						</button>
						<button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg">
							Save
						</button>
					</div>
				</div>
			) : (
				<div>
					<p className="text-lg font-semibold mb-2">{editedName}</p>
					<div className="flex justify-end">
						<button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg">
							Delete
						</button>
						<button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg">
							Edit
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SensorCard;
