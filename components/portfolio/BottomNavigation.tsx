import React from 'react';

const navigation = [
  {
    name: 'Return to top',
    className: 'fa-solid fa-arrow-up',
    href: '#top',
  },
  {
    name: 'Technical Expertise',
    className: 'fa-solid fa-code',
    href: '#technical-expertise',
  },
  {
    name: 'Work History',
    className: 'fa-solid fa-suitcase',
    href: '#work-history',
  },
  {
    name: 'Projects',
    className: 'fa-regular fa-lightbulb',
    href: '#projects',
  },
  {
    name: 'Education',
    className: 'fa-solid fa-book',
    href: '#formation',
  },
  {
    name: 'Skills',
    className: 'fa-solid fa-cubes',
    href: '#skills',
  },
];

const BottomNavigation = () => {
  return (

    <div className="rounded fixed bottom-10 left-1/2 transform -translate-x-1/2 border-gray-800 ring-1 ring-gray-900/10 bg-white  p-4  flex justify-center items-center space-x-4">
       {navigation.map((item) => (
            <a
              key={item.name}
              title={item.name}
              href={item.href}
              className="duration-20  text-xl font-semibold transition-transform hover:scale-150"
            >
              <i className={item.className + ' text-slate-800 p-2 hover:drop-shadow-3xl'}></i>
            </a>
          ))}
    </div>

  );
};

export default BottomNavigation;
