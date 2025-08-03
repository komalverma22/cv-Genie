// import PdfLogo from "../../public/resume-logo.png"

import TextGenerate from "./TextGenerate";

export default function LandingPage() {
  return (
    <div className="absolute  left-1/2 -translate-x-1/2 top-40 m-2 w-full">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Build Your Perfect Resumes
        </h1>

        <div className="flex justify-center items-center ">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Faster and Smarter
          </h1>
          <img
            src="/resume-logo.png"
            alt="PDF Logo"
            className="h-20 md:h-20 animate-bounce"
          />
        </div>

        <p className="text-xl max-w-2xl m-auto p-3 font-normal">
          Create impressive, professional resumes in just minutes and land your
          dream job — and it is Free to download
        </p>
        <div className="flex justify-center items-center">
          <button className="border animated-hover-btn transition-all duration-300 border-black/30 px-4 py-2.5 my-3 text-xl bubbles-effect relative font-semibold bg-green-400/30 flex items-center gap-2 rounded-sm">
            <a href="/create-resume">Create Your Resume</a>
            <img
              src="/sparkle.png"
              alt="sparkle"
              className="w-6 h-6 object-contain animate-sparkle"
            />
          </button>
          <div className="relative mt-10"></div>
        </div>
        <img
          src="/resume-templates.png"
          alt="Resume Preview"
          className="absolute left-1/2 -translate-x-1/2 -bottom-36 md:-bottom-134 w-[80%] md:w-[100%] max-w-[1000px] z-0 drop-shadow-xl mask-image-gradient "
        />
        
      </div>
    </div>
  );
}
