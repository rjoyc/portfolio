export default function ConnectButton({ title, link, button }) {
  return (
    <div className="border-2 border-neutral-800 rounded-lg p-4 shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <a href={link} className="flex flex-row justify-between items-center ">
        <h3 className="text-xl font-bold text-left text-neutral-800">
          {title}
        </h3>
        <img src={button} className="h-6"></img>
      </a>
    </div>
  );
}
