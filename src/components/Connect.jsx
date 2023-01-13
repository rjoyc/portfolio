export default function Connect({ linkedIn, email, github }) {
    return (
      <div className="pt-16 pb-4">
        <h3 className="text-4xl font-bold text-left text-gray-500 pt-2">let's connect!</h3>
        <span className="flex justify-start pt-6">
          <a
            className="font-semibold pr-12 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={linkedIn}
          >
            linkedIn
          </a>
          <a
            className="font-semibold pr-12 hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={email}
          >
            email
          </a>
          <a
            className="font-semibold hover:underline hover:underline-offset-4 hover:cursor-pointer hover:decoration-2"
            href={github}
          >
            github
          </a>
        </span>
      </div>
    );
  }
  