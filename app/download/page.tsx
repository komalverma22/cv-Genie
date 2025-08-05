'use client';

import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { loadFromLocalStorage } from '../utils/localStorageHelper';

import PersonalInfoRight from "../components/ui/rightSide/PersonalInfo.Right";
import SkillRight from "../components/ui/rightSide/SkillRight";
import EducationRight from "../components/ui/rightSide/EducationRight";
import ExperienceRight from "../components/ui/rightSide/Experience.Right";
import ProjectsRight from "../components/ui/rightSide/Project.Right";
import AchievementsRight from "../components/ui/rightSide/Acheivements.Right";

export default function DownloadPage() {
  const [info, setInfo] = useState({ name: "", location: "", email: "", github: "", linkedin: "", twitter: "" });
  const [skills, setSkills] = useState([{ category: "", items: "" }]);
  const [education, setEducation] = useState([{ institute: '', degree: '', duration: '', score: '' }]);
  const [experience, setExperience] = useState([{ role: '', organization: '', location: '', duration: '', points: [''] }]);
  const [projects, setProjects] = useState([{ title: '', description: '', points: [''], github: '' }]);
  const [achievement, setAchievement] = useState([{ items: '' }]);

  const captureRef = useRef(null);

  useEffect(() => {
    const savedData = loadFromLocalStorage("resumeData");
    if (savedData) {
      setInfo(savedData.info || {});
      setSkills(savedData.skills || []);
      setEducation(savedData.education || []);
      setExperience(savedData.experience || []);
      setProjects(savedData.projects || []);
      setAchievement(savedData.achievement || []);
    }
  }, []);

const handleDownloadPDF = async () => {
  const element = captureRef.current;
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 4,
      backgroundColor: '#ffffff',
      useCORS: true,
      allowTaint: true,
      // scrollX: 0,
      // scrollY: 0,
      // width: element.scrollWidth,
      // height: element.scrollHeight,
      // letterRendering: true,
    });

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Convert canvas size from px to pt (1 px = 0.75 pt)
    const pdfWidth = canvasWidth * 0.75;
    const pdfHeight = canvasHeight * 0.75;

    // Use custom page size based on content
    const pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);

    const imgData = canvas.toDataURL('image/png', 1.0);

    // Add image to PDF (no breaks, full height)
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Optional: clickable links (if any)
    await addClickableLinks(pdf, element, pdfWidth, pdfHeight);

    pdf.save('resume.pdf');
  } catch (err) {
    console.error('PDF Download Error:', err);
    alert("Failed to download PDF.");
  }
};


  // ✅ Function to add links (mailto, http, etc.)
  const addClickableLinks = (
  pdf: jsPDF,
  element: HTMLElement,
  pdfWidth: number,
  pdfHeight: number
)=> {
    const links = element.querySelectorAll('a[href]');
    const boundingBox = element.getBoundingClientRect();

    links.forEach(link => {
      const rect = link.getBoundingClientRect();
      const href = link.getAttribute('href');

      if (!href) return;

      // Calculate relative position
      const x = rect.left - boundingBox.left;
      const y = rect.top - boundingBox.top;
      const width = rect.width;
      const height = rect.height;

      // Map to PDF coordinates
      const pdfX = (x / element.offsetWidth) * pdfWidth;
      const pdfY = (y / element.offsetHeight) * pdfHeight;
      const pdfW = (width / element.offsetWidth) * pdfWidth;
      const pdfH = (height / element.offsetHeight) * pdfHeight;

      pdf.link(pdfX, pdfY, pdfW, pdfH, { url: href });
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 mt-20">
      <div
        ref={captureRef}
        style={{
          width: '700px',
          padding: '20px',
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          color: '#000000',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          lineHeight: '1.5',
        }}
      >
        <PersonalInfoRight info={info} />
        <SkillRight skills={skills} />
        <EducationRight education={education} />
        <ExperienceRight experience={experience} />
        <ProjectsRight projects={projects} />
        <AchievementsRight achievement={achievement} />
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          padding: '10px 20px',
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Download as PDF
      </button>
    </main>
  );
}
