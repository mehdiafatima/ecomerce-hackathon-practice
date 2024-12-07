import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const CategorySection = () => {
  const categories = [
    { name: "Phones", icon: "/phone.png" },
    { name: "Computers", icon: "/computer.png" },
    { name: "Smartwatches", icon: "/smartwatch.png" },
    { name: "Cameras", icon: "/camera.png" },
    { name: "Headphones", icon: "/headphones.png" },
    { name: "Gaming", icon: "/gaming.png" },
  ];

  return (
    <section className="py-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
          <h3 className="text-red-600 font-semibold lg:text-2xl">Categories</h3>
        </div>
        <div className="flex items-center gap-8 mb-3">
          <h2 className="text-xl font-bold lg:text-3xl text-black lg:ml-19">Browse By Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-7 shadow-sm transition hover:bg-red-500 cursor-pointer lg:h-[150px]"
            >
              {/* Icon using Next.js Image component */}
              <div className="mb-2 w-20 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={80} // Set the width of the image
                  height={80} // Set the height of the image
                  className="object-contain transition hover:brightness-0 hover:invert"
                />
              </div>
              {/* Category Name */}
              <span className="text-sm font-medium transition">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
