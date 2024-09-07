import React, { useState, useEffect } from "react";
import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Promotion() {

  const [propmotions, setPropmotions] = useState([]);

  const fetchPromotions = async () => {
    const q = query(collection(db, "propmotions"), orderBy("createdAt", "asc"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return;
    }
    const promotionsData = querySnapshot.docs.map((doc) => ({
      ...doc.data()
    }));
    setPropmotions(promotionsData);
  };

  // Convert the timestamp to countdown in days, hours, minutes, seconds
  const calculateCountdown = (timestamp) => {
    let expireDate = new Date(timestamp).getTime();
    const now = new Date().getTime();
    const distance = expireDate - now;

    if (distance <= 0) return (<p className="text-red-500">หมดเขตแล้ว</p>); // If time has passed, show "Expired"
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    return `หมดเขตใน ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`;
  };
  
  useEffect(() => {
    fetchPromotions();
  }, []);

  // To handle the countdown for every promotion
  useEffect(() => {
    const interval = setInterval(() => {
      setPropmotions((prevPromotions) => {
        return prevPromotions.map((promotion) => {
          return {
            ...promotion,
            countdown: calculateCountdown(promotion.expires),
          };
        });
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [propmotions]);

  return (
    <>
      <div className="flex flex-col p-5">
        <h1 className="text-4xl m-5 self-center">โปรโมชั่น</h1>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {propmotions.map((promotion) => (
              <CarouselItem key={promotion.id} className="basis-3/4 md:basis-1/3 bg-transparent">
                <a href={promotion.id} className="block w-full">
                  <img
                    src={promotion.cover}
                    className="object-contain w-full rounded-t-md"
                    alt={promotion.title}
                  />
                </a>
                <div className="relative w-full bg-sky-200 h-72 md:h-32 p-5 flex flex-col justify-between rounded-b-md">
                  <h2>{promotion.description}</h2>
                  <p className="self-end font-bold">
                    {/* Real-time countdown display */}
                    {promotion.countdown ? promotion.countdown : "กำลังโหลด..."}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

export default Promotion;
