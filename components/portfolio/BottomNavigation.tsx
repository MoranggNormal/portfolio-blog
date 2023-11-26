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
  // {
  //   name: 'Projects',
  //   className: 'fa-regular fa-lightbulb',
  //   href: '#projects',
  // },
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

const BottomNavigation = ({loading}: any) => {

  return (
    <div className="fixed bottom-10 left-1/2 flex -translate-x-1/2 transform items-center justify-center space-x-4 rounded  border-gray-800  bg-white p-4 ring-1 ring-gray-900/10">
      {navigation.map((item) => (
        <React.Fragment key={item.name}>
          {loading ? (
            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
          ) : (
            <a
              title={item.name}
              href={item.href}
              className="duration-20 h-10 w-10 text-center text-xl font-semibold transition-transform hover:scale-150"
            >
              <i
                className={`${item.className} p-2 text-slate-800 hover:drop-shadow-3xl`}
              ></i>
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BottomNavigation;
