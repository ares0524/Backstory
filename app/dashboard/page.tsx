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
            
            <div className="pt-[100px] pb-[50px] px-[50px] min-h-screen">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={6}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={6}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="mt-10"
                >
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={6}
                    loop={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="mt-10"
                >
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/1.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/2.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/3.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/4.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/5.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/6.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/7.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/8.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/9.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                    <SwiperSlide onClick={() => setIsOpen((isOpen) => !isOpen)}>
                        <Image src='/assets/images/dashboard/10.png' alt="Slide Image" width={200} height={400} className="dashboard-slide-image" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* <div className="pt-[100px] min-h-screen fixed z-10">
            </div> */}
        </div>
    )
}
