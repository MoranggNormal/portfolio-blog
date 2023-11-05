import React from 'react';

const Presentation = () => {
  return (
    <div className="bg-slate-50 flex items-center justify-center h-screen">
      <div className="mx-auto max-w-2xl py-4 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Euller Peixoto
          </h1>
          <p className="mt-6 text-lg">Backend Developer & DevOps Enthusiast</p>
          <p className="mt-6 text-lg leading-8">
            Passionate about efficient backend systems and DevOps practices.
            Specializing in Docker, AWS and databases, building scalable
            infrastructure. Excited to learn and contribute to innovative
            projects.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 ">
            <a
              href="#"
              className="rounded px-4 py-1 font-semibold text-slate-800 ring-1 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-gray-900/20"
            >
              Download CV
            </a>
            <a
              href="#"
              className="rounded px-4 py-1 font-semibold text-slate-800 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-1 hover:ring-gray-900/20"
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
