import React, { useRef, useEffect } from "react";
import "./styles/Home.css";
import Hero from "../components/Hero";
import Promotion from "../components/Promotion";
import Service from "../components/Service";
import GoogleReview from "../components/GoogleReview";
import Map from "../components/Map";
import Team from "../components/Team";
import Bulletin from "@/components/Bulletin";

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Promotion />
      <Service />
      <Team />
      <GoogleReview />
      <Bulletin />
      <Map />
    </div>
  );
}

export default Home;
