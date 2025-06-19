export default function Memberships() { return <div className="p-8">Class offerings and schedules.</div>; }

// src/pages/Memberships.jsx

import React from "react";

// Replace with your actual icons
import membershipIcon from "../assets/membership-icon.png";

export default function Memberships() {
  const memberships = [
    {
      title: "Unlimited Membership - 1 Child",
      price: "$95.00",
      description:
        "Unlimited visits for 1 child. Includes access to all open gym hours and special events.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Unlimited Membership - 2 Children",
      price: "$125.00",
      description:
        "Perfect for siblings! Includes unlimited access for 2 children to all our indoor play and event offerings.",
      bgColor: "bg-sky-100",
    },
    {
      title: "Unlimited Membership - 3+ Children",
      price: "$145.00",
      description:
        "Families with 3 or more children get full access at one flat price. Play and move together!",
      bgColor: "bg-teal-100",
    },
  ];

  return (
    <div className="bg-white text-black font-sans">
      {/* Hero */}
      <section className="bg-cover bg-center bg-no-repeat text-white py-20 px-4 text-center relative"
        style={{ backgroundImage: "url('/src/assets/membership-hero.jpg')" }} // replace with your image
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-lg inline-block max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Monthly Memberships</h1>
          <p className="text-lg md:text-xl mb-6">
            Become a member today and enjoy all the benefits of unlimited hours of open gym access,
            free family events, and discounted classes and rentals!
          </p>
          <a href="/shop" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Shop Memberships
          </a>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-6 flex flex-col items-center text-center ${membership.bgColor}`}
            >
              <img src={membershipIcon} alt="Membership Icon" className="w-20 h-20 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{membership.title}</h2>
              <p className="text-green-700 font-bold text-lg mb-2">{membership.price}</p>
              <p className="text-sm text-gray-700 mb-4">{membership.description}</p>
              <a href="/shop" className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
