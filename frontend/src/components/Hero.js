import React, { useRef, useCallback, useState } from 'react';
import '../App.css';
import { Tooltip } from 'react-tooltip';
import RobGrad from '../images/RobGrad.png';
import RobPencil from '../images/RobPencil.png';
import RobSmile from '../images/RobSmile.png';
import RobLaptop from '../images/RobLaptop.jpg';
import 'react-tooltip/dist/react-tooltip.css';
import Carousel from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogCarousel from './BlogCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBriefcase,
  faGem,
  faNewspaper,
  faEnvelope,
  faArrowPointer,
  faServer,
  faCode,
  faPuzzlePiece,
  faTree,
  faFlaskVial,
  faPeopleGroup,
  faBolt,
  faClock,
  faWalkieTalkie,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const TOOLTIP_IDS = [
  'tooltip1',
  'tooltip2',
  'tooltip3',
  'tooltip4',
  'tooltip5',
];
const DIV_IDS = ['div1', 'div2', 'div3', 'div4', 'div5'];
const BUTTON_NAMES = ['Home', 'Career', 'Values', 'Blog', 'Contact'];

const BUTTON_ICONS = [faHouse, faBriefcase, faGem, faNewspaper, faEnvelope];

const TooltipButton = ({ tooltipId, tooltipContent, handleClick, icon }) => (
  <button
    data-tooltip-id={tooltipId}
    data-tooltip-content={tooltipContent}
    className="header-button"
    onClick={handleClick}
  >
    <FontAwesomeIcon icon={icon} />
    <Tooltip
      id={tooltipId}
      place="bottom"
      type="dark"
      className="rounded text-white"
    />
  </button>
);

function Hero() {
  const divRefs = useRef(DIV_IDS.map(() => React.createRef()));
  const [activeSkill, setActiveSkill] = useState('technical');

  const techSkills = [
    {
      id: 0,
      title: 'Frontend Development',
      image: faArrowPointer,
    },
    {
      id: 1,
      title: 'Backend Development',
      image: faCode,
    },
    {
      id: 2,
      title: 'Web Applications & Hosting',
      image: faServer,
    },
    {
      id: 3,
      title: 'Algorithms & Data Structures',
      image: faTree,
    },
    {
      id: 4,
      title: 'API Development',
      image: faPuzzlePiece,
    },
    {
      id: 5,
      title: 'Test Driven Deployment',
      image: faFlaskVial,
    },
  ];

  const softSkills = [
    {
      id: 0,
      title: 'Agile Teamwork & Interpersonal Skills',
      image: faPeopleGroup,
    },
    {
      id: 1,
      title: 'Rapid Adaptability',
      image: faBolt,
    },
    {
      id: 2,
      title: 'Time Management',
      image: faClock,
    },
    {
      id: 3,
      title: 'Effective Communication',
      image: faWalkieTalkie,
    },
    {
      id: 4,
      title: 'Creativity & Innovation',
      image: faLightbulb,
    },
    {
      id: 5,
      title: 'Problem Solving',
      image: faPuzzlePiece,
    },
  ];

  const handleClick = useCallback((divIndex) => {
    const currentDiv = divRefs.current[divIndex].current;

    if (currentDiv) {
      currentDiv.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div>
      <div className="header space-x-14 ph:hidden ph:block">
        {TOOLTIP_IDS.map((tooltipId, i) => (
          <TooltipButton
            key={tooltipId}
            tooltipId={tooltipId}
            tooltipContent={BUTTON_NAMES[i]}
            handleClick={() => handleClick(i)}
            icon={BUTTON_ICONS[i]}
          />
        ))}
      </div>

      <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll lp:scale-90 lp:mt-6">
        <div
          ref={divRefs.current[0]}
          id="div1"
          className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center font-raleway ph:-mt-4"
        >
          <img
            src={RobGrad}
            alt="Rob Grad"
            className="img-contained ph:scale-70"
          />
          <h3 className="text-gray-800 sm:mt-2 ph:-mb-2">Welcome, I'm</h3>
          <h1 className="font-oleo font-raleway ph:-mb-10 sm:-mb-8 sm:-mt-4 mr-12">
            Robert
          </h1>
          <h1 className="font-oleo ml-10">Perez</h1>
          <h3 className="font-raleway -mt-2 mb-3">
            Agile Certified Full Stack Engineer
          </h3>
          <div className="quoteBox bg-black p-1 rounded flex items-center justify-center w-[500px] mx-auto ph:w-[320px] ">
            <p className="text-white ph:text-sm text-base font-raleway leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0 w-3/4 flex items-center justify-center mt-9">
              I turn ideas into outstanding Full Stack Applications with
              Effective Collaboration, that results in Team Success, Client
              Satifaction, User Engagment, and Ground Breaking Products.
            </p>
          </div>
          <p className="text-base sm:px-12 w-[500px] text-gray-800 sm:mt-4 ph:text-sm ph:w-[300px]">
            Let’s start by looking at some of my work history and past
            accomplishments to back this up!
          </p>
        </div>

        <div
          ref={divRefs.current[1]}
          id="div2"
          className="snap-start bg-white w-screen h-screen flex items-center justify-center career-container"
        >
          <div className="w-full sm:w-1/2 h-screen flex flex-row items-center justify-center bg-white">
            <div className="w-1/2 flex items-center justify-center hidden lg:block mr-7">
              <img
                src={RobSmile}
                alt="Rob"
                className="object-cover h-full w-[500px] img-contained2 items-center justify-center imgmult"
              />
            </div>

            <div className="career-content w-2/3 sm:w-[550px] sm:p-0 flex flex-col">
              <h2 className="font-oleo">Career</h2>
              {showSummary ? (
                <div className="font-raleway text-base text-justify mb-8 justify-center text-gray-800">
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden font-bold">
                    I work hard and don't let roadblocks discourage me.
                  </p>
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden font-bold">
                    I'm always looking for ways to improve.
                  </p>
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden font-bold">
                    I face every challenge with a smile.
                  </p>
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden font-bold">
                    Creating is my purpose.
                  </p>
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden font-bold">
                    Creating collaboratively is my passion.
                  </p>
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden font-bold">
                    Reading and board games are my hobbies.
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden">
                    Born in the year 2000, my life has been characterized by
                    constant change and innovation. From an early age, I was
                    captivated by the transformative power of technology. My
                    passion began to manifest during my teenage years when I
                    delved into programming, creating modifications for my
                    favorite games. This was my initial foray into the realm of
                    digital creation, fulfilling my desire to innovate and craft
                    better experiences.
                  </p>
                  <p className="font-raleway text-base text-justify justify-center text-gray-800 peer-checked:hidden">
                    In a world ever-evolving with technology, I took an earnest
                    leap towards my dream, immersing myself in the depths of
                    Computer Science at the University of Delaware. This wasn't
                    just education; it was a metamorphosis. Transforming a
                    childhood curiosity into a profound skill, I mastered the
                    art and science of creation, innovation, and resilience. The
                    year 2023 marked another milestone. Fresh from academia, I
                    ventured into the professional realm, joining Sentry
                    Interactive Holdings. As a Full Stack Engineer Intern, I now
                    channel my passion into shaping the future with the AI
                    Anywhere Platform.
                  </p>
                </>
              )}
              <div className="space-x-4 mt-5 ph:mt-1">
                <a
                  href="https://www.linkedin.com/in/robjperez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white rounded px-4 py-3"
                >
                  Qualifications
                </a>
                <button
                  className="border-black border-2 text-black rounded px-4 py-2"
                  onClick={() => handleClick(4)}
                >
                  Contact
                </button>
                <button
                  className="underline text-gray-600"
                  onClick={() => setShowSummary(!showSummary)}
                >
                  TL;DR
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="snap-start bg-white w-screen h-screen flex items-center justify-center journey-container">
          <div className="w-full sm:w-1/2 h-screen flex flex-row items-center justify-center bg-white">
            <div className="journey-content w-full sm:w-[500px] sm:p-0 flex flex-col items-center justify-center ph:scale-90">
              <h2 className="font-oleo mb-4">My Journey</h2>

              <div className="relative w-[400px] overflow-hidden sm:ml-9 mb-5">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">University of Delaware</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg text-justify text">
                    At the University of Delaware, I dove deep into a rigorous
                    Computer Science program. This journey transformed my
                    programming hobby into a refined craft. I mastered
                    algorithms, data structures, and both frontend and backend
                    development. Alongside the technical, I learned the
                    invaluable power of collaboration. Those transformative
                    years instilled in me a desire to contribute to something
                    larger, fueled by a world constantly seeking innovation.
                  </p>
                </div>
              </div>

              <div className="relative w-[400px] overflow-hidden sm:ml-9 mb-5">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">
                    Sentry Interactive Holdings
                  </h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg text-justify">
                    After my deep dive into C.S. at UD, I joined Sentry
                    Interactive Holdings as a Full Stack Intern. This
                    opportunity gave me the chance to work on a real world
                    application for the first time with Anywhere AI. Leveraging
                    the power of the ChatGPT API our team was able to create a
                    application that saw commercial success and exceeded
                    expectations. This experience introduced me to and helped me
                    master many new technical skills and foster agile practices
                    within the team.
                  </p>
                </div>
              </div>

              <div className="relative w-[400px] overflow-hidden sm:ml-9 mb-5">
                <input
                  type="checkbox"
                  className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                />
                <div className="bg-black h-12 w-full pl-5 flex items-center">
                  <h1 className="text-lg text-white">Contract work</h1>
                </div>
                <div className="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-80">
                  <div className="p-4"></div>
                  <p className="text-lg text-justify">
                    For years, I've undertaken side projects for loved ones.
                    Lately, I've been assisting small businesses, such as
                    Ghisalberti Dental, in expanding their client reach. My
                    hands-on experience with clients has honed my communication
                    skills, translating their ideas into reality. I prioritize
                    iterative sprints and frequent prototype reviews to adapt to
                    their evolving needs. This has allowed me to deliver a
                    fantastic full stack web application that pushed my skills
                    as a developer.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex items-center justify-center hidden lg:block mr-7">
              <img
                src={RobLaptop}
                alt="Rob"
                className="object-cover h-full w-[500px] img-contained2 items-center justify-center m-16 imgmult"
              />
            </div>
          </div>
        </div>

        <div className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center">
          <div className="flex flex-row space-x-4 ph:-mb-10">
            <button
              onClick={() => setActiveSkill('technical')}
              className={`border-2 rounded px-4 py-2 ${
                activeSkill === 'technical'
                  ? 'bg-black text-white border-black'
                  : 'text-black border-gray-200'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveSkill('soft')}
              className={`border-2 rounded px-4 py-2 ${
                activeSkill === 'soft'
                  ? 'bg-black text-white border-black'
                  : 'text-black border-gray-200'
              }`}
            >
              Soft Skills
            </button>
          </div>

          <div className="flex flex-row space-x-8 mt-9 m-10 ph:scale-65">
            {activeSkill === 'technical'
              ? techSkills.slice(0, 3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-black bg-black text-white rounded-2xl border-2 w-40 h-40 flex items-center justify-center font-raleway"
                  >
                    <FontAwesomeIcon
                      icon={skill.image}
                      alt={skill.title}
                      className="ml-1 w-10 h-10"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))
              : softSkills.slice(0, 3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-black bg-black text-white rounded-2xl border-2 w-40 h-40 flex items-center justify-center font-raleway"
                  >
                    <FontAwesomeIcon
                      icon={skill.image}
                      alt={skill.title}
                      className="ml-1 w-10 h-10"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))}
          </div>

          <div className="flex flex-row space-x-8 ph:scale-65 ph:-mt-20">
            {activeSkill === 'technical'
              ? techSkills.slice(3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-gray-200 rounded-2xl border-2 w-40 h-40 flex items-center justify-center font-raleway"
                  >
                    <FontAwesomeIcon
                      icon={skill.image}
                      alt={skill.title}
                      className="ml-1 w-10 h-10"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))
              : softSkills.slice(3).map((skill) => (
                  <div
                    key={skill.id}
                    className="border-gray-200 rounded-2xl border-2 w-40 h-40 flex items-center justify-center font-raleway"
                  >
                    <FontAwesomeIcon
                      icon={skill.image}
                      alt={skill.title}
                      className="ml-1 w-10 h-10"
                    />
                    <span>{skill.title}</span>
                  </div>
                ))}
          </div>
        </div>

        <div className="snap-start bg-white w-screen h-screen flex items-center justify-center">
          <Carousel></Carousel>
        </div>
        <div
          ref={divRefs.current[2]}
          id="div3"
          className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center"
        >
          <div className="w-full sm:w-1/2 h-screen flex flex-row items-center justify-center bg-white ph:scale-90">
            <div className="w-1/2 flex items-center justify-center hidden lg:block mr-7">
              <img
                src={RobPencil}
                alt="Rob"
                className="object-cover h-full w-[500px] img-contained2 items-center justify-center imgmult"
              />
            </div>
            <div className="career-content w-full sm:w-[550px] sm:p-0 flex flex-col">
              <h2 className="font-oleo mb-5 items-center justify-center">
                Values
              </h2>
              <h2 className="font-oleo mb-5 text-left">
                Passion for Problem Solving
              </h2>
              <p className="font-raleway text-base text-justify mb-8 justify-center text-gray-800 peer-checked:hidden items-center justify-center">
                Ever since I've started using technology I've run into
                roadblocks. While most are detered by these obstacles I have
                always been one to hunker down, look at the problem from a
                different angle, and find a solution. This passion for problem
                solving has been the driving force behind my success as a
                developer and led me to achieve things I only could dream of
                years ago.
              </p>
              <h2 className="font-oleo mb-5 text-left">
                Agility and Adaptability
              </h2>
              <p className="font-raleway text-base text-justify justify-center text-gray-800 peer-checked:hidden items-center justify-center">
                One of the biggest changes in my life came with the introduction
                of agile. This methodology has revolutionized the way I work and
                think. Many of the preconcieved notions I had about development
                were shattered and I was able to see the multiplying power of
                collaboration through agile means. I have since adopted this
                mindset by obtaining my CSM and CSD and have been able to adapt
                to any situation and thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="snap-start bg-white w-screen h-screen flex flex-col items-center justify-center">
          <div className="w-full sm:w-3/4 h-screen flex flex-row items-center justify-center bg-white ph:scale-75">
            <div className="career-content w-2/3 sm:w-[550px] sm:p-0 flex flex-col">
              <h2 className="font-oleo mb-3 text-left">Servant Leadership</h2>
              <p className="font-raleway text-base text-justify justify-center text-gray-800 peer-checked:hidden items-center justify-center">
                Being there for my team is one of my top priorities. I believe
                that helping teammates grow and succeed is the best way to
                ensure the success of the team and reach our sprint goal. I have
                always been a team player and have been able to help my team
                succeed by being a servant leader. I have been able to do this
                by being a good listener, empathetic, and by being a good
                communicator as well as being willing to put in the extra time
                with them.
              </p>
              <h2 className="font-oleo mb-2 mt-5 text-left">
                A Cross Functional Approach
              </h2>
              <p className="font-raleway text-base text-justify justify-center text-gray-800 peer-checked:hidden items-center justify-center">
                During my time at the University of Delaware I had the
                opportunity to be exposed to various different aspects in the
                world of Computer Science. This perspective has been invaluable
                to me as it has given me a unique cross functional viewpoint
                that allows me to see the big picture and participate in all
                aspects of the development process and fit into any Agile Team.
              </p>
              <h2 className="font-oleo mb-2 mt-5 text-left">
                Service with a Smile
              </h2>
              <p className="font-raleway text-base text-justify justify-center text-gray-800 peer-checked:hidden items-center justify-center">
                I have always been of the philosophy to face every challege with
                a smile. This has helped me overcome many obstacles in my life
                and has helped me grow as a person. I have been able to apply
                this to my professional life as well. I have been able to face
                every roadblock with a smile and have been able to help my team
                do the same. This has helped me grow as a developer and become a
                more welcoming person.
              </p>
            </div>
            <div className="w-1/3 flex items-center justify-center hidden lg:block ml-7">
              <img
                src={RobLaptop}
                alt="Rob"
                className="object-cover h-full w-[500px] img-contained2 items-center justify-center"
              />
            </div>
          </div>
        </div>

        <div
          ref={divRefs.current[3]}
          id="div4"
          className="snap-start bg-white w-screen h-screen text-raleway"
        >
          <BlogCarousel></BlogCarousel>
        </div>

        <div
          ref={divRefs.current[4]}
          id="div5"
          className="snap-start bg-white w-screen h-screen flex items-center justify-center font-raleway"
        >
          <div className="w-3/4 md:w-1/2 flex justify-center items-center">
            <form
              className="flex-1"
              action="https://formspree.io/f/mzblkjvg"
              method="POST"
            >
              <h2 className="font-raleway text-[24px] sm:mr-4">
                Get in Contact, Fill out the Form
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                >
                  Leave a message here.
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex justify-between lg:justify-center">
                <button
                  type="submit"
                  className="bg-black hover:bg-black text-white font-bold py-3 px-10 rounded-3xl ph:py-3 ph:px-10 mr-2"
                >
                  Submit
                </button>
                <a
                  href="https://www.linkedin.com/in/robjperez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-black text-white font-bold py-3 px-10 rounded-3xl ph:py-3 ph:px-10"
                >
                  Linkedin
                </a>
              </div>
            </form>
            <div className="flex-1 flex items-center justify-center hidden lg:flex">
              <img
                src={RobGrad}
                alt="Description"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
