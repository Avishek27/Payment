"use client"

import {Didact_Gothic} from "next/font/google";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";


const fonts = Didact_Gothic({
        subsets: ["latin"],
        weight: ["400"]
    });

const Rewards = () => {


    return (
      <div className="bg-white flex justify-center gap-20 p-7 items-start">
        <Image
        src="/rewards.png"
        alt="rewardImg"
        className="rounded-lg"
        width={500}
        height={700}
        />
        <div className="flex flex-col gap-y-10 self-center">
          <h1 className={cn("text-6xl font-black max-w-md",fonts.className)}>
            Meet Venmo
            <br></br>
            Stash rewards.
          </h1>
          <p className="max-w-md text-xl">
            Do more Stash, get more cash. 
            Join our Venmo Stash rewards program to earn up to 5% 
            cash back* on your favorite bundle of brands when you spend 
            with the Venmo Debit Card or choose Venmo at checkout.
            <br>
            </br>
            Learn more.
          </p>
        </div>
        
      </div>
    )
}

export default Rewards;