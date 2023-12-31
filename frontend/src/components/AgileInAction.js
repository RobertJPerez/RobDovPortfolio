import React from 'react';
import { Link } from 'react-router-dom';
import RobSmile from '../images/RobSmile.png';

function AgileInAction() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center min-h-screen px-4 md:px-0 element">
      <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full">
        <h1 className="font-oleo text-center text-2xl md:text-4xl">Blog:</h1>
        <img
          src={RobSmile}
          alt="Rob with Certificates"
          className="w-full max-w-[250px] mx-auto mt-4"
        />
        <div className="text-left mt-10">
          <h2 className="font-raleway text-xl md:text-2xl">Agile in Action</h2>
          <p className="text-base text-gray-600">Sept 22. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            The journey of mastering Agile has been both invigorating and
            insightful. I'm thrilled to announce that I've acquired both the
            Certified ScrumMaster (CSM) and Certified Scrum Developer (CSD)
            credentials. These certifications, more than mere accolades,
            represent my commitment to Agile practices and the continuous drive
            for excellence in software development.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            Earning the CSM title has equipped me with the understanding and
            expertise to aid my teams in leveraging Scrum's full potential,
            ensuring higher product value and team satisfaction. Meanwhile, the
            CSD credential refined my technical skills, emphasizing the
            importance of the collaboration between development and operations
            in Agile. Together, they've fortified my capability to lead
            cross-functional teams efficiently.
          </p>
          <p className="text-base font-raleway text-black text-justify mb-8">
            Integrating Agile methodologies at Sentry Interactive Holdings will
            be a testament to the power of these principles in action. With my
            newfound knowledge, I'm excited to further elevate my proficiency in
            implementing Agile, ensuring projects not only meet but exceed
            stakeholder expectations. My passion for Agile isn't just about
            methodology; it's about delivering meaningful, high-quality
            solutions swiftly and efficiently.
          </p>
        </div>
        <Link to="/" className="home-link-button mb-3">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default AgileInAction;
