"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Slider from "react-slick";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function BannerSlider({ sliders }) {
  const swiperRef = useRef(null);
  const slickRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slickSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
  };

  const handlePrev = () => {
    if (isMobile) {
      slickRef.current?.slickPrev();
    } else {
      swiperRef.current?.swiper?.slidePrev();
    }
  };

  const handleNext = () => {
    if (isMobile) {
      slickRef.current?.slickNext();
    } else {
      swiperRef.current?.swiper?.slideNext();
    }
  };

  if (!isClient) return null;

  return (
    <div className="md:dual-slider-container lg:container overflow-hidden relative">
      {!isMobile && (
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          observer={true}
          observeParents={true}
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView="auto"
          className="dual-swiper"
        >
          {sliders.map((slider, index) => (
            <SwiperSlide key={index} className="dual-slide w-full md:w-auto">
              <Link
                href={slider.button_url}
                className="slide-link block w-full"
              >
                <div className="relative w-full h-[520px]">
                  <Image
                    src={slider.image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isMobile && (
        <Slider {...slickSettings} ref={slickRef}>
          {sliders.map((slider, index) => (
            <div key={index} className="w-full h-[188px] relative">
              <Link
                href={slider.button_url}
                className="block w-full h-full relative"
              >
                <Image
                  src={slider.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                />
              </Link>
            </div>
          ))}
        </Slider>
      )}

      <button
        onClick={handlePrev}
        className="prev nav-button absolute top-1/2 left-4 -translate-y-1/2 z-10"
      >
        <div className="nav-icon relative w-5 h-5 lg:min-w-[40px] lg:min-h-[40px]">
          <Image
            src="/icons/left-arrow.svg"
            alt="Previous"
            fill
            className="object-contain cursor-pointer"
          />
        </div>
      </button>

      <button
        onClick={handleNext}
        className="next nav-button absolute top-1/2 right-4 -translate-y-1/2 z-10"
      >
        <div className="nav-icon relative w-5 h-5 lg:min-w-[40px] lg:min-h-[40px]">
          <Image
            src="/icons/right-arrow.svg"
            alt="Next"
            fill
            className="object-contain cursor-pointer"
          />
        </div>
      </button>
    </div>
  );
}
