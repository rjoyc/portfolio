import Logo from "../assets/logo-new.svg";

export default function NavBar({ aboutLink, resumeLink, workLink }) {
  return (
    <div className="flex items-center justify-between px-4">
      <div>
        <a href={workLink}>
          <img src={Logo} alt="R logo" className="w-9"></img>
        </a>
      </div>
      <div className="flex justify-between gap-x-6">
        <div>
          <a
            className="font-semibold text-neutral-800 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={workLink}
          >
            work
          </a>
        </div>
        <div>
          <a
            className="font-semibold text-neutral-800 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={aboutLink}
          >
            about
          </a>
        </div>
        <div>
          <a
            className="font-semibold text-neutral-800 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </div>
      </div>
    </div>
  );
}
