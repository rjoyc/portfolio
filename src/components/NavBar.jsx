import Logo from "../assets/temp-logo.svg"

export default function NavBar({ aboutLink, resumeLink, workLink }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <a href={workLink}>
          <img src={Logo} alt="R logo" className="w-9"></img>
        </a>
      </div>
      <div>
        <span>
          <a
            className="font-semibold pr-12 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={workLink}
          >
            work
          </a>
          <a
            className="font-semibold pr-12 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={aboutLink}
          >
            about
          </a>
          <a
            className="font-semibold hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </span>
      </div>
    </div>
  );
}
