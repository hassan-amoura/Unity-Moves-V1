export default function About() { return <div className="p-8">About the playground.</div>; }

// src/pages/About.jsx

import React from "react";

// Replace with your actual images in /assets
import aboutImage1 from "../assets/about-1.jpg";
import aboutImage2 from "../assets/about-2.jpg";

export default function About() {
  return (
    <div className="bg-white text-black font-sans px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-800">
          The Unity Moves Mission
        </h2>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Our family participated in youth development and care for more than a decade. Unity Moves was born out of the opportunities we’ve recognized over the years to help patch some of the holes in community child care.
        </p>

        {/* Mission Section */}
        <div className="text-left space-y-6 text-gray-700 leading-relaxed">
          <p>
            We are deeply committed to creating an <strong>inclusive & nurturing environment</strong> where every child, regardless of background or ability, can flourish.
          </p>
          <p>
            We aim to foster a sense of <strong>community, teamwork, & healthy habits</strong> that will last a lifetime.
          </p>
          <p>
            We look forward to seeing you soon at <strong>Unity Moves!</strong> &nbsp;💜
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <img src={aboutImage1} alt="About Unity Moves" className="rounded-lg shadow-md w-full object-cover" />
          <img src={aboutImage2} alt="Our Vision" className="rounded-lg shadow-md w-full object-cover" />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/services" className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition">
            More Info
          </a>
          <a href="/contact" className="border border-purple-700 text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-700 hover:text-white transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
