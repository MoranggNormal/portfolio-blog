const Presentation = ({ loading }: any) => {
  const lastName = 'Peixoto';
  const rainbowColors = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'];

  return (
    <div
      className="flex h-screen items-center justify-center bg-slate-50"
      id="top"
    >
      <div className="mx-auto max-w-2xl py-4 sm:max-w-sm lg:max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Euller &nbsp;
            {rainbowColors.map((item, index) => (
              <span className={item} key={index}>
                {lastName[index]}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg">Backend Developer & DevOps Enthusiast</p>
          <p className="mx-4 mt-6 text-lg leading-8">
            Passionate about efficient backend systems and DevOps practices.
            Specializing in Docker, AWS and Databases, building scalable
            infrastructure. Excited to learn and contribute to innovative
            projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 ">
            <a
              href="https://w.app/epeixoto"
              target="_blank"
              className="flex w-[310px] items-center justify-center rounded px-4 py-1 font-semibold text-slate-800 ring-1 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-green-300 hover:text-white hover:ring-green-300"
            >
              {loading ? (
                <div className="mr-2 h-4 w-4 animate-pulse rounded-full bg-gray-300"></div>
              ) : (
                <i className="fa-brands fa-whatsapp  mr-2"></i>
              )}
              Contact Me on WhatsApp
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center gap-x-6 ">
            <a
              href="/cv.pdf"
              className="rounded px-4 py-1 font-semibold text-slate-800 ring-1 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-gray-900/20 hover:drop-shadow-3xl"
            >
              Download CV
            </a>
            <a
              href="#"
              className="rounded px-4 py-1 font-semibold text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-1 hover:ring-gray-900/20 hover:drop-shadow-3xl"
            >
              Visit my Blog <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
