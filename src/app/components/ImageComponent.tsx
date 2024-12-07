import React from "react";
import Image from "next/image"; // Import Image from Next.js

const ImageComponent = () => {
  return (
    <div className="py-8">
      <Image
        src="/Frame 600.png" // Path to your image
        alt="Descriptive Alt Text"
        width={1200} // Set the appropriate width
        height={600} // Set the appropriate height
        className="w-full h-auto object-cover lg:ml-10" // Make sure the aspect ratio is maintained
      />
    </div>
  );
};

export default ImageComponent;
