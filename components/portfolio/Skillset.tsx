import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ferumbras from '@/assets/images/gifs/Ferumbras.gif'
import warlock from '@/assets/images/gifs/Warlock.gif'
import LadyTenebris from '@/assets/images/gifs/LadyTenebris.gif';
import Goshnar from '@/assets/images/gifs/GoshnarMegalomania.gif';
import GoshnarVulnerable from '@/assets/images/gifs/GoshnarMegalomaniaVulnerable.gif';
import GoshnarAnnihilation from '@/assets/images/gifs/GoshnarMegalomaniaAnnihilation.gif';

const skills = [
  {
    name: 'Git',
    className: 'fa-brands fa-git-alt',
  },
  {
    name: 'Linux',
    className: 'fa-brands fa-linux',
    easter: true,
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
    easter: true,
  },
];

const texts = [
  {
    text: 'My journey as a developer traces back to the realms of gaming, where the intricate world of programming first captivated me. It all began with Tibia, a game that sparked my interest in creating my own servers using the expansive open-source base known as The Forgotten Server and OTClient.',
    yells: [
      "Even a rat is a better mage than you!",
      "Learn the secret of our magic! YOUR death!",
      "We don't like intruders!",
    ],
    image: warlock.src
  },
  {
    text: 'Exploring these platforms not only fueled my passion for coding but also became the cornerstone of my programming education. They served as the breeding ground for my initial forays into the world of code, allowing me to experiment, learn, and evolve.',
    yells: [
      "May the embrace of darkness kill you!",
      "I'm the one and only mistress of shadows!",
      "LADY TENEBRIS BEGINS TO CHANNEL A POWERFULL SPELL! TAKE COVER!",
    ],
    image: LadyTenebris.src
  },
  {
    text: 'The skills and insights garnered from tinkering with these tools laid the foundation for my transformation into a proficient professional. Today, equipped with a robust understanding of the most sophisticated tools prevalent in the current market, I navigate the realms of technology with confidence and expertise.',
    yells: [
      "NO ONE WILL STOP ME THIS TIME!",
      "THE POWER IS MINE!",
      "I returned from death and you dream about defeating me?",
      "Witness the first seconds of my eternal world domination!",
      "Even in my weakened state I will crush you all!",
    ],
    image: ferumbras.src
  },
  {
    text: 'This unique journey, starting from the immersive universe of Tibia to mastering intricate programming tools, has sculpted me into a seasoned developer, armed with the knowledge and skills to thrive in the ever-evolving landscape of technology.',
    yells: [],
    image: [Goshnar.src, GoshnarVulnerable.src, GoshnarAnnihilation.src]
  },

];


const Skillset = ({ loading }: any) => {

  const [darkMode, setDarkMode] = useState(false);

  const [bossYells, setBossYells] = useState({});
  const [bossImage, setBossImage] = useState(Goshnar.src);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const castYells = (yells, index, images) => {
    if (yells.length > 0) {
      const sortYell = Math.floor(Math.random() * yells.length);
      const sortedYell = yells[sortYell];
      if (yells[sortYell].includes('LADY')) {
        setTimeout(() => {
          toggleDarkMode()
        }, 2500);
      }
      setBossYells({ ...bossYells, [index]: sortedYell });
    } else {
      const sortImage = Math.floor(Math.random() * images.length);
      const sortedImage = images[sortImage];
      setBossYells({ ...bossYells, [index]: '' });
      setBossImage(sortedImage);
    }
  };

  useEffect(() => {
    if(darkMode){
      setTimeout(() => {
        toggleDarkMode()
      }, 4500);
    }

  }, [darkMode])
  


  return (
    <div
      className={`flex h-screen transition-all dark:bg-black content-center pt-40 justify-center w-full ${darkMode} ? 'dark' : ''`}
      id="technical-expertise">

      <div className="w-1/2 ">
        <div className="w-full py-12 text-center">
          <h2 className="text-3xl font-semibold lg:text-4xl dark:text-red-500">
            Elevating Projects with Technical Know-How
          </h2>
        </div>


        <div className="w-full grid grid-cols-4 gap-4 ">

          {skills.map((skill) => (
            <React.Fragment key={skill.name}>
              {loading ? (
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
                    <p className="mt-2 text-sm font-semibold">{skill.name}</p>
                  </div>
                </div>

              ) : (
                <div
                  className="text-center"
                  key={skill.name}
                >
                  {skill?.easter ? (
                    <i
                      className={
                        skill.className +
                        ' h-10 w-10 text-4xl text-slate-800 dark:text-red-500 transition-transform hover:animate-spin hover:drop-shadow-3xl '
                      }
                    ></i>
                  ) : (
                    <i
                      className={
                        skill.className +
                        ' h-10 w-10 text-4xl text-slate-800 dark:text-red-500 transition-transform hover:scale-150 hover:drop-shadow-3xl'
                      }
                    ></i>
                  )}
                  <p className="mt-2 text-sm font-semibold">{skill.name}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="w-full py-20 text-center leading-6 text-gray-500 dark:text-red-500 lg:px-20 ">
          In addition to my expertise in the technologies mentioned above, I also
          have experience with <b>Kubernetes</b>, <b>Terraform</b>, <b>Next.js</b>{' '}
          and more.
          <br />I am committed to continuous learning and staying up-to-date with
          the latest advancements in the tech industry.
        </p>
      </div>

      <div className="w-1/2 ">
        <div className="text-gray-500 dark:text-red-500 mx-20">
          {
            texts.map(({ image, text, yells }, index) => (
              <React.Fragment key={index}>
                <div className='flex items-center pt-12 relative'>
                  <Image
                    src={Array.isArray(image) ? bossImage : image}
                    width={128}
                    height={128}
                    alt="Boss from Tibia"
                    className="drop-shadow-5xl"
                    onMouseEnter={() => castYells(yells, index, image)}
                    onMouseOut={() => setBossYells('')}
                  />
                  <div className={`absolute top-6 transform translate-x-[-40%] font-semibold text-sm transition-opacity duration-300 ${bossYells[index] ? 'opacity-100' : 'opacity-0 invisible'} ${bossYells[index]?.includes('LADY') ? 'text-red-500' : 'text-orange-500'}`}>{bossYells[index]}</div>


                  <p className="mx-4">{text}</p>
                </div>
              </React.Fragment>
            ))
          }

        </div>

      </div>
    </div>
  );
};

export default Skillset;
