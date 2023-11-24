'use client';
import React from 'react';
import useSimpleLoading from '../hooks/useSimpleLoading';

const skills = [
  {
    name: 'Git',
    className: 'fa-brands fa-git-alt',
  },
  {
    name: 'Linux',
    className: 'fa-brands fa-linux',
    easter: true,
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
    easter: true,
  },
];

const Skillset = () => {
  const loading = useSimpleLoading();

  return (
    <div
      className="flex h-screen flex-wrap content-center items-center justify-center gap-4"
      id="technical-expertise"
    >
      <div className="w-full py-12 text-center">
        <h2 className="text-3xl font-semibold lg:text-5xl">
          Elevating Projects with Technical Know-How
        </h2>
      </div>

      <div className="flex flex-wrap ">
        {skills.map((skill) => (
          <React.Fragment key={skill.name}>
            {loading ? (
              <div
                className="flex w-1/4 flex-col items-center py-4"
                key={skill.name}
              >
                <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
                <span className="mt-2 text-sm font-semibold">{skill.name}</span>
              </div>
            ) : (
              <div
                className="flex w-1/4 flex-col items-center py-4 "
                key={skill.name}
              >
                {skill?.easter ? (
                  <i
                    className={
                      skill.className +
                      ' h-10 w-10 text-4xl text-slate-800 transition-transform hover:animate-spin hover:drop-shadow-3xl '
                    }
                  ></i>
                ) : (
                  <i
                    className={
                      skill.className +
                      ' h-10 w-10 text-4xl text-slate-800 transition-transform hover:scale-150 hover:drop-shadow-3xl'
                    }
                  ></i>
                )}
                <span className="mt-2 text-sm font-semibold">{skill.name}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="w-full py-20 text-center leading-6 text-gray-500 lg:px-40 ">
        In addition to my expertise in the technologies mentioned above, I also
        have experience with <b>Kubernetes</b>, <b>Terraform</b>, <b>Next.js</b>{' '}
        and more.
        <br />I am committed to continuous learning and staying up-to-date with
        the latest advancements in the tech industry.
      </p>
    </div>
  );
};

export default Skillset;
