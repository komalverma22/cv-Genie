'use client';

type Education = {
  institute: string;
  degree: string;
  duration: string;
  score: string;
};

type Props = {
  education: Education[];
};

export default function EducationRight({ education }: Props) {
  if (!education?.length) return null;

  return (
    <div className="text-black px-6 my-3">
      <h2 className="font-semibold border-b border-gray-400 mb-1 text-base">
        EDUCATION
      </h2>

      {education.map((edu, index) => (
        <div key={index} className="flex justify-between mb-4">
          {/* Left side: institute and degree */}
          <div>
            <p className="font-semibold">
              {edu.institute || 'Your Institution'}
            </p>
            <p className="italic text-sm">
              {edu.degree || 'Your Degree (e.g. B.Tech CSE)'}
            </p>
          </div>

          {/* Right side: duration and score */}
          <div className="text-right text-sm">
            <p className="italic">
              {edu.duration || 'Duration (e.g. Sep 2023 – Jul 2027)'}
            </p>
            <p>{edu.score || 'Score (e.g. 8.2 CGPA / 93%)'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
