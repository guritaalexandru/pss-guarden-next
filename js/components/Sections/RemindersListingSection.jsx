"use client"

import React, { useEffect, useState } from "react";
import ReminderCard from "@/js/components/Parts/ReminderCard";
import {getPlantsByUser, getRemindersByUser} from "@/js/utils/serverCalls";

export default function RemindersListingSection(props) {
	const [remindersArray, setRemindersArray] = useState([]);
	const [userPlants, setUserPlants] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchReminders = async () => {
			const reminders = await getRemindersByUser();
			setRemindersArray(reminders);
			setLoading(false);
		};

		const fetchUserPlants = async () => {
			const plants = await getPlantsByUser();
			setUserPlants(plants);
		}

		fetchReminders();
		fetchUserPlants();
	}, []);

	if (remindersArray.length === 0 && loading) {
		return (
			<div className="loaderContainer">
				<div className="lds-ring">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	} else if (remindersArray.length === 0 && !loading) {
		return (
			<div id={'RemindersListingSection'}>
				<div className={'content-container'}>
					<div>
						<h1 className="text-2xl font-semibold">Your Reminders</h1>
						<p>You don't have any reminders yet. Add a reminder to get started.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id={'RemindersListingSection'}>
			<div className={'content-container'}>
				<div>
					<div className="flex flex-wrap">
						{remindersArray.map((reminder, index) => {
							return (
								<div className="w-full mt-4" key={index}>
									<ReminderCard reminder={reminder} userPlants={userPlants}/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
