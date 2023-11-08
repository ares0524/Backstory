"use client"

import Header from "../components/layout/_header"
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import classNames from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import Drawer from "./drawer";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Header isLoggedIn={true} />

            <div>
                <nav className="z-10 border-gray-200 px-4 lg:px-10 py-2.5 bg-gray-800 w-full fixed flex">
                    <div className="flex row w-1/2">
                        <div className="flex">
                            <Image src='/assets/images/profile/user.png' width={60} height={60} alt="User Avatar" className="rounded-full" />
                        </div>
                        <div className="flex items-center pl-3">
                            <p className="text-3xl font-bold">Jhon Doe</p>
                        </div>
                    </div>
                    <div className="flex w-1/2 justify-end items-center">
                        <button type="button" className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 h-[40px]">Follow</button>
                    </div>
                </nav>
            </div>
            
            <div className="pt-[100px] pb-[50px] px-[50px] min-h-screen">
                <p className="font-2xl py-2">24 Stories written by Jhon</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                </div>
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* <div className="pt-[100px] min-h-screen fixed z-10">
            </div> */}
        </div>
    )
}
