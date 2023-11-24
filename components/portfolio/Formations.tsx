"use client"
import React from 'react';

import uninter from '../../assets/images/uninter.png';
import Image from 'next/image';
import useSimpleLoading from '../hooks/useSimpleLoading';

const Formations = () => {
  const loading = useSimpleLoading();

  return (
    <div className="flex flex-wrap items-center bg-slate-50 py-24 h-screen" id="formation">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">
          Education and Training
        </h2>

        <div className="mt-8 space-y-8">
          <div className="mt-8 w-full space-y-8 lg:flex">
            <div className="flex w-full flex-col  md:flex-row">
              <div>
                {loading ?
                  <div className="mx-auto w-[80px] h-[80px] rounded animate-pulse bg-gray-300"></div>
                  :
                  <Image
                    src={uninter.src}
                    width={250}
                    height={250}
                    alt="Uninter"
                    className="mx-auto h-20 w-20 rounded"
                  />
                }
              </div>
              <div className="flex flex-col px-8 lg:px-8">
                <h3 className="py-4 text-center text-xl font-semibold lg:py-0 lg:text-left">
                  Software Engineering
                </h3>
                <p className="text-center text-gray-500 lg:text-left">
                  • Uninter
                </p>
                <p className="text-center text-gray-500 lg:text-left">
                  • 07/2023 - 07/2028
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full space-y-8 lg:flex">
            <div className="flex w-full flex-col  md:flex-row">
              <div>
                {loading ?
                  <div className="mx-auto w-[80px] h-[80px] rounded animate-pulse bg-gray-300"></div>
                  :
                  <Image
                    src={uninter.src}
                    width={250}
                    height={250}
                    alt="Uninter"
                    className="mx-auto h-20 w-20 rounded"
                  />
                }
              </div>
              <div className="flex flex-col px-8 lg:px-8">
                <h3 className="py-4 text-center text-xl font-semibold lg:py-0 lg:text-left">
                  Analysis and Systems Development
                </h3>
                <p className="text-center text-gray-500 lg:text-left">
                  • Uninter
                </p>
                <p className="text-center text-gray-500 lg:text-left">
                  • 05/2022 - 06/2023 (Course enrollment suspended)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formations;
