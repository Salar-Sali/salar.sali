import Skill from "./Skill";

function Skills() {
  return (
    <div className="flex flex-col gap-y-3">
      <Skill skillName="ReactJs" percentage={80} />
      <Skill skillName="Typescript" percentage={70} />
      <Skill skillName="Redux Toolkit" percentage={85} />
      <Skill skillName="Git/Github" percentage={60} />
      <Skill skillName="Tailwindcss" percentage={90} />
      <Skill skillName="Adobe illustrator" percentage={85} />
      <Skill skillName="Adobe photoshop" percentage={80} />
    </div>
  );
}

export default Skills;
