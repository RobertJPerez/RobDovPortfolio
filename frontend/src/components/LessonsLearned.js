import React from 'react';
import { Link } from 'react-router-dom';
import RobGrad from '../images/RobGrad.png';

function LessonsLearned() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <h1 className="font-oleo text-center">Blog:</h1>
        <img src={RobGrad} alt="Rob Grad" className="w-[250px] mx-auto mt-4" />
        <div className="text-left mt-10">
          <h2 className="font-raleway">Lessons Learned</h2>
          <p className="text-base text-gray-600">Sept 30. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            It's with a heavy heart yet immense gratitude that I reflect on my
            time with the team at Sentry Interactive Holdings. This internship
            transcended the conventional boundaries of academic exposure,
            molding me into a proficient software engineer. Immersing in the
            complete development cycle of a product unveiled multifaceted
            dimensions of software creation that my academic tenure hadn't. This
            invaluable experience equipped me for professional software
            development and fortified my cross-functional capabilities. Let's
            explore some of the pinnacle moments of my tenure.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            My journey at Sentry Interactive Holdings was punctuated by the
            development of 'Anywhere AI', a versatile Google Chrome extension
            enabling users to effortlessly engage with the ChatGPT API across
            any webpage. This project was a mosaic of diverse technologies,
            emphasizing API development and Middleware Creation. While I had
            brushed against these in academia, implementing them in a real-world
            scenario endowed a richer understanding. Witnessing the evolution of
            an idea into a tangible tool enhancing user experiences was the very
            epitome of my motivation to pursue this profession.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            Beyond the tangible product creation, I cherish the Agile
            methodologies I integrated into our compact team. Optimizing our
            daily scrum rituals and fostering an atmosphere of uninhibited
            creativity not only augmented our productivity but also enhanced our
            adaptability. My cross-functional approach ensured a dynamic,
            responsive team environment. Overcoming hurdles collaboratively and
            ensuring mutual success was immensely fulfilling. I'm eager to
            channel this cross-functional spirit and Agile mindset into my
            subsequent endeavors.
          </p>
        </div>
        <Link to="/" className="home-link-button">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default LessonsLearned;
