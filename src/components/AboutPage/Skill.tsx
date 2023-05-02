import SkillBar from "./SkillBar";

type Props = {
  skillName: string;
  percentage: number;
};

function Skill({ skillName, percentage }: Props) {
  return (
    <div className="flex justify-between flex-wrap text-white">
      <span>{skillName}</span>
      <span>{percentage}%</span>
      <SkillBar percentage={percentage} />
    </div>
  );
}

export default Skill;
