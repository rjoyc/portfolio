export default function ProjectCard({ title, projectScope, cover, link }) {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <a href={link}>
        <img src={cover} className="rounded-r-xl rounded-l-xl"></img>
        <h3 className="text-4xl font-bold text-left text-neutral-500 pt-2">
          {title}
        </h3>
        <h4 className="text-left w-96 pt-2 font-semibold text-neutral-500">
          {projectScope}
        </h4>
      </a>
    </div>
  );
}
