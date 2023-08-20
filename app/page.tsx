const navigation = [
  {
    name: 'Github - Euller Peixoto',
    className: 'fa-brands fa-github',
    href: 'https://github.com/MoranggNormal',
  },
  {
    name: 'LinkedIn - Euller Peixoto',
    className: 'fa-brands fa-linkedin',
    href: 'https://www.linkedin.com/in/euller-peixoto',
  },
  {
    name: 'Instagram - Euller Peixoto',
    className: 'fa-brands fa-instagram',
    href: 'https://www.instagram.com/eulr.sh',
  },
  {
    name: 'E-mail - Euller Peixoto',
    className: 'fa-brands fa-at',
    href: 'mailto:epeixoto.dev@gmail.com',
  },
  {
    name: 'Blog - Euller Peixoto',
    className: 'fa-solid fa-blog',
    href: '/blog',
  },
];

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

export default function Home() {
  return (
    <div>
      <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-100 bg-white">
        <nav className="flex justify-center p-6 lg:px-8" aria-label="Global">
          <div className="flex gap-x-8 lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                title={item.name}
                href={item.href}
                className="duration-20 text-xl font-semibold leading-6 transition-transform hover:scale-150"
              >
                <i className={item.className + ' text-slate-800'}></i>
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative isolate h-screen bg-slate-50 px-6 pt-28 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl py-4 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Euller Peixoto
            </h1>
            <p className="mt-6 text-lg leading-8 ">
              Backend Developer & DevOps Enthusiast
            </p>
            <p className="mt-6 text-lg leading-8 ">
              Passionate about efficient backend systems and DevOps practices.
              Specializing in Docker, AWS and databases, building scalable
              infrastructure. Excited to learn and contribute to innovative
              projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 ">
              <a
                href="#"
                className="rounded px-4 py-1 font-semibold text-slate-800 ring-1 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-gray-900/20"
              >
                Download CV
              </a>
              <a
                href="#"
                className="rounded px-4 py-1 font-semibold text-slate-800 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-1 hover:ring-gray-900/20"
              >
                Visit my Blog <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

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
          In addition to my expertise in the technologies mentioned above, I
          also have experience with Kubernetes, Terraform, Next.js and more. I
          am committed to continuous learning and staying up-to-date with the
          latest advancements in the tech industry.
        </p>
      </div>

      <div className="bg-gray-100 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold">
            Experiência Profissional
          </h2>

          <div className="mt-8 space-y-8">
            {/* Posição 1 */}
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

            {/* Posição 2 */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full text-center md:w-1/4">
                {/* Logo da Empresa */}
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

      <div className="bg-white py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold">
            Habilidades Específicas
          </h2>

          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="flex items-center">
                <i className="fab fa-icone-habilidade-1 text-4xl text-slate-800"></i>
                <span className="ml-2 text-lg font-semibold">
                  Habilidade Específica 1
                </span>
              </div>

              <div className="flex items-center">
                <i className="fab fa-icone-habilidade-2 text-4xl text-slate-800"></i>
                <span className="ml-2 text-lg font-semibold">
                  Habilidade Específica 2
                </span>
              </div>

              <div className="flex items-center">
                <i className="fab fa-icone-habilidade-3 text-4xl text-slate-800"></i>
                <span className="ml-2 text-lg font-semibold">
                  Habilidade Específica 3
                </span>
              </div>

              <div className="flex items-center">
                <i className="fab fa-icone-habilidade-4 text-4xl text-slate-800"></i>
                <span className="ml-2 text-lg font-semibold">
                  Habilidade Específica 4
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="bg-white py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold">Blog</h2>

          <div className="mt-8">
            <p className="text-center text-gray-500">
              Fique ligado no meu blog, onde compartilho conhecimento e
              experiências.
            </p>

            <div className="mt-6 flex justify-center px-3 py-1 text-sm ">
              <a
                href="#"
                className="rounded px-4 py-2 font-semibold  text-slate-800 ring-1 ring-gray-900/10 transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white hover:ring-gray-900/20"
              >
                Ver Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
