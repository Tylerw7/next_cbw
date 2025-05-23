/* eslint-disable @next/next/no-img-element */

"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        //ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <Dialog key={"grid-3" + idx}>
            <DialogTrigger asChild>
              <motion.div
                style={{ y: translateThird }}
                onClick={() => setSelectedImage(el)}
                className="cursor-pointer"
              >
                <img
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </motion.div>
            </DialogTrigger>
            <DialogContent className="w-[80vw] h-[80vh] max-w-none p-0 overflow-hidden">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="enlarged view"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </DialogContent>
          </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};
