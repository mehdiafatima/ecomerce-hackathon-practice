// pages/about.tsx
import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: "/Frame 874.png", 
      socials: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: "/Frame 875.png", 
      socials: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: "/Frame 876.png", 
      socials: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
   
      <div className="md:flex md:items-center md:justify-center w-full">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-700 mb-4">
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-gray-700">
            Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer electronics to household goods, beauty, fashion, sports equipment, and groceries.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="/sideimage.png" alt="Our Story Image" className=" w-full h-auto" />
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <img src="/Frame 891.png" alt="Additional Image" className=" w-full h-auto max-w-screen-md" />
      </div>

  
      <div className="py-16  mt-16 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-start "
              >
                <div className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:mr-0">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                  <div className="text-start flex space-x-4">
                    <a
                      href={member.socials.twitter}
                      className="text-gray-500 hover:text-blue-500"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href={member.socials.instagram}
                      className="text-gray-500 hover:text-pink-500"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="text-gray-500 hover:text-blue-700"
                    >
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
          <div className="mt-8 flex justify-center space-x-2">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 0 ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-[55px] text-center lg:ml-20 mt-20">
        <div className="flex flex-col items-center">
          <div className="">
            <img src="/Services1.png" alt="Free and Fast Delivery" className="h-18 w-16 mb-4"/>
          </div>
          <h3 className="text-lg font-bold">FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <img src="/services.png" alt="24/7 Customer Service" className="h-18 w-16 mb-4"/>
          </div>
          <h3 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <img src="/gurantee.png" alt="Money Back Guarantee" className="h-18 w-16 mb-4"/>
          </div>
          <h3 className="text-lg font-bold">MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
