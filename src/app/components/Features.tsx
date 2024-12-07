import React from 'react';
import Image from 'next/image'; // Import Image from next/image

const Features = () => {
  return (
    <section className="container mx-auto mt-2 lg:mt-10 px-4 lg:mb-0 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="">
            <Image
              src="/Services1.png" // Image path
              alt="Free and Fast Delivery"
              width={64} // Maintain width (same as class "w-16")
              height={72} // Maintain height (same as class "h-18")
              className="mb-4"
              layout="intrinsic" // Layout as intrinsic to keep aspect ratio
            />
          </div>
          <h3 className="text-lg font-bold">FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <Image
              src="/services.png" // Image path
              alt="24/7 Customer Service"
              width={64} // Maintain width (same as class "w-16")
              height={72} // Maintain height (same as class "h-18")
              className="mb-4"
              layout="intrinsic"
            />
          </div>
          <h3 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <Image
              src="/gurantee.png" // Image path
              alt="Money Back Guarantee"
              width={64} // Maintain width (same as class "w-16")
              height={72} // Maintain height (same as class "h-18")
              className="mb-4"
              layout="intrinsic"
            />
          </div>
          <h3 className="text-lg font-bold">MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
