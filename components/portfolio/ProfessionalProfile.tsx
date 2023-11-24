"use client"
import React from 'react';

import aurynLogo from '../../assets/images/auryn.jpeg';
import Image from 'next/image';
import useSimpleLoading from '../hooks/useSimpleLoading';

const ProfessionalProfile = () => {
  const loading = useSimpleLoading();

  return (
    <div className="bg-slate-50 flex items-center justify-center h-screen" id="work-history">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">Work History</h2>

        <div className="mt-8 space-y-8 lg:flex w-full">
          <div className="flex flex-col md:flex-row w-full justify-center">
            <div>
              {loading ?
                <div className="mx-auto w-[80px] h-[80px] rounded animate-pulse bg-gray-300"></div>
                :
                <Image
                  src={aurynLogo.src}
                  width={250}
                  height={250}
                  alt="Auryn Web to Print"
                  className="mx-auto h-20 w-20 rounded"
                />
              }
            </div>
            <div className="flex flex-col justify-center px-8 lg:px-8">
              <h3 className="py-4 text-center text-xl font-semibold lg:py-0 lg:text-left">
                FullStack Developer
              </h3>
              <p className="text-center text-gray-500 lg:text-left">
                • Auryn Web to Print
              </p>
              <p className="text-center text-gray-500 lg:text-left">
                • 04/2023 - Current
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
