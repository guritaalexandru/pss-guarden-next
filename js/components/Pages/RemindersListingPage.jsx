import React from "react";
import RemindersListingSection from "@/js/components/Sections/RemindersListingSection";
import Link from "next/link";

export default function RemindersListingPage(props){
	return (
		<div id={'RemindersListingPage'}>
			<div className={'content-container'}>
				<Link href="/add-reminder">
					<span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
						Set a Reminder
					</span>
				</Link>
			</div>
			<RemindersListingSection/>
		</div>
	)
}