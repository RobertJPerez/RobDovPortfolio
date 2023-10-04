import React from 'react';
import { Link } from 'react-router-dom';
import RobLaptop from '../images/RobLaptop.jpg';

function DentalDevelopment() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <h1 className="font-oleo text-center">Blog:</h1>
        <img
          src={RobLaptop}
          alt="Rob with Certificates"
          className="w-[250px] mx-auto mt-4"
        />
        <div className="text-left mt-10">
          <h2 className="font-raleway">Dental Development</h2>
          <p className="text-base text-gray-600">Sept 22. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            Exciting times ahead! I'm thrilled to reveal that I've recently
            entered into a partnership to conceive and create a bespoke website
            for Ghisalberti Dental. This contract marks not just a business
            engagement, but a reaffirmation of the value I bring to clients.
            However, as much as this represents a significant landmark, it's
            vital to reflect on the path that has brought me to this moment.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            Starting from humble beginnings, my journey began with modest side
            projects, primarily for close friends and family. These endeavors
            were not just tasks, but learning experiences that sharpened my
            skill set. Over time, what started as a favor to loved ones
            transitioned into a professional commitment to helping emerging
            businesses, like Ghisalberti Dental, pave their way in the digital
            realm. My collaborations have granted me invaluable insights. Direct
            interactions with clients have polished my communication skills,
            teaching me the art of translating abstract ideas into practical,
            digital masterpieces.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            With Ghisalberti Dental, the challenge and opportunity lie in
            capturing their distinct family buisness and translating it into a
            digital experience. Leveraging their specific needs against my
            extensive technical knowledge, I am geared up to curate a full-stack
            web application that aligns seamlessly with their brand identity.
            This project promises not only to be a testament to Ghisalberti
            Dental's excellence but also a reflection of the growth and
            capabilities I've garnered over the years. Keep an eye out, as I'll
            be sharing progress and insights from this exhilarating
            collaboration!
          </p>
        </div>
        <Link to="/" className="home-link-button">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default DentalDevelopment;
