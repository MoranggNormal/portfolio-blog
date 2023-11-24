"use client"
import React from 'react';
import useSimpleLoading from '../hooks/useSimpleLoading';

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

const Header = () => {
  const loading = useSimpleLoading()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white">
      <nav className="flex justify-center p-6 lg:px-8" aria-label="Global">

        <div className="flex gap-x-4 lg:gap-x-12">
          {navigation.map((item) => (
            <React.Fragment key={item.name}>
              {loading ?
                (<div
                  className="h-10 w-10 bg-gray-300 rounded-full animate-pulse">
                </div>) :
                (
                  <a
                    title={item.name}
                    href={item.href}
                    className="duration-20 text-xl font-semibold transition-transform hover:scale-150 flex items-center relative">
                    <i className={`${item.className} h-10 w-10 text-slate-800 p-2 hover:drop-shadow-3xl`}></i>
                  </a>
                )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
