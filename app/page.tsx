'use client';
import Image from 'next/image';
import bgImage from '../public/bg-resume.jpeg';
import LandingPage from './components/LandingPage';
export default function Home() {
  return (
    <div>
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background Image - Fixed to viewport */}
      <Image
        src={bgImage}
        alt="Background"
        fill
        sizes="100vw"
        className="bg-cover"
        priority
        quality={100}
      />
    
     <LandingPage/>
      </div>
      <div>
      
      </div>
  </div>
  );
}