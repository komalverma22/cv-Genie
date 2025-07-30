'use client';

import { useState } from "react";
import PersonalInfo from "../components/ui/leftSide/PersonalInfo.create-resume";
import PersonalInfoRight from "../components/ui/rightSide/PersonalInfo.Right";
import SkillRight from "../components/ui/rightSide/SkillRight";
import SkillLeft from "../components/ui/leftSide/Skills.left";
import EducationLeft from "../components/ui/leftSide/Education.Left";
import EducationRight from "../components/ui/rightSide/EducationRight";

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
 const [education,setEducation]=useState([{institute: '', degree: '', duration: '', score: ''}])
  return (
    <div className="fixed w-screen h-screen">
      {/* background-image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90 backdrop-blur-sm"
        style={{ backgroundImage: "url('create-resume.png')" }}
      >
        {/* Two equal parts over the background */}
        <div className="relative z-10 flex w-full mt-30">
          
          {/* Left: Form */}
          <div className="w-1/2 max-h-[83vh] overflow-y-auto  p-6 mx-3  border border-gray-400 shadow rounded-lg bg-white/90 scrollbar-hide ">
            <PersonalInfo info={info} setInfo={setInfo} />
            <SkillLeft skills={skills} setSkills={setSkills}/>
            <EducationLeft education={education} setEducation={setEducation}/>
          </div>

          {/* Right: Live Preview */}
          <div className="w-1/2  bg-white/90 ">
            <PersonalInfoRight info={info} />
            {/* <PersonalInfoRight/> */}
            <SkillRight skills={skills}/>
            <EducationRight education={education}/>
          </div>
        </div>
      </div>
    </div>
  );
}
