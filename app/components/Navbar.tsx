// import { Button } from "@/app/components/ui/button";
import { Button } from "../components/ui/button";
import Link from "next/link"

export default function Navbar() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-5xl px-2 sm:px-3 py-2 sm:py-3 rounded-sm shadow-md flex justify-between items-center my-2 sm:my-4 border-1 border-black/30 backdrop-blur-sm fixed text ">
      {/* Logo */}
      <div className="w-20 sm:w-30 h-8 sm:h-12 flex items-center justify-center">
        <img
          src="/cvGenie-logo.png"
          alt="CVGenie Logo"
          className="h-8 sm:h-12 w-24 sm:w-40 text-black"
        />
      </div>

      {/* Navigation links (add here if needed) */}
      <div className="space-x-2 sm:space-x-4 hidden md:flex gap-3 sm:gap-6 text-base sm:text-xl title-font">
        <Link href="/">Home</Link>
        <Link href="/create-resume">Create</Link>
        <a href="/signin">Contact</a>
      </div>

      {/* Login Button */}
      
      <div>
       {/* <Button></Button> */}
   <button className="border border-black/30 px-4 py-1.5 text-lg font-semibold bg-green-400/30 flex items-center gap-2 rounded-sm">
            Log In
            <img
              src="/user-interface.png"
              alt="sparkle"
              className="w-6 h-6 object-contain "
            />
          </button>



      </div>
    </div>
  );
}