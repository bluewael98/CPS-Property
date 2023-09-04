"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";

export default function Hero() {
  const blockData: any = [
    {
      image:
        "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "CPS & Property Co.",
      body: "Transforming Spaces, Renewing Beauty.",
      href: "/",
      buttonLabel: "Get in touch!",
      icon: "https://res.cloudinary.com/ds6szmrgb/image/upload/v1689657862/next_svgrepo_com_e4771dbe6b.svg",
    },
    {
      image:
        "https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "CPS & Property Co.",
      body: "Transforming Spaces, Renewing Beauty.",
      href: "/",
      buttonLabel: "Get in touch!",
      icon: "https://res.cloudinary.com/ds6szmrgb/image/upload/v1689657862/next_svgrepo_com_e4771dbe6b.svg",
    },
  ];

  return (
    <div
      id="HeroSection"
      className="items-center xxs:mx-auto xxxs:mx-0 min-w-[28] max-w-[1400px] mx-auto sm:px-10 xs:px-0 sm:mb-[100px] xxs:mb-[50px] mb-[50px] min-[770px]:mt-[60px]"
    >
      {/* Desktop Hero section */}
      <Splide
        hasTrack={false}
        options={{
          width: 1200,
          height: 750,
          gap: "2rem",
          perPage: 1,
          autoplay: true,
          arrows: false,
          direction: "ttb",
          wheel: true,
          releaseWheel: true,
        }}
        className="min-h-[800px] mx-auto px-6 py-8 min-[50px]:hidden xxxs:hidden xxs:hidden xs:hidden min-[530px]:block sm:block bg-navy rounded-[70px] "
      >
        <SplideTrack>
          {blockData.map((blockData: any, index: any) => (
            <SplideSlide
              key={index}
              className="flex justify-center items-center py-5 px-5"
            >
              <div
                className="rounded-[70px] w-full h-full "
                style={{
                  backgroundImage: `url(${blockData.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col text-left pr-[50px] py-[200px] ">
                  <div className=" bg-black bg-opacity-50 sm:max-w-[600px] pl-[50px] py-[50px] rounded-r-full flex flex-col text-left ">
                    <h1 className="text-white flex  font-bold max-w-[450px] text-[65px]">
                      {blockData.title}
                    </h1>
                    <h1 className="text-white flex  font-bold max-w-[450px] text-[45px]">
                      Cleaning services.
                    </h1>
                    <div className="max-w-[450px] max-h-[66px] italic">
                      <p>{blockData.body}</p>
                    </div>
                    <div className="mt-4">
                      <Link href={`/${blockData.href}`}>
                        <button
                          className={`font-Jost flex justify-center items-center rounded-[18px] bg-brown hover:bg-opacity-60 transition duration-300 w-[220px] 
                      py-[15px] px-[29px] text-[18px]`}
                        >
                          {blockData.buttonLabel}
                          <Image
                            className="ml-[10px]"
                            src={blockData.icon}
                            width={19}
                            height={17}
                            alt="Button Icon"
                          />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>

      {/* Mobile hero section */}
      {/* <Splide
        options={{
          rewind: true,
          width: 1200,
          height: 800,
          gap: "2rem",
          perPage: 1,
          autoplay: true,
          type: "loop",
          arrows: false,
        }}
        className="min-[50px]:block xxxs:block xxs:block xs:block min-[530px]:hidden sm:hidden h-full w-full hidden"
      >
        {blockData.heroImgMobile.data.map((slide: any, index: any) => (
          <SplideSlide
            key={index}
            className="flex justify-center items-center py-10"
          >
            <div
              className="w-full"
              style={{
                backgroundImage: `url(${slide.attributes.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col text-left xxs:px-12 xxxs:px-6 py-[150px] gap-[30px] z-[5]">
                <div>
                  <h1>{blockData.title}</h1>
                </div>
                <div className="max-w-[250px]">
                  <p className="text-[18px]">{blockData.body}</p>
                </div>
                <div>
                  <Link href={`/${blockData.button.href}`}>
                    <button
                      className={`font-Jost flex justify-center items-center rounded-[18px] bg-brown md:w-[220px] xs:w-[75xpx]
                        py-[18px] px-[39px] xxs:text-[18px] xxxs:text-[16px]`}
                    >
                      {blockData.button.buttonLabel}
                      <Image
                        className="ml-[10px]"
                        src={blockData.button.icon.data.attributes.url}
                        width={19}
                        height={17}
                        alt="Button Icon"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide> */}
    </div>
  );
}
