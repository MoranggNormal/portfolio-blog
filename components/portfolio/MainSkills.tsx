import React from 'react';

const MainSkills = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
        Hard and Soft Skills
        </h2>

        <div className="mt-8 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-1 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
                Hard and Soft Skill 1
              </span>
            </div>

            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-2 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
                Hard and Soft Skill 2
              </span>
            </div>

            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-3 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
                Hard and Soft Skill 3
              </span>
            </div>

            <div className="flex items-center">
              <i className="fab fa-icone-habilidade-4 text-4xl text-slate-800"></i>
              <span className="ml-2 text-lg font-semibold">
                Hard and Soft Skill 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSkills;
