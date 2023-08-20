import React from 'react';

const ProfessionalProfile = () => {
  return (
    <div className="bg-slate-50 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
          Work History
        </h2>

        <div className="mt-8 space-y-8">
          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="https://via.placeholder.com/800x600?text=Slide%203"
                alt="Company Name 1"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Cargo Title</h3>
              <p className="text-gray-500">
                Company Name 1 • Start Date - End Date
              </p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>Responsability 1</li>
                <li>Responsability 2</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full text-center md:w-1/4">
              <img
                src="https://via.placeholder.com/800x600?text=Slide%203"
                alt="Company Name 2"
                className="mx-auto h-20 w-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h3 className="text-xl font-semibold">Cargo Title</h3>
              <p className="text-gray-500">
                Company Name 2 • Start Date - End Date
              </p>
              <ul className="ml-6 mt-4 list-disc space-y-2">
                <li>Responsability 1</li>
                <li>Responsability 2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
