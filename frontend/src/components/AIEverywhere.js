import React from 'react';
import { Link } from 'react-router-dom';
import RobPencil from '../images/RobPencil.png';

function AIEverywhere() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <h1 className="font-oleo text-center">Blog:</h1>
        <img
          src={RobPencil}
          alt="Rob Grad"
          className="w-[250px] mx-auto mt-4"
        />
        <div className="text-left mt-10">
          <h2 className="font-raleway">AI Everywhere</h2>
          <p className="text-base text-gray-600">Aug 26. 2023</p>
          <p className="text-base text-gray-600 mb-10">By Robert Perez</p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            The journey of integrating the ChatGPT API into our application was
            an enlightening marathon of discovery and innovation. Venturing into
            the realm of AI, I quickly realized the depth and breadth of
            possibilities it opened up for our product.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            Initially, familiarizing myself with the API required a steep
            learning curve. I had to deep dive into the documentation,
            experiment with diverse calls, and grasp the intricacies of its
            behavior. The initial challenges ranged from understanding the rate
            limits to crafting meaningful and user-relevant responses.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            As I began to integrate ChatGPT into our application, it was crucial
            to ensure that the user experience remained smooth and intuitive.
            The API allowed for real-time interactions, and by integrating it,
            our application could provide more personalized responses, elevating
            the overall user engagement. The process, though intricate, was a
            testament to how AI can drastically enhance software applications
            when employed strategically.
          </p>
          <p className="text-base font-raleway text-black w-[700px] text-justify mb-8">
            Reflecting on this journey, it's evident that working with the
            ChatGPT API wasn't just about embedding a tool, but about
            understanding its nuances and leveraging its capabilities for the
            best user experience. The world of AI is vast, and my experience
            with ChatGPT is just a glimpse into the transformative power it
            holds for the future of software development.
          </p>
        </div>
        <Link to="/" className="home-link-button">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default AIEverywhere;
