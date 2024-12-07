import React from "react";

const ImageComponent = () => {
  return (
    <div className="py-8">
      <img
        src="/Frame 600.png" // Replace with your image path
        alt="Descriptive Alt Text"
        className="w-full h-90 object-cover lg:ml-10" // Adjust the height as needed
      />
    </div>
  );
};

export default ImageComponent;
