import React from "react";
import SimpleParallax from "simple-parallax-js";
import { Button } from "flowbite-react";
import ScrollAnimation from "react-animate-on-scroll";
function Hero() {
  return (
    <div className="">
      <div className="hidden md:block">
      <SimpleParallax scale="1.7">
        <img
          src="hero.jpg"
          style={{
            height: "75vh",
            filter: "brightness(60%) blur(5px)",
          }}
          className="w-screen  object-cover"
          alt="image"
        />
      </SimpleParallax>
      </div>
      <div className="md:hidden">
      <SimpleParallax scale="1.7">
        <img
          src="hero.jpg"
          style={{
            height: "80vh",
            filter: "brightness(60%) blur(5px)",
          }}
          className="w-screen  object-cover"
          alt="image"
        />
      </SimpleParallax>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <ScrollAnimation animateIn="fadeIn" delay={1000} initiallyVisible="false">
        <h1 className="text-5xl md:text-6xl text-stone-300 font-bold">
          The Cloud
        </h1>
        <h1 className="text-xl md:text-2xl mb-2 text-stone-400 font-bold">
           Dental Studio
        </h1>
        </ScrollAnimation>
        <div className="md:hidden h-10"></div>
        <p className="text-sm md:text-xl text-stone-200 mb-5">
          คลินิกทันตกรรม ที่คุณวางใจ ด้วยทีมทันตแพทย์ผู้เชี่ยวชาญ
          <br />
          จัดฟัน Invisalign วีเนียร์ รากเทียม ทำฟัน ขอนแก่น
        </p>
        <div href="/login" className="flex justify-center mb-5">
          <Button gradientDuoTone="purpleToBlue" className="h-14 flex justify-center items-center  w-2/4 md:w-1/4">
          <p className="text-2xl">นัดหมาย</p>
          </Button>
        </div>
        <div className="w-screen">
          <div>
            <h1 className="flex  justify-center items-center text-stone-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current mb-2 mr-2"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                  />
                </g>
              </svg>
              <a className="text-lg md:text-2xl link-hover" href="tel:+66869328914">โทร 086-932-8914</a>
            </h1>
          </div>
          <div>
            <div className="flex justify-center items-center text-stone-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current mr-2 mb-1"
              >
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"
                  />
                </g>
              </svg>
              <h1 className="text-lg md:text-2xl  text-center">
                เปิดทำการ จ-อา 10:00-20:00 น.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
