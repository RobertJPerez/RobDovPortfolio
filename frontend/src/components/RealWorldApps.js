import React from 'react';
import { Link } from 'react-router-dom';
import RobLaptop from '../images/RobLaptop.jpg';

function RealWorldApps() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center min-h-screen px-4 md:px-0 element">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
        <h1 className="font-oleo text-center text-2xl md:text-4xl">Blog:</h1>
        <img
          src={RobLaptop}
          alt="Rob Grad"
          className="w-full max-w-[250px] mx-auto mt-4"
        />
        <div className="text-left mt-10">
          <h2 className="font-raleway text-xl md:text-2xl">Real World Apps</h2>
          <p className="text-base text-gray-600">Jul 19. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            Transitioning from college to my internship at Sentry Interactive
            Holdings has been a revelation. The contrast is clear: in college,
            we coded for grades; at Sentry, we code for real-world impact. A
            prime example is my involvement with the "Anywhere AI" platform.
            It’s not just another project; it's a product that real users will
            engage with and rely upon.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            At Sentry, every contribution directly shapes the Anywhere AI
            platform, adding both thrill and responsibility to each line of code
            I write. The collective spirit here is palpable, even in our compact
            team. Everyone's insights are vital, making our platform robust and
            dynamic.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            These initial weeks at Sentry have been a blend of challenge and
            reward. From the theoretical studies of school to the hands-on
            application now, this journey has been nothing short of eye-opening
            to the progress that I've made. I’m energized to continue this path
            and see where the Anywhere AI platform goes next.
          </p>
        </div>
        <Link to="/" className="home-link-button mb-3">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default RealWorldApps;
