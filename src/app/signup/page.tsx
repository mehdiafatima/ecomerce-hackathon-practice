import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl rounded-lg p-6 md:flex">
        <div className="md:w-1/2 flex justify-center items-center p-6 lg:w-[700px] lg:h-[500px] lg:ml-0">
          <img src="/Side Image.png" alt="Signup" className="max-w-full h-auto"/>
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold ">Create an account</h2>
          <h4 className=" mb-6">Enter your details below</h4>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or Phone Number</label>
              <input type="text" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">Create Account</button>
            <div className="flex justify-center my-4">
              <button className="flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md w-full hover:bg-gray-50 transition duration-200">
                <img src="/icon-Google.png" alt="Google" className="w-5 h-5 mr-2"/>
                Sign up with Google
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-500">Log in</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
