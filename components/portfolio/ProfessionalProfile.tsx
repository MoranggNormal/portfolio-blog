import React from 'react';

import aurynLogo from '../../assets/images/auryn.jpeg';
import pixelLaboLogo from '../../assets/images/pixellabo.png';
import revolutionLogo from '../../assets/images/revolution.jpeg';
import Image from 'next/image';
import Link from 'next/link';

const ProfessionalProfile = ({ loading }: any) => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-slate-50"
      id="work-history"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-semibold">Work History</h2>

        <div className="mt-8 w-full space-y-8 lg:flex">
          <div className="flex w-full flex-col justify-center md:flex-row">
            <Link href="https://pixellabo.com.br" target='_blank'>
              <div>
                {loading ? (
                  <div className="mx-auto h-[80px] w-[80px] animate-pulse rounded bg-gray-300"></div>
                ) : (
                  <Image
                    src={pixelLaboLogo.src}
                    width={250}
                    height={250}
                    alt="Auryn Web to Print"
                    className="mx-auto h-20 w-20 rounded transition-all hover:scale-110"
                  />
                )}
              </div>
            </Link>
            <div className="flex flex-col justify-center px-8 lg:px-8">
              <h3 className="py-4 text-center text-xl font-semibold lg:py-0 lg:text-left">
                Lead Full Stack Developer and Team Leader
              </h3>
              <p className="text-center text-gray-500 lg:text-left">
                • Pixel Labo
              </p>
              <p className="text-center text-gray-500 lg:text-left">
                • 12/2023 - Current
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full space-y-8 lg:flex">
          <div className="flex w-full flex-col  md:flex-row">
              <div>
                {loading ? (
                  <div className="mx-auto h-[80px] w-[80px] animate-pulse rounded bg-gray-300"></div>
                ) : (
                  <Image
                    src={revolutionLogo.src}
                    width={250}
                    height={250}
                    alt="Auryn Web to Print"
                    className="mx-auto h-20 w-20 rounded"
                  />
                )}
              </div>
            <div className="flex flex-col justify-center px-8 lg:px-8">
              <h3 className="py-4 text-center text-xl font-semibold lg:py-0 lg:text-left">
                Python Developer
              </h3>
              <p className="text-center text-gray-500 lg:text-left">
                • Instituto Revolution
              </p>
              <p className="text-center text-gray-500 lg:text-left">
                • 01/2024 - 02/2024
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full space-y-8 lg:flex">
          <div className="flex w-full flex-col md:flex-row">
            <div>
              {loading ? (
                <div className="mx-auto h-[80px] w-[80px] animate-pulse rounded bg-gray-300"></div>
              ) : (
                <Image
                  src={aurynLogo.src}
                  width={250}
                  height={250}
                  alt="Auryn Web to Print"
                  className="mx-auto h-20 w-20 rounded transition-all hover:scale-110"
                />
              )}
            </div>
            <div className="flex flex-col justify-center px-8 lg:px-8">
              <h3 className="py-4 text-center text-xl font-semibold lg:py-0 lg:text-left">
                FullStack Developer
              </h3>
              <p className="text-center text-gray-500 lg:text-left">
                • Auryn Web to Print
              </p>
              <p className="text-center text-gray-500 lg:text-left">
                • 04/2022 - 01/2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
