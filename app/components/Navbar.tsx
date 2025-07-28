import Link from "next/link"

export default function Navbar() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[90%] max-w-5xl  px-3 py-3 rounded-sm shadow-md flex justify-between items-center my-4 border-1 border-black/30 backdrop-blur-sm fixed text">
      {/* Logo */}
    <div className="w-12 h-10 flex items-center justify-center">
  <img
    src="/cvGenie-logo.png"
    alt="CVGenie Logo"
    className="h-full w-auto object-contain"
  />
</div>

      {/* Navigation links (add here if needed) */}
      <div className="space-x-4 hidden md:flex gap-6 text-xl ">
       <Link href="/">Home</Link>
      <Link href="/create-resume">Create</Link>
       <a href="">Contact</a>
      </div>

      {/* Login Button */}
      <div>
        <button className=" text-xl bg-green-400/40 px-6 py-1 rounded-sm font-semibold  transition ">
          Log In
        </button>
      </div>
    </div>
  );
}
