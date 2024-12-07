import React from 'react';

const Features = () => {
  return ( 
    <section className="container mx-auto mt-2 lg:mt-10 px-4 lg:mb-0 flex-grow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
    </section>
  );
};

export default Features;
