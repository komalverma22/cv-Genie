// import PdfLogo from "../../public/resume-logo.png"

export default function LandingPage(){     
    return(         
        <div className="absolute z-10 left-1/2 -translate-x-1/2 top-30 m-2 w-full">   
            <div className="text-center">   
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Build Your Perfect Resumes
                </h1>   

                <div className="flex justify-center items-center ">
    
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Faster and Smarter
                    </h1>    
                    <img src="/resume-logo.png" alt="PDF Logo" className="h-20 md:h-20" />
                </div>

                <p className="text-xl max-w-2xl m-auto p-3 font-normal">
                    Create impressive, professional resumes in just minutes and land your dream job — and it is Free to download
                </p> 
                <div className="flex justify-center items-center">
                <button className="border-1 border-black/30 px-4 py-2.5 my-3 text-xl font-semibold bg-green-400/30 ">
                    Create Your Resume 

                </button>
                <img src="/sparkle" alt="" className=""/>
                </div>
            </div>     
        </div>     
    ) 
}
