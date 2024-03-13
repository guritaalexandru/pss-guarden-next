"use client"

import React, {useEffect, useState} from "react";
import PlantCard from "@/js/components/Parts/PlantCard";
import {getPlantsByUser, getPlantsTypes, getSensorsByUser,} from "@/js/utils/serverCalls";

export default function PlantsListingSection(props){
	const [plantsArray, setPlantsArray] = useState([]);
	const [plantTypes, setPlantTypes] = useState([]);
	const [userSensors, setUserSensors] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchPlants = getPlantsByUser();
		const fetchPlantTypes = getPlantsTypes();
		const fetchSensors = getSensorsByUser();

		Promise.all([fetchPlants, fetchPlantTypes, fetchSensors])
			.then(([plants, plantTypes, sensors]) => {
				const modifiedPlantTypes = plantTypes.map(plantType => {
					return {
						_id: plantType.plantTypeId,
						name: plantType.plantTypeName,
					}
				});
				const modifiedSensors = sensors.map(sensor => {
					return {
						_id: sensor.sensorId,
						sensorName: sensor.sensorName,
					}
				});

				setPlantsArray(plants);
				setPlantTypes(modifiedPlantTypes);
				setUserSensors(modifiedSensors);
				setLoading(false);
			})
			.catch(error => {
				// Handle error if any fetch fails
				console.error("Error fetching data:", error);
				setLoading(false); // Set loading to false even if there's an error
			});
	}, []);

	if (plantsArray.length === 0 && loading) {
		return (
			<div className="loaderContainer">
				<div className="lds-ring">
					<div>
					</div>
					<div>
					</div>
					<div>
					</div>
					<div>
					</div>
				</div>
			</div>
		)
	}
	else if (plantsArray.length === 0 && !loading) {
		return (
			<div id={'PlantsListingSection'}>
				<div className={'content-container'}>
					<div>
						<h1 className="text-2xl font-semibold">Your Plants</h1>
						<p>
							You don't have any plants yet. Add a plant to get started.
						</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div id={'PlantsListingSection'}>
			<div className={'content-container'}>
				<div>
					<h1 className="text-2xl font-semibold">Your Plants</h1>
					<div className="flex flex-wrap">
						{
							plantsArray.map((plant, index) => {
								return (
									<div className={'w-full mt-4'} key={index}>
										<PlantCard plant = {plant} plantTypes={plantTypes} userSensors={userSensors}/>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}