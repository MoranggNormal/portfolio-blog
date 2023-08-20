import React from 'react';

const skills = [
  {
    name: 'Git',
    className: 'fa-brands fa-git-alt',
  },
  {
    name: 'Linux',
    className: 'fa-brands fa-linux',
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
  },
];

const Skillset = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 ">
      <div className="w-full py-12 text-center">
        <h2 className="px- text-3xl font-semibold lg:text-5xl">
          Elevating Projects with Technical Know-How
        </h2>
      </div>

      <div className="flex flex-wrap justify-center py-6">
        {skills.map((skill) => (
          <div
            className="flex w-1/4 flex-col items-center py-4"
            key={skill.name}
          >
            <i className={skill.className + ' text-4xl text-slate-800'}></i>
            <span className="mt-2 text-sm font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
      <p className="w-full px-40 py-10 text-center text-gray-500 ">
        In addition to my expertise in the technologies mentioned above, I also
        have experience with Kubernetes, Terraform, Next.js and more. I am
        committed to continuous learning and staying up-to-date with the latest
        advancements in the tech industry.
      </p>
    </div>
  );
};

export default Skillset;
