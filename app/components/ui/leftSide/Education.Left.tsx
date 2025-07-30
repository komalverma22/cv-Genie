'use client';

import { FaPlus, FaTrash } from 'react-icons/fa';

type Education = {
  institute: string;
  degree: string;
  duration: string;
  score: string;
};

type Props = {
  education: Education[];
  setEducation: React.Dispatch<React.SetStateAction<Education[]>>;
};

export default function EducationLeft({ education, setEducation }: Props) {
  const handleChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const addEducationRow = () => {
    setEducation([
      ...education,
      { institute: '', degree: '', duration: '', score: '' },
    ]);
  };

  const removeEducationRow = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 flex items-center justify-between title-font">
        Education
        <button
          onClick={addEducationRow}
          className="w-8 h-8 flex"
          title="Add Education"
        >
          <video
            src="/plus.mp4"
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

      {education.map((edu, index) => (
        <div
          key={index}
          className="border border-gray-300 p-4 rounded mb-3 relative"
        >
          {/* 🗑️ Delete Button Top-Right */}
          <button
            onClick={() => removeEducationRow(index)}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            title="Remove"
          >
            <FaTrash size={14} />
          </button>

          {/* Institution - Full Width */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Institution</label>
            <input
              type="text"
              placeholder="e.g. DCRUST University Murthal"
              value={edu.institute}
              onChange={(e) =>
                handleChange(index, 'institute', e.target.value)
              }
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Degree + Duration Side by Side */}
          <div className="flex gap-4 mb-3">
            <div className="w-1/2">
              <label className="block font-medium mb-1">Degree</label>
              <input
                type="text"
                placeholder="e.g. B.Tech CSE"
                value={edu.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1">Duration</label>
              <input
                type="text"
                placeholder="e.g. Sep 2023 – Jul 2027"
                value={edu.duration}
                onChange={(e) =>
                  handleChange(index, 'duration', e.target.value)
                }
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          {/* Score - Full Width */}
          <div>
            <label className="block font-medium mb-1">Score</label>
            <input
              type="text"
              placeholder="e.g. CGPA 8.2 or 93%"
              value={edu.score}
              onChange={(e) => handleChange(index, 'score', e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
