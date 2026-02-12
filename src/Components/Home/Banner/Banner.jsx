"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { bannerItems } from "@/data/banner/banner";
import BannerItem from "./BannerItem";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {bannerItems.map((item, i) => (
          <SwiperSlide key={i}>
            <BannerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
