"use client"

import {Didact_Gothic} from "next/font/google";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";


const fonts = Didact_Gothic({
        subsets: ["latin"],
        weight: ["400"]
    });

const Business = () => {


    return (
      <div className="bg-white flex flex-col justify-center gap-20 p-7 self-start">
        
        <div className="flex flex-col gap-y-10 ml-40 self-start">
          <h1 className={cn("text-6xl font-black max-w-md",fonts.className)}>
            Grow a business
          </h1>
          <p className="max-w-md text-xl">
            Create a business profile to engage customers 
            and take payments with a seamless checkout 
            experience people already know and trust.
            <br>
            </br>
            Learn more.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image
          src="/b1.webp"
          alt="business"
          width={1000}
          height={1000}
          className="rounded-md"
          />
        </div>
        
      </div>
    )
}

export default Business;