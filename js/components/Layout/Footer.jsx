import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Footer(props){
	return (
		<footer className="py-6 px-4">
			<div className="mx-auto flex flex-center flex-col md:flex-col justify-between items-center">
				{/*  */}
				<div className="flex flex-col md:flex-col items-center flex-center mb-4">
					<div className="flex-center w-full font-bold mb-4 text-2xl">
									Guarden
					</div>
					<div className="flex flex-wrap items-center justify-center gap-5 text-sm mb-2
					 md:mb-0">
					<Link href="/about">About</Link>
					<Link href="/faq">FAQ</Link>
					<Link href="/contact">Contact us</Link>
					</div>
				</div>
				{/*  */}
				<div className="flex items-center gap-4 flex-center">

					<Link href="https://instagram.com">
					<Image 
					src="/assets/icons/instagram.svg" 
					alt="Instagram" 
					width={24} 
					height={24} />
					</Link>

					<Link href="https://twitter.com">
					<Image 
					src="/assets/icons/twitter.svg" 
					alt="Twitter" 
					width={24} 
					height={24} />
					</Link>
					

					<Link href="https://youtube.com">
					<Image 
					src="/assets/icons/youtube.svg" 
					alt="Youtube" 
					width={24} 
					height={24} />
					</Link>

					<Link href="https://facebook.com">
					<Image 
					src="/assets/icons/facebook.svg" 
					alt="Facebook" 
					width={24} 
					height={24} />
					</Link>
				</div>
			</div>
			
			<div className="text-center text-xs mt-4">
       			 © Guarden. All rights reserved.
        		<nav className="mt-2 ">
          			<Link href="/privacy">Privacy Policy</Link> | 
          			<Link href="/terms">Terms & Conditions</Link>
        		</nav>
      		</div>
		</footer>	
	)
}