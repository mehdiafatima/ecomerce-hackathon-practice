import React from "react";
import Image from "next/image"; // Import Image from Next.js

const OurProduct = () => {
  const productImages = [
    "/dog.png", // Replace with actual image path
    "/dslr.png", // Replace with actual image path
    "/car.png", // Replace with actual image path
    "/product.png", // Replace with actual image path
    "/car.png", // Replace with actual image path
    "/shoes.png", // Replace with actual image path
    "/game.png", // Replace with actual image path
    "/jacket.png", // Replace with actual image path
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
          <h3 className="text-red-600 font-semibold lg:text-2xl">Our Products</h3>
        </div>
        <div className="flex items-center gap-8 mb-3">
          <h2 className="text-xl font-bold lg:text-3xl text-black lg:ml-19">Explore Our Products</h2>
        </div>

        {/* Product Images Row */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 lg:w-[110%]">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={300}  // Set width
                height={300} // Set height
                className="w-full h-auto object-contain rounded-lg"
                loading="lazy"  // Lazy load images
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

export default OurProduct;
