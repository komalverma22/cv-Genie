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
      <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
        Skills
        <button
          onClick={addSkillRow}
          className="text-green-600 hover:text-green-800"
          title="Add Skill"
        >
          <FaPlus />
        </button>
      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="flex items-start gap-4 mb-3">
          <input
            type="text"
            placeholder="Category (e.g. Languages)"
            value={skill.category}
            onChange={(e) => handleChange(index, "category", e.target.value)}
            className="w-1/3 border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Skills (e.g. HTML, CSS)"
            value={skill.items}
            onChange={(e) => handleChange(index, "items", e.target.value)}
            className="w-2/3 border p-2 rounded"
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
