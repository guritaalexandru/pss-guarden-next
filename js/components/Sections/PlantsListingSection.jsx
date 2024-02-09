"use client"

import React from "react";
import PlantCard from "@/js/components/Parts/PlantCard";
import {getPlantsByUser} from "@/js/utils/serverCalls";

export default function PlantsListingSection(props){
	const [plantsArray, setPlantsArray] = React.useState([])
	React.useEffect(() => {
		getPlantsByUser(1).then((plants) => {
			setPlantsArray(plants)
		})
	}, [])

	return (
		<div id={'PlantsListingSection'}>
			<div className={'content-container'}>
				<div>
					<h1 className="text-2xl font-semibold">Your Plants</h1>
					<div className="flex flex-wrap">
						{
							plantsArray.map((plant, index) => {
								return (
									<div className={'w-full mt-4'}>
										<PlantCard plant = {plant} key={index}/>
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