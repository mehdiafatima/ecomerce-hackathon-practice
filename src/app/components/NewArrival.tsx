import React from "react";
import Image from "next/image"; // Import Image from Next.js

const ImageComponent = () => {
  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="flex items-center space-x-2">
        <span className="w-2 h-5 bg-red-600 rounded"></span>
        <h3 className="text-red-600 font-semibold lg:text-2xl">Featured</h3>
      </div>

      <div className="flex items-center gap-8 mb-3">
        <h2 className="text-xl font-bold lg:text-3xl text-black lg:ml-19 mb-12">New Arrival</h2>
      </div>

      <Image
        src="/Frame 739.png" // Path to your image
        alt="Descriptive Alt Text"
        width={1200} // Set the appropriate width
        height={600} // Set the appropriate height
        className="w-full h-auto object-cover lg:ml-10" // Ensure the aspect ratio is maintained
      />
    </div>
  );
};

export default ImageComponent;
