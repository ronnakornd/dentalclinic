import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";
import { Rating } from "flowbite-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function GoogleReview() {
  const [reviews, setReviews] = useState([]);
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    // Initialize the Google Maps API loader
    const loader = new Loader({
      apiKey: "AIzaSyC0-85cekpznu-HwZT3DGlT8NOqSB_Et6I", // Replace with your Google API Key
      version: "weekly",
      libraries: ["places"], // Load the Places library
    });

    loader.load().then(() => {
      // Specify the DOM element where the map will render
      const map = new window.google.maps.Map(document.createElement("div"));

      // Create the PlacesService
      const service = new window.google.maps.places.PlacesService(map);

      // Set your place ID (replace with the actual Place ID)
      const placeId = "ChIJfwJKkqeLIjERL55x5ql3z64";

      // Fetch place details
      service.getDetails(
        {
          placeId: placeId,
          fields: ["name", "formatted_address", "rating", "reviews"],
          language: "th",
          // Specify the fields you need
        },
        (place, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place
          ) {
            setPlaceDetails(place);
          } else {
            console.error("Error fetching place details:", status);
          }
        }
      );
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl self-center m-5">รีวิว</h1>
      {placeDetails ? (
        <div className="m-5 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                />
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                />
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                />
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                />
              </svg>
            </div>
            <Rating size="lg">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
          </div>
          <div className="mt-5 w-screen h-auto md:h-96  md:p-0">
            <Carousel className="p-5">
              <CarouselContent>
                {placeDetails.reviews.map((review, index) => (
                  <CarouselItem className="basis-2/3 md:basis-1/3" key={index}>
                    <div className="card card-body h-96 md:h-72 bg-white hover:bg-slate-300">
                      <p className="flex justify-start items-center gap-2" style={{flexGrow: "0"}}>
                        <img src={review.profile_photo_url} width={50} alt="" />
                        <strong>{review.author_name}</strong>
                      </p>
                      <p style={{flexGrow: "0"}}>
                        <Rating size="sm">
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                          <Rating.Star />
                        </Rating>
                      </p>
                      <p className="card" style={{flexGrow: "0"}}>{review.text}</p>
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem className="basis-2/3 md:basis-1/3">
                  <a
                    className="card h-96 md:h-72 flex justify-center items-center bg-white hover:bg-slate-200"
                    href={`https://www.google.com/maps/place/The+cloud+dental+studio+-+จัดฟัน+invisalign+วีเนียร์+รากเทียม+ทำฟัน+ขอนแก่น/@16.422407,102.8320103,17z/data=!4m8!3m7!1s0x31228ba7924a027f:0xaecf77a9e6719e2f!8m2!3d16.422407!4d102.8345852!9m1!1b1!16s%2Fg%2F11s43g7hw7?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 6s6 4.419 6 6s-6 6-6 6"
                        color="currentColor"
                      />
                    </svg>
                  </a>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      ) : (
        <p>Loading place details...</p>
      )}
    </div>
  );
}

export default GoogleReview;
