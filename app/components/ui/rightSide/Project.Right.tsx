"use client";

type Experience = {
  role: string;
  organization: string;
  location: string;
  duration: string;
  points: string[];
};

type Props = {
  experience: Experience[];
};

export default function ExperienceRight({ experience }: Props) {
  if (!experience?.length) return null;

  return (
    <div className="text-black px-6 my-3">
      <h2 className="font-semibold border-b border-gray-400 mb-1 text-base">
        WORK EXPERIENCE
      </h2>

      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          {/* Top Row: Role + Duration */}
          <div className="flex justify-between items-start">
            <p className="font-semibold">
              {exp.role || "Your Role (e.g. Web Developer Intern)"}
            </p>
            <p className="italic text-sm">
              {exp.duration || "Duration (e.g. Feb 2025 – Apr 2025)"}
            </p>
          </div>

          {/* Organization + Location */}
          <p className="italic text-sm mb-1">
            {exp.organization && exp.location
              ? `${exp.organization}, ${exp.location}`
              : "Organization, Location"}
          </p>

          {/* Points */}
          <ul className="list-disc list-inside text-sm space-y-1">
            {(exp.points.length ? exp.points : ["What did you work on?"]).map(
              (point, i) => (
                <li key={i}>{point || "Describe your contribution..."}</li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
