'use client';

import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import PersonalInfo from "../components/ui/leftSide/PersonalInfo.create-resume";
import PersonalInfoRight from "../components/ui/rightSide/PersonalInfo.Right";
import SkillRight from "../components/ui/rightSide/SkillRight";
import SkillLeft from "../components/ui/leftSide/Skills.left";
import EducationLeft from "../components/ui/leftSide/Education.Left";
import EducationRight from "../components/ui/rightSide/EducationRight";
import ExperienceLeft from "../components/ui/leftSide/Experience.left";
import ExperienceRight from "../components/ui/rightSide/Experience.Right";
import ProjectsLeft from "../components/ui/leftSide/Project.Left";
import ProjectsRight from "../components/ui/rightSide/Project.Right";
import AcheivementLeft from "../components/ui/leftSide/Acheivements.Left";
import AchievementsRight from "../components/ui/rightSide/Acheivements.Right";

export default function CreateResume() {
  const [info, setInfo] = useState({
    name: "",
    location: "",
    email: "",
    github: "",
    linkedin: "",
    twitter: "",
  });
  const [skills, setSkills] = useState([{ category: '', items: '' }]);
  const [education, setEducation] = useState([{ institute: '', degree: '', duration: '', score: '' }]);
  const [experience, setExperience] = useState([{ role: '', organization: '', location: '', duration: '', points: [''] }]);
  const [projects, setProjects] = useState([{ title: '', description: '', points: [''], github: '' }]);
  const [achievement, setAchievement] = useState([{ items: '' }]);
  const [isDownloading, setIsDownloading] = useState(false);

  const rightRef = useRef(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  const downloadResume = async () => {
    const element = rightRef.current;
    if (!element) {
      console.error("Right panel element not found");
      alert("Resume preview not available. Please wait for the page to load completely.");
      return;
    }

    try {
      setIsDownloading(true);
      console.log("Starting PDF generation...");

      // Wait a bit for any pending renders
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(element, { 
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0
      });

      console.log("Canvas created successfully");

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      // Handle multiple pages if content is too long
      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      } else {
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
      }

      const fileName = info.name ? `${info.name.replace(/\s+/g, '_')}_Resume.pdf` : 'Resume.pdf';
      pdf.save(fileName);
      
      console.log("PDF downloaded successfully");
      alert("Resume downloaded successfully!");
      
    } catch (error) {
      console.error("PDF generation error:", error);
      console.log(error);
      
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Check for download trigger when component mounts or session changes
  useEffect(() => {
    const checkDownloadTrigger = async () => {
      const shouldDownload = localStorage.getItem("shouldDownload");
      
      if (shouldDownload && session && status !== "loading") {
        console.log("Download triggered after sign in");
        localStorage.removeItem("shouldDownload");
        
        // Wait a bit more for the component to fully render
        setTimeout(() => {
          downloadResume();
        }, 1000);
      }
    };

    checkDownloadTrigger();
  }, [session, status]);

  // Make download function available globally for direct calls
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.downloadResume = downloadResume;
    }
    
    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        delete window.downloadResume;
      }
    };
  }, []);

  return (
    <div className="fixed w-screen h-screen">
      {/* Loading overlay when downloading */}
      {isDownloading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg flex items-center gap-4">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-lg font-semibold">Generating PDF...</span>
          </div>
        </div>
      )}

      {/* background-image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 backdrop-blur-sm"
        style={{ backgroundImage: "url('create-resume.png')" }}
      >
        {/* Two equal parts over the background */}
        <div className="relative z-10 flex w-full mt-30">
          {/* Left: Form */}
          <div className="w-1/2 max-h-[83vh] overflow-y-auto p-6 mx-3 border border-gray-400 shadow rounded-lg bg-white/90 scrollbar-hide">
            <PersonalInfo info={info} setInfo={setInfo} />
            <SkillLeft skills={skills} setSkills={setSkills} />
            <EducationLeft education={education} setEducation={setEducation} />
            <ExperienceLeft experience={experience} setExperience={setExperience} />
            <ProjectsLeft projects={projects} setProjects={setProjects} />
            <AcheivementLeft achievement={achievement} setAchievement={setAchievement} />
          </div>

          {/* Right: Live Preview + Ref for PDF */}
          <div className="w-1/2 max-h-[83vh] overflow-y-auto p-6 mr-3 border border-gray-400 shadow rounded-lg bg-white/90 scrollbar-hide">
            {/* This wrapper div is for PDF generation */}
            <div
              ref={rightRef}
              className="bg-white p-4 min-h-full"
              style={{ 
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '1.4',
                color: '#333'
              }}
            >
              <PersonalInfoRight info={info} />
              <SkillRight skills={skills} />
              <EducationRight education={education} />
              <ExperienceRight experience={experience} />
              <ProjectsRight projects={projects} />
              <AchievementsRight achievement={achievement} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}