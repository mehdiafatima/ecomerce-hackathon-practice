import React from "react";

const CategorySection = () => {
  const categories = [
    { name: "", icon: "/phone.png" }, // Replace with your actual image paths
    { name: "", icon: "/computer.png" },
    { name: "", icon: "/smartwatch.png" },
    { name: "", icon: "/camera.png" },
    { name: "", icon: "/headphones.png" },
    { name: "", icon: "/gaming.png" },
  ];

  return (
    <section className="py-3  ">
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
              {/* Icon */}
              <div className="mb-2 w-55 h-50 sm:w-14 sm:h-14 lg:w-80 lg:h-[50%]">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-full h-[100px] sm:h-[90px] lg:h-[90px] object-contain transition hover:brightness-0 hover:invert"
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
