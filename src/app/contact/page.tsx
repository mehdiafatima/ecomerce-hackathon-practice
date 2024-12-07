import React from "react";
import Image from "next/image"; // Importing Next.js Image component

const ContactPage = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-600">
          <span>Home</span> / <span className="text-red-500">Contact</span>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Contact Info */}
          <div className="p-6 rounded-lg shadow-md">
            {/* Call Us */}
            <div className="mb-0 flex items-center">
              <div className="flex items-center justify-center w-15 h-12 rounded-full">
                <Image
                  src="/icons-phone.png" // Replace with your actual image path
                  alt="Call Icon"
                  width={40} // Setting width for image optimization
                  height={40} // Setting height for image optimization
                  className="w-10 h-10 mb-10"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-2">Call To Us</h3>
                <p className="text-sm text-gray-600 mt-5 lg:mr-2">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm text-gray-800 font-medium">Phone: +8801112222</p>
              </div>
            </div>

            {/* Write To Us */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-15 h-12 rounded-full">
                <Image
                  src="/icons-mail.png" // Replace with your actual image path
                  alt="Email Icon"
                  width={40} // Setting width for image optimization
                  height={40} // Setting height for image optimization
                  className="w-10 h-10 mb-10"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 mt-12">Write To Us</h3>
                <p className="text-sm text-gray-600 mt-5">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-sm text-gray-800 font-medium mt-2">
                  Email: customers@exclusive.com
                </p>
                <p className="text-sm text-gray-800 font-medium">
                  Email: support@exclusive.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-span-2 bg-grey-5 p-6 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full p-3 border rounded-lg text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                {/* Email */}
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full p-3 border rounded-lg text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="w-full p-3 border rounded-lg text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 mb-4"
                required
              ></textarea>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
