import React from "react";
import Image from "next/image"; // Import Image from next/image

const BestSelling = () => {
  const productImages = [
    "/coat.png", 
    "/purse.png",
    "/cpu.png", 
    "/bookshelf.png", 
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-5 bg-red-600 rounded"></span>
          <h3 className="text-red-600 font-semibold lg:text-2xl">This Month</h3>
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold lg:text-3xl text-black">Best Selling Products</h2>

          <div className="mt-6">
            <button className="bg-red-500 text-white px-6 py-2 text-sm font-semibold rounded shadow hover:bg-red-600 transition">
              View All
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 lg:w-[110%]">
          {productImages.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="w-full h-auto">
                <Image
                  src={image}
                  alt={`Product ${index + 1}`}
                  width={400} // Set width as per your desired size
                  height={400} // Set height as per your desired size
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
