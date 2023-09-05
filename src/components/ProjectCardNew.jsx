import SkillTag from "./SkillTag";

export default function ProjectCardNew({
  title,
  howMightWe,
  cover,
  link,
  status,
  skills,
}) {
  const listSkills = skills.map((skill) => <SkillTag skill={skill}></SkillTag>);

  return (
    <div className="border-2 border-neutral-800 rounded-lg p-4 shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <a href={link} className="flex flex-col gap-y-4">
        <div className="flex flex-row justify-between items-center border-b-2 border-neutral-800 pb-2">
          <h3 className="text-xl font-bold text-left text-neutral-800">
            {title}
          </h3>
          <body className="text-neutral-500 text-xs">{status}</body>
        </div>
        <div className="flex flex-col md:gap-x-4 gap-y-4 justify-between">
          <div className="flex flex-col gap-y-2">
            <h4 className="leading-tight text-left font-bold text-neutral-800">
              {howMightWe}
            </h4>
            <div className="flex flex-row gap-x-2">{listSkills}</div>
          </div>
          <img
            src={cover}
            className="w-full border-2 border-neutral-800 rounded-lg"
          ></img>
        </div>
      </a>
    </div>
  );
}
