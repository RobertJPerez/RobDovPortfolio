import React from 'react';
import { Link } from 'react-router-dom';
import RobGrad from '../images/RobGrad.png';

function InternshipSecured() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center min-h-screen px-4 md:px-0 element">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
        <h1 className="font-oleo text-center">Blog:</h1>
        <img src={RobGrad} alt="Rob Grad" className="w-[250px] mx-auto mt-4" />
        <div className="text-left mt-10">
          <h2 className="font-raleway">Internship Secured</h2>
          <p className="text-base text-gray-600">Jul 1. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            Just a month after the ceremonial toss of my graduation cap at the
            University of Delaware, I found myself stepping into a thrilling new
            realm: the world of professional tech at Sentry Interactive
            Holdings.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            The transition from academia to a professional setting is often
            painted as a daunting leap. But for me, it felt like the opening of
            a door I'd been inching towards throughout my university years. And
            what lay beyond that door? An internship opportunity with Sentry
            Interactive Holdings, an experience I am immensely grateful for.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            The University of Delaware, with its rigorous curriculum and
            supportive community, was instrumental in shaping my foundational
            knowledge and passion for technology. And while the theoretical
            knowledge gained there is invaluable, diving headfirst into
            practical applications has its own set of exhilarations.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            Joining Sentry Interactive Holdings, I've been met with boundless
            enthusiasm, collaborative spirits, and challenges that fuel my
            ever-growing passion for this field. Every day, I'm reminded of the
            profound difference between classroom simulations and real-world
            problem solving. But it's this very difference, this chasm between
            theory and practice, that I'm excited to navigate.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            As I continue this journey, I’m filled with gratitude for this
            opportunity and eagerness to make the most of it. Stay with me, as I
            delve deeper into the intricacies of tech and share more about my
            experiences at Sentry Interactive Holdings.
          </p>
        </div>
        <Link to="/" className="home-link-button mb-3">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default InternshipSecured;
