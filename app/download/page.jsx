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
      // Collect link data BEFORE any style changes
      const linkData = collectLinkData(element);

      // Save original styles
      const originalStyle = element.style.cssText;
      const originalBodyOverflow = document.body.style.overflow;
      
      // Set element to auto-size based on content
      element.style.width = 'auto';
      element.style.minWidth = '600px';  // Minimum readable width
      element.style.maxWidth = '900px';  // Maximum width for good formatting
      element.style.height = 'auto';
      element.style.overflow = 'visible';
      element.style.display = 'block';
      document.body.style.overflow = 'visible';
      
      // Wait for layout to stabilize
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get final dimensions after auto-sizing
      const finalWidth = element.scrollWidth;
      const finalHeight = element.scrollHeight;
      
      console.log(`Final dimensions: ${finalWidth}x${finalHeight}`);

      const canvas = await html2canvas(element, {
        scale: 3, // Good balance between quality and file size
        backgroundColor: '#ffffff', 
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        width: finalWidth,
        height: finalHeight,
        windowWidth: finalWidth + 50,
        windowHeight: finalHeight + 50,
        removeContainer: true,
        onclone: function(clonedDoc) {
          // Target the main container div directly
          const clonedElements = clonedDoc.querySelectorAll('div, section, main, article');
          clonedElements.forEach((element) => {
            const htmlElement = element as HTMLElement;
            if (htmlElement && htmlElement.style) {
              htmlElement.style.width = 'auto';
              htmlElement.style.minWidth = '600px';
              htmlElement.style.maxWidth = '900px';
              htmlElement.style.height = 'auto';
              htmlElement.style.overflow = 'visible';
              htmlElement.style.position = 'relative';
              htmlElement.style.display = 'block';
            }
          });
        }
      });

      // Restore original styles immediately
      element.style.cssText = originalStyle;
      document.body.style.overflow = originalBodyOverflow;

      // Create PDF with auto dimensions
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
      // Convert canvas pixels to PDF points (72 DPI)
      const pdfWidth = (canvasWidth * 72) / (96 * 3); // Divide by scale factor
      const pdfHeight = (canvasHeight * 72) / (96 * 3);
      
      console.log(`PDF dimensions: ${pdfWidth}x${pdfHeight} points`);

      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
        unit: 'pt', 
        format: [pdfWidth, pdfHeight]
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');

      // Add clickable links using collected data
      addClickableLinks(pdf, linkData, finalWidth, finalHeight, pdfWidth, pdfHeight);

      pdf.save('resume.pdf');
      
    } catch (err) {
      console.error('PDF Download Error:', err);
      alert('Failed to download PDF. Please try again.');
    }
  };

  // Function to collect link data before DOM changes
  const collectLinkData = (element: HTMLElement) => {
    const links = element.querySelectorAll('a[href]') as NodeListOf<HTMLAnchorElement>;
    const elementRect = element.getBoundingClientRect();
    
    return Array.from(links).map(link => {
      const rect = link.getBoundingClientRect();
      return {
        href: link.getAttribute('href') || '',
        x: rect.left - elementRect.left,
        y: rect.top - elementRect.top,
        width: rect.width,
        height: rect.height,
        text: link.textContent || link.innerText || ''
      };
    });
  };

  // Function to add clickable links to PDF
  const addClickableLinks = (pdf, linkData, originalWidth, originalHeight, pdfWidth, pdfHeight) => {
    linkData.forEach(link => {
      if (!link.href) return;

      // Calculate scale factors
      const scaleX = pdfWidth / originalWidth;
      const scaleY = pdfHeight / originalHeight;

      // Convert to PDF coordinates
      const pdfX = link.x * scaleX;
      const pdfY = link.y * scaleY;
      const pdfW = link.width * scaleX;
      const pdfH = link.height * scaleY;

      // Process different types of links
      let url = link.href;
      
      if (link.href.includes('@') && !link.href.startsWith('mailto:')) {
        // Email links
        url = 'mailto:' + link.href;
      } else if (link.href.includes('linkedin.com') && !link.href.startsWith('http')) {
        url = 'https://www.' + link.href;
      } else if (link.href.includes('github.com') && !link.href.startsWith('http')) {
        url = 'https://www.' + link.href;
      } else if (link.href.includes('twitter.com') && !link.href.startsWith('http')) {
        url = 'https://www.' + link.href;
      } else if (!link.href.startsWith('http://') && !link.href.startsWith('https://') && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        // Add https:// for other links
        url = 'https://' + link.href;
      }

      try {
        pdf.link(pdfX, pdfY, pdfW, pdfH, { url: url });
        console.log(`✅ Added clickable link: ${url} at (${Math.round(pdfX)}, ${Math.round(pdfY)})`);
      } catch (error) {
        console.warn(`❌ Failed to add link ${url}:`, error);
      }
    });
    
    console.log(`Total clickable links added: ${linkData.length}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 mt-20">
      <div
        ref={captureRef}
        style={{
          width: 'auto',           // Auto width
          minWidth: '600px',       // Minimum readable width
          maxWidth: '900px',       // Maximum for good formatting
          height: 'auto',          // Auto height
          padding: '30px',         // Good padding for content
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          color: '#000000',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          lineHeight: '1.6',
          boxSizing: 'border-box',
          margin: '0 auto',        // Center the content
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
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease',
        }}
        onMouseOver={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = '#0056b3';
          target.style.transform = 'translateY(-1px)';
        }}
        onMouseOut={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = '#007bff';
          target.style.transform = 'translateY(0)';
        }}
      >
        📄 Download as PDF
      </button>
    </main>
  );
}