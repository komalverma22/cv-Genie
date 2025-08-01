

type Achievement = {
  items: string;
};

type Props = {
  achievement: Achievement[];
};

export default function AchievementsRight({ achievement }: Props) {
  if (!achievement?.length || achievement.every(a => !a.items?.trim())) return null;

  return (
    <div className="text-black px-6 my-3">
      <h2 className="font-semibold border-b border-gray-400 mb-1 text-base">
        EXTRACURRICULAR ACHIEVEMENTS
      </h2>
<div>
      <ul className="list-disc list-inside text-sm space-y-1">
        {achievement.map((a, i) => (
          <li key={i}>
            {a.items?.trim() || "Achievement detail goes here..."}
          </li>
        ))}
      </ul>
</div>
    </div>
    
  );
}
