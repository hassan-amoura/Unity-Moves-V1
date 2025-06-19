export default function Contact() { return <div className="p-8">Contact us here.</div>; }

import React from "react";

import cloudLeft from "../assets/cloud-left.png";
import cloudRight from "../assets/cloud-right.png";
import rocket from "../assets/rocket.png";
import logoFooter from "../assets/67afb0bfd0ba8efd62f9f2b5_Unity Moves Logo Remake.png"; // Rename for clarity if needed

export default function Contact() {
  return (
    <div className="relative bg-white text-black font-sans px-6 pt-20 pb-40 overflow-hidden">

      {/* Decorative Clouds & Rocket */}
      <img
        src={cloudLeft}
        alt="Cloud Left"
        className="absolute top-10 left-4 w-16 sm:w-24"
      />
      <img
        src={cloudRight}
        alt="Cloud Right"
        className="absolute top-10 right-4 w-16 sm:w-24"
      />
      <img
        src={rocket}
        alt="Rocket"
        className="absolute top-24 right-10 w-12 sm:w-20 rotate-[12deg]"
      />

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Contact Us</h2>

        <p className="text-lg font-semibold text-gray-700 mb-2">
          Have any questions, or looking for more info? Fill out our contact form below!
        </p>
        <p className="text-md text-green-700 font-medium">
          Or you can give us a call anytime at <a href="tel:4023159300" className="underline text-green-900">(402) 315-9300</a>.
        </p>

        {/* Hours & Address */}
        <div className="mt-10 space-y-4 text-center">
          <div>
            <h3 className="text-xl font-bold underline text-purple-800 mb-1">Hours</h3>
            <p>Sunday: 12:00 p.m. – 6:00 p.m.</p>
            <p>Monday: Closed</p>
            <p>Tuesday – Saturday: 10:00 a.m. – 6:00 p.m.</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold underline text-purple-800 mb-1">Address</h3>
            <p>20275 Honeysuckle Drive Suite 103 Elkhorn NE, 68022</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-2xl mx-auto bg-teal-800 p-8 rounded-md shadow-lg text-white">
          <p className="font-semibold text-center mb-6">
            Submit a message below and we'll reach out to you shortly. Thanks!
          </p>

          <form className="space-y-6" action="mailto:your-email@example.com" method="POST" encType="text/plain">
            <div className="text-left">
              <label htmlFor="name" className="block mb-2 font-semibold">
                First &amp; Last Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nice to meet you!"
                className="w-full px-4 py-2 rounded-md text-black bg-green-100"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="contact" className="block mb-2 font-semibold">
                Preferred Contact *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="e.g., email or phone number"
                className="w-full px-4 py-2 rounded-md text-black bg-green-100"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="message" className="block mb-2 font-semibold">
                How Can We Help?
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter message here..."
                className="w-full px-4 py-2 rounded-md text-black bg-green-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-white text-teal-900 font-bold py-3 rounded-md hover:bg-green-100 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
