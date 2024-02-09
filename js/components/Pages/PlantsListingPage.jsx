import React from "react";
import PlantsListingPageBannerSection from "@/js/components/Sections/PlantsListingPageBannerSection";
import PlantsListingSection from "@/js/components/Sections/PlantsListingSection";

export default function PlantsListingPage(props){
	return (
		<div id={'PlantsListingPage'}>
			<div className={'content-container'}>
				<h1 className={'text-5xl text-center mb-10 mt-10'}>
					Dashboard
				</h1>
			</div>
			<PlantsListingPageBannerSection/>
			<PlantsListingSection/>
		</div>
	)
}