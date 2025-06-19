// src/pages/Home.jsx

import React from "react";

// Replace these with your actual image paths
import hero from "../assets/hero.jpg";
import iconGym from "../assets/icon-gym.png";
import iconClasses from "../assets/icon-classes.png";
import iconTherapy from "../assets/icon-therapy.png";

export default function Home() {
  return (
    <div className="bg-white text-black font-sans">

      {/* Hero Section */}
      <section
        className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <h1
          className="text-white text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.75)]"
          style={{ fontFamily: "'Titan One', sans-serif" }}
        >
          Unity Moves
        </h1>

        <p className="text-white text-lg md:text-2xl mt-4 max-w-xl drop-shadow-md">
          An indoor playground + movement studio for children of all abilities.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-[0.1875rem] font-semibold hover:bg-gray-200 transition shadow-md">
            View Classes
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-[0.1875rem] font-semibold hover:bg-white hover:text-black transition shadow-md">
            Book Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src={iconGym} alt="Gym" className="mx-auto mb-4 w-16 h-16" />
            <h2 className="text-xl font-bold mb-2">Indoor Playground</h2>
            <p className="text-gray-700">
              A safe and fun space for children to explore and play.
            </p>
          </div>
          <div className="text-center">
            <img src={iconClasses} alt="Classes" className="mx-auto mb-4 w-16 h-16" />
            <h2 className="text-xl font-bold mb-2">Movement Classes</h2>
            <p className="text-gray-700">
              Engaging classes designed to promote physical activity and social skills.
            </p>
          </div>
          <div className="text-center">
            <img src={iconTherapy} alt="Therapy" className="mx-auto mb-4 w-16 h-16" />
            <h2 className="text-xl font-bold mb-2">Therapeutic Services</h2>
            <p className="text-gray-700">
              Professional support for children with special needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}