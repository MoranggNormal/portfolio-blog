import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">Contato</h2>

        <div className="mt-8">
          <p className="text-center text-gray-500">
            Ficaria feliz em entrar em contato. Sinta-se à vontade para me
            mandar uma mensagem!
          </p>

          <div className="mt-6 flex justify-center px-3 py-1 text-sm ">
            <a
              href="#"
              className="rounded px-4 py-2 font-semibold  text-slate-800 ring-1 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-gray-900/20"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
