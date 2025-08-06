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
 <div className="relative h-screen w-screen overflow-hidden">
  <Image
    src={bgImage}
    alt="Background"
    fill
    className="object-cover object-center"
    priority
    quality={100}
  />
  {/* Your content here */}


    
     <LandingPage/>
     
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 -bottom-66 md:-bottom-145 w-[80%] md:w-[100%] max-w-[1000px] z-0 drop-shadow-xl '>
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