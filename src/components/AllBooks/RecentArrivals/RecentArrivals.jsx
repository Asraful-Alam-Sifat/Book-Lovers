"use client";

import BooksData from "@/assets/JSON/data.json";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef } from "react";

const RecentArrivals = () => {
  return (
    <div className="container mx-auto my-30">
      <h1 className="font-bold text-5xl uppercase my-5 text-center">
        recent arrivals
      </h1>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper py-10"
      >
        {BooksData.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentArrivals;
