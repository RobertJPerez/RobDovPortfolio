import React from 'react';
import { Link } from 'react-router-dom';
import RobLaptop from '../images/RobLaptop.jpg';

function SiteDone() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center min-h-screen px-4 md:px-0 element">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
        <h1 className="font-oleo text-center text-2xl md:text-4xl">Blog:</h1>
        <img
          src={RobLaptop}
          alt="Rob with Certificates"
          className="w-full max-w-[250px] mx-auto mt-4"
        />
        <div className="text-left mt-10">
          <h2 className="font-raleway text-xl md:text-2xl">Site Done!</h2>
          <p className="text-base text-gray-600">Oct 1. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            It brings me great joy to unveil version 2.0 of my personal website!
            This endeavor has been a significant undertaking, spanning several
            months of intermittent effort. The evolution from my initial website
            to this one is palpable, reflecting the strides I've made in my
            Software Engineering trajectory. This refresh represents a fusion of
            contemporary design and enhanced functionality, resulting in a
            digital space that resonates with my pride and accomplishment. I
            sincerely hope that you appreciate the nuances of this revamped
            platform as much as I enjoyed crafting it. Let's delve into some
            standout features.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            The technology stack for this website comprises React.js and
            Tailwind CSS. React, being my go-to front-end framework (which was
            notably missing during the creation of my maiden site), was a
            natural choice. Its prowess in sculpting seamless single-page
            applications is unparalleled. To accentuate this, I incorporated
            Tailwind CSS, enabling a fluid design process. The harmonious
            synergy of these tools enabled me to curate a versatile digital
            experience that's both visually appealing and feature-rich across
            devices.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            The intricate details, be it the snappy page transitions, the
            buttery smooth scroll, the dynamic carousel, the comprehensive
            skills showcase, intuitive drop-down menus, or the revamped contact
            space, collectively epitomize my dedication and passion. Every
            element is a testament to my commitment to excellence. As you embark
            on this virtual tour, showcasing my journey and expertise, I eagerly
            anticipate your thoughts and feedback, which you can conveniently
            share via the enhanced contact section.
          </p>
        </div>
        <Link to="/" className="home-link-button mb-3">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default SiteDone;
