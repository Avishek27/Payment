"use client"

import {Didact_Gothic} from "next/font/google";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";


const fonts = Didact_Gothic({
        subsets: ["latin"],
        weight: ["400"]
    });

const Hero = () => {


    return (
      <div className="bg-[#DEEFFF] flex justify-around p-10 gap-y-3">
        <div className="flex flex-col gap-y-10">
          <h1 className={cn("text-7xl font-black pt-12 max-w-md",fonts.className)}>
            Pay friends.
            Pay for
            everything.
          </h1>
          <p className="max-w-md text-xl">
            Easily send money to your friends and pay 
            for everything* you want online, in-store, 
            and in apps with your Venmo account. 
            
            <br>
            </br>
            Learn more.
          </p>
        </div>
        <div className="w-full max-w-xl">
          <Image
        src="/hero.png"
        alt="heroImg"
        className="rounded-lg w-full h-auto"
        width={500}
        height={500}
        />
        </div>
        
      </div>
    )
}

export default Hero;