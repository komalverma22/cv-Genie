'use client';

import { FaPlus, FaTrash } from 'react-icons/fa';

type Experience = {
  role: string;
  organization: string;
  location: string;
  duration: string;
  points: string[];
};

type Props = {
  experience: Experience[];
  setExperience: React.Dispatch<React.SetStateAction<Experience[]>>;
};

export default function ExperienceLeft({ experience, setExperience }: Props) {
  const handleChange = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const handlePointChange = (
    expIndex: number,
    pointIndex: number,
    value: string
  ) => {
    const updated = [...experience];
    updated[expIndex].points[pointIndex] = value;
    setExperience(updated);
  };

  const addExperienceRow = () => {
    setExperience([
      ...experience,
      {
        role: '',
        organization: '',
        location: '',
        duration: '',
        points: [''],
      },
    ]);
  };

  const removeExperienceRow = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const addPoint = (index: number) => {
    const updated = [...experience];
    updated[index].points.push('');
    setExperience(updated);
  };

  const removePoint = (expIndex: number, pointIndex: number) => {
    const updated = [...experience];
    updated[expIndex].points.splice(pointIndex, 1);
    setExperience(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 flex items-center justify-between title-font">
        Work Experience
        <button onClick={addExperienceRow} className="w-8 h-8 flex" title="Add Experience">
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

      {experience.map((exp, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded mb-3 relative">
          <button
            onClick={() => removeExperienceRow(index)}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            title="Remove"
          >
            <FaTrash size={14} />
          </button>

          <div className="mb-3">
            <label className="block font-medium mb-1">Role</label>
            <input
              type="text"
              placeholder="e.g. Junior Web Developer Intern"
              value={exp.role}
              onChange={(e) => handleChange(index, 'role', e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="flex gap-4 mb-3">
            <div className="w-1/2">
              <label className="block font-medium mb-1">Organization</label>
              <input
                type="text"
                placeholder="e.g. TBI"
                value={exp.organization}
                onChange={(e) => handleChange(index, 'organization', e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                placeholder="e.g. Dehradun"
                value={exp.location}
                onChange={(e) => handleChange(index, 'location', e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Duration</label>
            <input
              type="text"
              placeholder="e.g. Feb 2025 – April 2025"
              value={exp.duration}
              onChange={(e) => handleChange(index, 'duration', e.target.value)}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="mb-2">
            <label className="block font-medium mb-1">Responsibilities</label>
            {exp.points.map((point, pIndex) => (
              <div key={pIndex} className="flex items-start gap-2 mb-2">
                <textarea
                  value={point}
                  placeholder="Describe your work here..."
                  onChange={(e) => handlePointChange(index, pIndex, e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded resize-none"
                />
                <button
                  onClick={() => removePoint(index, pIndex)}
                  className="text-red-600 hover:text-red-800 mt-1"
                  title="Remove Point"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}
            <button
              onClick={() => addPoint(index)}
              className="text-blue-600 hover:underline text-sm mt-1"
            >
              + Add Point
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
