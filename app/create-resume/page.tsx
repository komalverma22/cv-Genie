'use client';

import { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import { saveToLocalStorage } from "../utils/localStorageHelper";

// Left and Right components
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
    name: "", location: "", email: "", github: "", linkedin: "", twitter: "",
  });
  const [skills, setSkills] = useState([{ category: '', items: '' }]);
  const [education, setEducation] = useState([{ institute: '', degree: '', duration: '', score: '' }]);
  const [experience, setExperience] = useState([{ role: '', organization: '', location: '', duration: '', points: [''] }]);
  const [projects, setProjects] = useState([{ title: '', description: '', points: [''], github: '' }]);
  const [achievement, setAchievement] = useState([{ items: '' }]);

  const resumeRef = useRef(null);

  useEffect(() => {
    saveToLocalStorage("resumeData", {
      info,
      skills,
      education,
      experience,
      projects,
      achievement,
    });
  }, [info, skills, education, experience, projects, achievement]);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;

    const pdf = new jsPDF("p", "pt", "a4");

    await pdf.html(resumeRef.current, {
      callback: function (doc) {
        doc.save("resume.pdf");
      },
      margin: [20, 20, 20, 20],
      autoPaging: "text",
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      x: 0,
      y: 0,
    });
  };

  return (
  <div className="fixed w-screen h-screen overflow-y-auto">
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-100 backdrop-blur-sm"
      style={{ backgroundImage: "url('create-resume.png')" }}
    >
      <div className="relative z-10 flex flex-col md:flex-row w-full gap-3 p-3 pt-6 mt-13 md:mt-20">
        {/* Left Panel - Input */}
        <div className="w-full md:w-1/2 max-h-[83vh] overflow-y-auto p-4 border border-gray-400 shadow rounded-lg bg-white/90 scrollbar-hide">
          <PersonalInfo info={info} setInfo={setInfo} />
          <SkillLeft skills={skills} setSkills={setSkills} />
          <EducationLeft education={education} setEducation={setEducation} />
          <ExperienceLeft experience={experience} setExperience={setExperience} />
          <ProjectsLeft projects={projects} setProjects={setProjects} />
          <AcheivementLeft achievement={achievement} setAchievement={setAchievement} />
        </div>

        {/* Right Panel - Preview */}
        <div className="w-full md:w-1/2 max-h-[83vh] overflow-y-auto border shadow rounded-lg bg-white/90 scrollbar-hide">
          <div
            ref={resumeRef}
            id="right-resume-preview"
            className="min-h-full"
            style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              lineHeight: '1.4',
              color: '#000000',
              padding: "30px 17px",
            }}
            data-html2canvas-ignore="false"
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
