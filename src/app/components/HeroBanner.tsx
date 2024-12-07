import Image from 'next/image';
import React from 'react';
import SidebarMenu from './SidebarMenu';

const HeroBanner = () => {
  return (
    <section className="relative w-full mt-[30px] lg:mt-[40px]">
      {/* Flex container to align HeroBanner and SidebarMenu */}
      <div className="flex flex-col lg:flex-row">
        {/* Hero Banner Section - Appears first on mobile and right side for large screens */}
        <div className="relative w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-[350px] lg:order-2 lg:w-3/4 lg:mt-[-23px] lg:ml-0 ">
          <div className="relative w-full h-full">
            <Image
              src="/Frame 560.png"
              alt="Background Image"
              layout="fill" // Ensures the image takes up the full width and height of the container
              objectFit="cover" // Makes sure the image covers the container without distorting
              quality={100}
              className="opacity-100"
            />
          </div>
        </div>

        {/* Sidebar Menu - Appears on top for mobile and left side for large screens */}
        <div className="lg:order-1 lg:w-1/4 lg:w-35">
          <SidebarMenu />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

