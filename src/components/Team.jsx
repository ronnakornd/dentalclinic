import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "team"), orderBy("createdAt", "asc"));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return;
      }
      setMembers(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-screen flex justify-center flex-col items-center">
      <div className="text-4xl m-5">ทีมแพทย์</div>
      <div className="w-screen h-min-screen flex">
        <Carousel className="w-full">
          <CarouselContent>
            {members.map((member) => (
              <CarouselItem className="basis-3/3 md:basis-1/4">
                <div className="w-full flex justify-center items-center">
                  <div
                    key={member.id}
                    className="p-4 flex flex-col justify-center items-center gap-2"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-64 h-72 object-cover mb-4 rounded-xl"
                    />
                    <h3 className="text-xl font-bold text-center">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {member.service}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
