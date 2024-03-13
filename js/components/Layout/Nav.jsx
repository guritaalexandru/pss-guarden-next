"use client"

import Link from "next/link";
import Image from "next/legacy/image";

const Nav = () => {
    const token = localStorage.getItem('token');

    const isUserLoggedIn = token !== null && token !== undefined && token !== '';
    return (
        <nav className="bg-gradient-to-r from-green-400 to-green-600">
            <div className={'content-container flex justify-between items-center w-full pt-3 '}>
                <Link href={isUserLoggedIn ? "/dashboard" : "/"}>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/assets/images/Logo.png"
                            alt="logo"
                            width={70}
                            height={70}
                            className="rounded-full" // Using Tailwind CSS utility for rounded images
                        />
                        <p className="text-white font-bold">Guarden</p> {/* Adjusted text color and weight */}
                    </div>
                </Link>
                {/* Browser */}
                <div className='hidden sm:flex'>
                    {isUserLoggedIn ? (
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                            <Link href="/add-plant">
                                <span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Add A Plant
                                </span>
                            </Link>
                            <Link href="/reminders">
                                <span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Your Reminders
                                </span>
                            </Link>
                            <Link href="/sensors">
                                <span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Your Sensors
                                </span>
                            </Link>
                            <button type="button" className="text-green-700 bg-white hover:bg-gray-100 px-4 py-2 rounded transition duration-300 ease-in-out"
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        window.location.reload();
                                    }}
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <Link href="/register">
                                <span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Register
                                </span>
                            </Link>
                            <Link href="/login">
                                <span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
                                    Login
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav;
