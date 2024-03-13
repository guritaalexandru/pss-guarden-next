import React from "react";
import Link from "next/link";
import SensorsListingSection from "@/js/components/Sections/SensorsListingSection";

export default function SensorsListingPage(props){
	return (
		<div id={'SensorsListingPage'}>
			<div className={'content-container'}>
				<Link href="/add-sensor">
					<span
						className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
						Set a Sensor
					</span>
				</Link>
			</div>
			<SensorsListingSection/>
		</div>
	)
}