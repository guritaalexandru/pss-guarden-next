"use client"

import React, {useEffect, useState} from "react";
import PlantCard from "@/js/components/Parts/PlantCard";
import {getPlantsByUser,} from "@/js/utils/serverCalls";

export default function PlantsListingSection(props){
	const [plantsArray, setPlantsArray] = useState([])

	useEffect(() => {
		const fetchPlants = async () => {
			const plants = await getPlantsByUser(1);
			setPlantsArray(plants)
		}
		fetchPlants();
	}, []);

	if (plantsArray.length === 0) {
		return (
			<p>
				Loading your plants...
			</p>
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
										<PlantCard plant = {plant}/>
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