import React from 'react';

const HardAndSoftSkills = () => {
  return (
    <div
      className="flex h-screen flex-col items-center justify-center bg-slate-50 py-24 lg:flex-row"
      id="skills"
    >
      <div className="py-8">
        <h2 className="text-center text-3xl font-semibold">Hard Skills</h2>

        <div className="mt-8 space-y-4 px-8 lg:px-20">
          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Experience in Project Management
            </span>
          </div>

          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Familiarity in SQL (Structured Query Language)
            </span>
          </div>

          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Experience with cloud platforms such as AWS, Digital Ocean, or
              Google Cloud.
            </span>
          </div>

          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Familiarity with server monitoring and logging tools.
            </span>
          </div>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-center text-3xl font-semibold">Soft Skills</h2>

        <div className="mt-8 space-y-4 px-8 lg:px-20">
          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Knowledge of Agile Methodologies
            </span>
          </div>

          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Strong Team Collaboration
            </span>
          </div>

          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Problem Solving
            </span>
          </div>

          <div className="flex items-center">
            <span className="ml-2 text-lg font-semibold">
              • Strong English Proficiency
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardAndSoftSkills;
