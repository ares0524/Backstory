"use client"

import Image from "next/image"
import Cookies from "js-cookie"

type HeaderProps = {
    isLoggedIn: boolean
}

export default function Header({isLoggedIn}: HeaderProps) {
    const LogOut = () => {
        Cookies.remove('token');
        window.location.href = '/login'
    }

  return (
    <>
      <header>
        <nav className="z-10 border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 w-full fixed top-0">

            <div className="flex flex-wrap justify-between items-center mx-auto">
                <a href="#" className="flex items-center">
                    <Image src="/assets/images/logo.png" width={60} height={35} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Backstory</span>
                </a>

                <div className={"flex items-center lg:order-2 " + (isLoggedIn?"hidden":"block")}>
                    <a href="/login" className="text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800">Log in</a>
                    <a href="/register" className="text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:ring-gray-800">Register</a>
                </div>

                <div className={"flex items-center lg:order-2 " + (isLoggedIn?"block":"hidden")}>
                    <form className="pr-4">   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 py-2 pl-10 text-sm border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" placeholder="Search stories..." required />
                            {/* <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                        </div>
                    </form>
                    <a href="/library"><Image src="/assets/images/header/library.png" alt="Library" width={25} height={25} className="mr-4 cursor-pointer" /></a>
                    <div className="flex pr-4">
                        <Image src="/assets/images/header/coin.png" alt="Coin" width={25} height={28} />
                        <p className="text-xl items-center font-bold ml-2 text-white">1k</p>
                    </div>
                    <div className="group inline-block relative">
                        <a href="/account"><Image src="/assets/images/account/user.jpg" className="rounded-full border-2" alt="User avatar" height={40} width={40} style={{objectFit:'cover', height:'40px'}} /></a>

                        <ul className="absolute left-[-50px] hidden text-gray-700 pt-1 group-hover:block min-w-[83px]">
                            <li>
                                <a
                                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="/account"
                                >Account</a>
                            </li>
                            <li onClick={() => LogOut()}>
                                <a
                                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                    href="#"
                                >Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}
