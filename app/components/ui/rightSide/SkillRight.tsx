'use client';

type Skill = {
  category: string;
  items: string;
};

type Props = {
  skills: Skill[];
};

export default function SkillRight({ skills }: Props) {
  if (!skills?.length) return null;

  return (
    <div className="text-black px-6 my-3  ">
      <h2 className="font-semibold border-b border-gray-400 mb-1 text-base">SKILLS</h2>
      {skills.map((skill, index) => (
        <div key={index} className="flex  text-sm">
          <span className="font-semibold w-1/3 text-[15px]">{skill.category || '-'}</span>
          <span className="w-2/3">{skill.items || '-'}</span>
        </div>
      ))}
    </div>
  );
}
