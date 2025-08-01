
import { FaLink } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  points: string[];
  github: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectsRight({ projects }: Props) {
  if (!projects?.length) return null;

  return (
    <div className="text-black px-6 my-3">
      <h2 className="font-semibold border-b border-gray-400 mb-1 text-base">
        PROJECTS
      </h2>

      {projects.map((proj, index) => (
        <div key={index} className="mb-4">
          {/* Project Title */}
          <p className="font-semibold">{proj.title || 'Project Title'}</p>

          {/* Description */}
          <p className="text-sm mb-1">
            {proj.description || 'Project description goes here...'}
          </p>

          {/* Features / Tech */}
          <ul className="list-disc list-inside text-sm space-y-1">
            {(proj.points.length ? proj.points : ['Feature / Tech used...']).map(
              (point, i) => (
                <li key={i}>{point || "Enter your tech stack/other features"}</li>
              )
            )}
          </ul>

          {/* GitHub Link */}
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline flex items-center gap-1 mt-1 text-sm"
            >
              <FaLink className="text-blue-500" /> GitHub
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
