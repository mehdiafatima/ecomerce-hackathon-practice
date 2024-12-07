"use client"
import React, { useEffect, useState } from "react";

const FlashSales = () => {
  const productImages = [
    "/gamepad.png", // Replace with actual image path
    "/keyboard.png", // Replace with actual image path
    "/monitor.png", // Replace with actual image path
    "/chair.png", // Replace with actual image path
    // Replace with actual image path
  ];

  // State for Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  // Countdown Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center space-x-2">
  <span className="w-2 h-5 bg-red-600 rounded"></span>
  <h3 className="text-red-600 font-semibold lg:text-2xl">Today&apos;s</h3>
</div>
        <div className="flex items-center gap-8 mb-3">
          <h2 className="text-xl font-bold lg:text-3xl text-black lg:ml-19">Flash Sales</h2>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold lg:text-2xl">{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold lg:text-2xl">{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold lg:text-2xl">{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <span>:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold lg:text-2xl">{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
        <br></br>

        {/* Product Images Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 lg:w-[110%]">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-6 text-center">
          <button className="bg-red-500 text-white px-6 py-2 text-sm font-semibold rounded shadow hover:bg-red-600 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
