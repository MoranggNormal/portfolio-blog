import React from 'react';

const LatestBlogPosts = () => {
  return (
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
  );
};

export default LatestBlogPosts;
