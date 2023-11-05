import React from 'react';

const skills = [
  {
    name: 'Git',
    className: 'fa-brands fa-git-alt',
  },
  {
    name: 'Linux',
    className: 'fa-brands fa-linux',
    easter: true
  },
  {
    name: 'Bash',
    className: 'fa-solid fa-terminal',
  },
  {
    name: 'Docker',
    className: 'fa-brands fa-docker',
  },
  {
    name: 'AWS',
    className: 'fa-brands fa-aws',
  },
  {
    name: 'SQL',
    className: 'fa-solid fa-database',
  },
  {
    name: 'PHP',
    className: 'fa-brands fa-php',
  },
  {
    name: 'Laravel',
    className: 'fa-brands fa-laravel',
  },
  {
    name: 'Symfony',
    className: 'fa-brands fa-symfony',
  },
  {
    name: 'Python',
    className: 'fa-brands fa-python',
  },
  {
    name: 'Javascript',
    className: 'fa-brands fa-js',
  },
  {
    name: 'React',
    className: 'fa-brands fa-react',
    easter: true
  },
];

const Skillset = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 justify-center h-screen content-center">
      <div className="w-full py-12 text-center">
        <h2 className="text-3xl font-semibold lg:text-5xl">
          Elevating Projects with Technical Know-How
        </h2>
      </div>

      <div className="flex flex-wrap ">
        {skills.map((skill) => (
          <div
            className="flex w-1/4 flex-col items-center py-4"
            key={skill.name}
          >
            {skill?.easter ?
            <i className={skill.className + ' text-4xl transition-transform text-slate-800 hover:drop-shadow-3xl hover:animate-spin '}></i>
           :
            <i className={skill.className + ' text-4xl transition-transform text-slate-800 hover:drop-shadow-3xl hover:scale-150'}></i>
          }
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
      <p className="w-full lg:px-40 py-20 leading-6 text-center text-gray-500 ">
        In addition to my expertise in the technologies mentioned above, I also
        have experience with <b>Kubernetes</b>, <b>Terraform</b>, <b>Next.js</b> and more.
        <br/>
        I am
        committed to continuous learning and staying up-to-date with the latest
        advancements in the tech industry.
      </p>
    </div>
  );
};

export default Skillset;
