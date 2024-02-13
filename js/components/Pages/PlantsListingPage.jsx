import React from "react";
import PlantsListingPageBannerSection from "@/js/components/Sections/PlantsListingPageBannerSection";
import PlantsListingSection from "@/js/components/Sections/PlantsListingSection";

export default function PlantsListingPage(props){
	return (
		<div id={'PlantsListingPage'}>
			<PlantsListingPageBannerSection/>
			<PlantsListingSection/>
		</div>
	)
}