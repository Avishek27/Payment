"use client"
import { cn } from "@workspace/ui/lib/utils";
import {Schibsted_Grotesk} from "next/font/google";


const fonts = Schibsted_Grotesk({
   subsets: ["latin"],
   weight: "700",
   style: "italic"
})


const Navbar = () => {
    const list = {}
    return (
    <nav className="h-20 w-full border-b border-b-slate-400  justify-around flex px-7">
        <div className="flex items-center gap-x-4">
         <h1 className={cn("text-[#0074DE] text-2xl font-bold italic",fonts.className)}>
            venmo
         </h1> 
         <div>
            Send and Recieve
         </div>
         <div>
            Pay with Venmo
         </div>
         <div>
            Venmo for business
         </div>
        </div>
       
       <div className="flex items-center gap-x-4">
         <div>
            Log In
         </div>
         <div>
            Sign Up
         </div>
       </div>
    </nav>
    )
}


export default Navbar;