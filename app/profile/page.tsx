"use client"

import { useState } from "react";
import StorySidebar from "./story-profile";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import Header from "../components/layout/_header";
import AuthorSidebar from "./author-profile";

export default function Dashboard() {
    const [storySidebarOpen, setStorySidebarOpen] = useState(false);
    const [authorSidebarOpen, setAuthorSidebarOpen] = useState(false);
    return (
        <div>
            <Header isLoggedIn={true} />

            <div className="pt-[70px] pb-[50px] px-[50px] min-h-screen">
                <p className="font-2xl py-2">24 Stories written by Jhon</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                    <div onClick={() => setStorySidebarOpen((storySidebarOpen) => !storySidebarOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={400} height={200} className="dashboard-slide-image" />
                    </div>
                </div>
            </div>

            <StorySidebar isOpen={storySidebarOpen} setIsOpen={setStorySidebarOpen} />
            <AuthorSidebar isOpen={authorSidebarOpen} setIsOpen={setAuthorSidebarOpen} />

            {/* <div className='fixed bottom-0 w-full'> */}
                <button className='my-8 ml-auto px-2 py-4 bg-red-500 text-white text-md font-bold tracking-wide focus:outline-none about-author-btn' onClick={() => setAuthorSidebarOpen((authorSidebarOpen) => !authorSidebarOpen)}>About the Author</button>
            {/* </div> */}

            {/* <div className="pt-[100px] min-h-screen fixed z-10">
            </div> */}
        </div>
    )
}