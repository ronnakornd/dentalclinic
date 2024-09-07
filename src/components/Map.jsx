import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyC0-85cekpznu-HwZT3DGlT8NOqSB_Et6I", // Replace with your Google API Key
      version: "weekly",
      libraries: ["places"], // Load Places library
    });

    loader.load().then(() => {
      // Create a new map instance
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -33.8688, lng: 151.2195 }, // Default center, will update after Place ID fetch
        zoom: 15,
      });

      // Create PlacesService
      const service = new window.google.maps.places.PlacesService(map);

      // Fetch place details using the given Place ID
      const placeId = "ChIJfwJKkqeLIjERL55x5ql3z64"; // Replace with your Place ID

      service.getDetails({ placeId: placeId }, (place, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          place
        ) {
          // Update map center to the place's location
          map.setCenter(place.geometry.location);

          // Create a marker at the place's location
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map: map,
          });

          // Optionally, add an info window with the place's details
          const infowindow = new window.google.maps.InfoWindow({
            content: `<h3>${place.name}</h3><p>${place.formatted_address}</p>`,
          });

          // Show info window when marker is clicked
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
        } else {
          console.error("Error fetching place details:", status);
        }
      });
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl flex items-center justify-center gap-2 m-5">
        <p>แผนที่</p>
        <a href="https://www.google.com/maps/dir//The+cloud+dental+studio+-+จัดฟัน+invisalign+วีเนียร์+รากเทียม+ทำฟัน+ขอนแก่น,+Glang+Muang+Rd,+Tambon+Nai+Mueang,+Mueang+Khon+Kaen+District,+Khon+Kaen+40000/@16.4223909,102.7521834,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x31228ba7924a027f:0xaecf77a9e6719e2f!2m2!1d102.8345852!2d16.422407!3e0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D">
        <svg className="mb-2" xmlns="http://www.w3.org/2000/svg"  width="0.7em" height="1em" viewBox="0 0 256 367"><path fill="#34A853" d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"></path><path fill="#FBBC04" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"></path><path fill="#4285F4" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"></path><path fill="#1A73E8" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"></path><path fill="#EA4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"></path></svg>
        </a>
      </h2>
      <div
        ref={mapRef}
        style={{
          height: "500px",
          width: "100%",
        }}
        onClick={() => {
          window.open(
            "https://www.google.com/maps/dir//The+cloud+dental+studio+-+จัดฟัน+invisalign+วีเนียร์+รากเทียม+ทำฟัน+ขอนแก่น,+Glang+Muang+Rd,+Tambon+Nai+Mueang,+Mueang+Khon+Kaen+District,+Khon+Kaen+40000/@16.4223909,102.7521834,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x31228ba7924a027f:0xaecf77a9e6719e2f!2m2!1d102.8345852!2d16.422407!3e0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
          );
        }   }
      />
    </div>
  );
};

export default Map;
