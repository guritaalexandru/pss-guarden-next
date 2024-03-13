import React, { useState } from "react";
import { deleteReminder, updateReminder } from "@/js/utils/serverCalls";

const ReminderCard = ({ reminder, userPlants }) => {
	const [editing, setEditing] = useState(false);
	const [editedDescription, setEditedDescription] = useState(reminder.reminderDescription);
	const [editedTime, setEditedTime] = useState(new Date(reminder.reminderTime).toISOString().slice(0, 16));
	const [editedPlantId, setEditedPlantId] = useState(reminder.reminderPlantId);
	const [isDeleted, setIsDeleted] = useState(false);

	const attachedPlant = userPlants.find((plant) => plant.plantId === editedPlantId);

	const handleEdit = () => {
		setEditing(true);
	};

	const handleSave = async () => {
		const updateResponse = await updateReminder(reminder.reminderId, editedTime, editedDescription, editedPlantId);
		setEditing(false);
	};

	const handleCancel = () => {
		// Reset the edited description, time, and cancel editing
		setEditedDescription(reminder.reminderDescription);
		setEditedTime(new Date(reminder.reminderTime).toISOString().slice(0, 16));
		setEditedPlantId(reminder.reminderPlantId);
		setEditing(false);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "description") {
			setEditedDescription(value);
		} else if (name === "time") {
			setEditedTime(value);
		} else if (name === "plant") {
			setEditedPlantId(parseInt(value));
		}
	};

	const handleDelete = async () => {
		const deleteResponse = await deleteReminder(reminder.reminderId);
		console.log(deleteResponse);
		setIsDeleted(true);
	};

	if (isDeleted) {
		return null;
	}

	return (
		<div className="bg-white rounded-lg p-4 shadow-md">
			{editing ? (
				<div>
          <textarea
	          name="description"
	          value={editedDescription}
	          onChange={handleChange}
	          className="w-full border rounded-lg p-2 mb-2"
	          rows="3"
          />
					<input
						type="datetime-local"
						name="time"
						value={editedTime}
						onChange={handleChange}
						className="border rounded-lg p-2 mb-2"
					/>
					<select
						name="plant"
						value={editedPlantId}
						onChange={handleChange}
						className="border rounded-lg p-2 mb-2"
					>
						{userPlants.map((plant) => (
							<option key={plant.plantId} value={plant.plantId}>{plant.plantName}</option>
						))}
					</select>
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
					<p className="text-lg font-semibold mb-2">{attachedPlant && attachedPlant.plantName}</p>
					<p className="text-lg font-semibold mb-2">{new Date(editedTime).toLocaleString()}</p>
					<p className="mb-2">{editedDescription}</p>
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

export default ReminderCard;
