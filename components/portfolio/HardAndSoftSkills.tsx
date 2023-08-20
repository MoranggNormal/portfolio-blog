import React from 'react';

const HardAndSoftSkills = () => {
  return (
    <div className="bg-white py-24 flex justify-center">
      <div className="">
        <h2 className="text-center text-3xl font-semibold">
          Hard Skills
        </h2>

        <div className="mt-8 space-y-8 px-20">
            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-1 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
              • Hard Skill 1
              </span>
            </div>

            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-2 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
              • Hard Skill 2
              </span>
            </div>

        </div>
      </div>

      <div className="">
        <h2 className="text-center text-3xl font-semibold">
          Soft Skills
        </h2>

        <div className="mt-8 space-y-8 px-20">
            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-1 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
              • Soft Skill 1
              </span>
            </div>

            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-2 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
              • Soft Skill 2
              </span>
            </div>

        </div>
      </div>
    </div>
  );
};

export default HardAndSoftSkills;
