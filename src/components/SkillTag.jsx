export default function SkillTag({ skill }) {
  return (
    <div className="border-2 border-neutral-800 rounded-lg p-2 shadow">
      <body className=" text-xs leading-tight text-center md:text-left text-neutral-800">
        {skill}
      </body>
    </div>
  );
}
