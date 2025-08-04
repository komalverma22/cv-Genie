'use client';
import Image from 'next/image';
import bgImage from '../public/bg-resume.jpeg';
import LandingPage from './components/LandingPage';
import TextGenerate from './components/TextGenerate';
import Features from './components/Feature';
import FAQ from './components/FAQ';
import FooterThird from './components/Footer';
export default function Home() {
  return (
    <div className='overflow-x-hidden'>
    <div className="h-screen w-screen   relative">
      {/* Background Image - Fixed to viewport */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        sizes="100vw"
        className="bg-cover border-none mask-image-gradient"
        priority
        quality={100}
      />
    
     <LandingPage/>
     
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-86 md:-bottom-145 w-[80%] md:w-[100%] max-w-[1000px] z-0 drop-shadow-xl '>
        {/* <img src="/resume-without-bg.png" alt="" className="h-100 bottom-5"/> */}<TextGenerate/>
     
      
      </div>
     <div className=''>
         <Features/>
     </div>
     <div>
      <FAQ/>
     </div>
     <div>
      <FooterThird/>
     </div>
  </div>
  );
}