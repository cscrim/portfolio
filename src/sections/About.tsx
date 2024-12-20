"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Image from "next/image";
import mapImage from "@/assets/images/canadaMap.png";
import headshot from "@/assets/images/profilePic.png";
import { useEffect, useState } from "react";
import { hobbies, toolbox, albums } from "@/data";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const interval = 2000;

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const [albumIndex, setAlbumIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setAlbumIndex((prevIndex) => (prevIndex + 1) % albums.length);
    }, interval);

    return () => clearInterval(cycle);
  }, [albums, interval]);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          subheader="About Me"
          title="A Glimpse Into My World"
          description="Learn more about me, my passions, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
       

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map image"
                className="h-full w-full object-cover"
                objectFit="cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full outline outline-3 outline-emerald-300 flex justify-center items-center">
                <div className="absolute inset-0 rounded-full bg-emerald-300 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-emerald-300 -z-20 animate-ping [animation-duration:2s]"></div>

                <Image
                  src={headshot}
                  alt="Courtney's portrait"
                  className="size-14 rounded-full object-contain"
                />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Discover the tools & technologies behind my creations"
              />
              <ToolboxItems
                items={toolbox}
                itemsWrapperClassName="animate-moveLeft [animation-duration:40s]"
              />
              <ToolboxItems
                items={toolbox}
                className="mt-6"
                itemsWrapperClassName="animate-moveRight [animation-duration:28s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Some of my interests outside of code. Try interacting with the hobby chips!"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

       

            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Music"
                description="Fave albums, on repeat"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={albums[albumIndex]}
                  alt="music cover"
                  className="animate-fade"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
