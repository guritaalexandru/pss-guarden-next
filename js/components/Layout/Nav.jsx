import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    const isUserLoggedIn = true;
    return (
        <nav className="bg-gradient-to-r from-green-400 to-green-600">
            <div className={'content-container flex justify-between items-center w-full pt-3 '}>
                <Link href="/">
                    <div className="flex items-center gap-2">
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
                            <Link href="/add-reminder">
                            <span className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded transition duration-300 ease-in-out">
                                Set A Reminder
                            </span>
                            </Link>
                            <button type="button" className="text-green-700 bg-white hover:bg-gray-100 px-4 py-2 rounded transition duration-300 ease-in-out">
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Nav;
