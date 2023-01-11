export default function ProjectCard({ title, projectScope, cover, link }) {
  return (
    <div className="pt-4 pr-4 pb-4">
      <a href={link}>
        {/* <div className="bg-zinc-300 h-40 w-96 rounded-r-xl rounded-l-xl"></div> */}
        <img src={cover} className="rounded-r-xl rounded-l-xl w-1/2"></img>
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
