import React from 'react';

const Formations = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
          Educação e Formação
        </h2>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="logo-instituicao-1.png"
                alt="Nome da Instituição 1"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Nome do Curso 1</h3>
              <p className="text-gray-500">
                Nome da Instituição 1 • Data de Conclusão
              </p>
              <p>Descrição do curso e principais tópicos abordados.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="logo-instituicao-2.png"
                alt="Nome da Instituição 2"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Nome do Curso 2</h3>
              <p className="text-gray-500">
                Nome da Instituição 2 • Data de Conclusão
              </p>
              <p>Descrição do curso e principais tópicos abordados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
