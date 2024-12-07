import React from "react";

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

      <img
        src="/Frame 739.png" // Replace with your image path
        alt="Descriptive Alt Text"
        className="w-full h-90 object-cover lg:ml-10" // Adjust the height as needed
      />
    </div>
  );
};

export default ImageComponent;
