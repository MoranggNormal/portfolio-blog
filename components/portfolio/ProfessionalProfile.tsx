import React from 'react';

const ProfessionalProfile = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
          Experiência Profissional
        </h2>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg"
                alt="Nome da Empresa 1"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Título do Cargo</h3>
              <p className="text-gray-500">
                Nome da Empresa 1 • Data de Início - Data de Término
              </p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>Responsabilidade 1</li>
                <li>Responsabilidade 2</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg"
                alt="Nome da Empresa 2"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Título do Cargo</h3>
              <p className="text-gray-500">
                Nome da Empresa 2 • Data de Início - Data de Término
              </p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>Responsabilidade 1</li>
                <li>Responsabilidade 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
