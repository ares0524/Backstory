"use client"

import { useState } from "react";
import Header from "../components/layout/_header";
import Image from "next/image";
import Drawer from "./drawer";

export default function Account() {
    const [isOpen, setIsOpen] = useState(false);
    const [openTab, setOpenTab] = useState(1);

    return (
        <>
            <Header isLoggedIn={true} />
            
            <div className="font-sans antialiased text-gray-100 leading-normal tracking-wider bg-cover">

                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

                    {/* Main Col */}
                    <div id="profile"
                        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-gray-900 opacity-75 mx-6 lg:mx-0">


                        <div className="p-4 md:p-12 text-center lg:text-left">
                            {/* Image for mobile view */}
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                style={{backgroundImage: "url('/assets/images/account/user.jpg')"}}></div>

                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Jane Doe</h1>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                            
                            <div className="flex flex-wrap">
                                <div className="w-full">
                                <ul
                                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                    role="tablist"
                                >
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-blueGray-600"
                                            : "text-blueGray-600 bg-gray-700")
                                        }
                                        onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Email
                                    </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-blueGray-600"
                                            : "text-blueGray-600 bg-gray-700")
                                        }
                                        onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Password
                                    </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                    <a
                                        className={
                                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-blueGray-600"
                                            : "text-blueGray-600 bg-gray-700")
                                        }
                                        onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                        }}
                                        data-toggle="tab"
                                        href="#link3"
                                        role="tablist"
                                    >
                                        Tokens
                                    </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                                    <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">
                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div className="pt-2">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                                <div className="flex">
                                                    <div className="w-2/3 flex">
                                                        <input type="email" id="email" defaultValue="jane.doe@gmail.com" className="px-2.5 bg-gray-700 rounded-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 w-full block" />
                                                    </div>
                                                    <div className="w-1/3 flex justify-end">
                                                        <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div id="changePasswordDiv">
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white mt-3">New Password</label>
                                                <div className="flex">
                                                    <div className="w-2/3 flex">
                                                        <input type="password" id="password" className="px-2.5 py-2 bg-gray-700 rounded-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 w-full block" />
                                                    </div>
                                                </div>
                                                
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white mt-3">Confirm Password</label>
                                                <div className="flex">
                                                    <div className="w-2/3 flex">
                                                        <input type="password" id="password" className="px-2.5 bg-gray-700 rounded-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 w-full block" />
                                                    </div>
                                                    <div className="w-1/3 flex justify-end">
                                                        <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                            <div className="flex">
                                                <div className="w-2/3 flex">
                                                    <Image width={30} height={35} src="/assets/images/header/coin.png" alt="Coin" style={{width:'30px', height:'35px'}} />
                                                    <p className="text-2xl font-bold pl-2">Total tokens: 1000</p>
                                                </div>
                                                <div className="w-1/3 flex justify-end">
                                                    <button type="button" className="text-white font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800" onClick={() => setIsOpen((isOpen) => !isOpen)}>Buy More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Img Col */}
                    <div className="w-full lg:w-2/5">
                        {/* Big profile image for side bar (desktop)  */}
                        <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} alt="user" src="/assets/images/account/user.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                        {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A  */}

                    </div>

                </div>

            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}