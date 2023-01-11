export default function ProjectCard({ title, projectScope, cover, link }) {
  return (
    <div className="pt-4 pr-4 pb-4">
      <a href={link}>
        <img src={cover} className="rounded-r-xl rounded-l-xl"></img>
        <h3 className="text-4xl font-bold text-left text-zinc-400 pt-2">
          {title}
        </h3>
        <h4 className="text-left w-96 pt-2 font-semibold text-zinc-400">
          {projectScope}
        </h4>
      </a>
    </div>
  );
}
