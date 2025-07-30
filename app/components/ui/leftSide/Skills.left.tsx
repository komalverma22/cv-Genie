'use client';

import { FaPlus, FaTrash } from "react-icons/fa";

interface SkillLeft {
  skills: { category: string; items: string }[];
  setSkills: React.Dispatch<React.SetStateAction<{ category: string; items: string }[]>>;
}

export default function SkillLeft({ skills, setSkills }: SkillLeft) {
  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...skills];
    updated[index][field as "category" | "items"] = value;
    setSkills(updated);
  };

  const addSkillRow = () => {
    setSkills([...skills, { category: "", items: "" }]);
  };

  const removeSkillRow = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className=" text-2xl font-bold my-4 flex items-center justify-between title-font">
        Skills
       <button
  onClick={addSkillRow}
  className="w-8 h-8 flex "
  title="Add Skill"
>
  <video
    src="/plus.mp4" // ⬅️ make sure this path is correct
    className="w-full h-full object-contain"
    muted
    playsInline
    onMouseEnter={(e) => {
      e.currentTarget.currentTime = 0;
      e.currentTarget.play();
    }}
    onMouseLeave={(e) => {
      e.currentTarget.pause();
    }}
  />
</button>

      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="flex items-start gap-4 mb-3">
          <input
            type="text"
            placeholder="Category (e.g. Languages)"
            value={skill.category}
            onChange={(e) => handleChange(index, "category", e.target.value)}
            className="w-1/3 border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Skills (e.g. HTML, CSS)"
            value={skill.items}
            onChange={(e) => handleChange(index, "items", e.target.value)}
            className="w-2/3 border border-gray-300 p-2 rounded"
          />
          <button
            onClick={() => removeSkillRow(index)}
            className="text-red-600 hover:text-red-800 mt-2"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}
