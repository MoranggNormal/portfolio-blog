import React from 'react';

const MainProjects = () => {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
          Projetos Destacados
        </h2>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <img
                src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg"
                alt="Projeto 1"
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold">Nome do Projeto 1</h3>
              <p className="text-gray-500">Descrição concisa do projeto.</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>Tecnologias utilizadas: Next.js, Tailwind CSS, ...</li>
                <li>Destaque 1: ...</li>
                <li>Destaque 2: ...</li>
              </ul>
              <a href="#" className="mt-4 text-slate-800 hover:underline">
                Ver Projeto
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
              <img
                src="https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg"
                alt="Projeto 2"
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-semibold">Nome do Projeto 2</h3>
              <p className="text-gray-500">Descrição concisa do projeto.</p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>Tecnologias utilizadas: Next.js, Tailwind CSS, ...</li>
                <li>Destaque 1: ...</li>
                <li>Destaque 2: ...</li>
              </ul>
              <a href="#" className="mt-4 text-slate-800 hover:underline">
                Ver Projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
