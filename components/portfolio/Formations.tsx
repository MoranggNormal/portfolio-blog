import React from 'react';

const Formations = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
          Education and Training
        </h2>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="https://via.placeholder.com/800x600?text=Slide%203"
                alt="Institution Name 1"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Course Name 1</h3>
              <p className="text-gray-500">
                Institution Name 1 • Conclusion Date
              </p>
              <p>Course description.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="https://via.placeholder.com/800x600?text=Slide%203"
                alt="Institution Name 2"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Course Name 2</h3>
              <p className="text-gray-500">
                Institution Name 2 • Conclusion Date
              </p>
              <p>Course description.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
