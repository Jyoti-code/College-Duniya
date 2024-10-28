import React from "react";
import { BiEditAlt, BiX } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const LoginModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={toggleModal}
      ></div>

      {/* Right Side Modal Content */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out">
        {/* Close Button with Margin */}
        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          style={{ marginTop: "10px", marginRight: "10px" }}
        >
          <BiX className="h-6 w-6" />
        </button>

        {/* Header with Icon and Text */}
        <div className="flex items-center mb-4 mt-8">
          {" "}
          {/* Adjusted margin here */}
          <img
            src="https://p1.hiclipart.com/preview/940/778/480/handshake-blue-line-art-text-logo-area-organization-angle-diagram-png-clipart.jpg"
            alt="Handshake Icon"
            className="h-9 w-9 mr-2"
          />
          <div className="flex-col">
            <h2 className="text-md font-medium text-gray-800">
              Welcome to Search My College
            </h2>
            <p className="text-gray-500 text-xs mb-4">
              Search for colleges, exams, courses, and more.
            </p>
          </div>
        </div>

        {/* Select Goal */}
        <div className="mt-4 flex items-center">
          <select className="bg-gray-100 border border-gray-300 rounded py-2 px-3 w-full">
            <option value="">Select Goal</option>
            <option value="goal1">Goal 1</option>
            <option value="goal2">Goal 2</option>
          </select>
          <button className="ml-2">
            <BiEditAlt className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Full-width Login / Sign Up Button */}
        <button className="bg-blue-500 text-white w-full py-2 mt-4 rounded">
          Login / Sign In
        </button>

        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240104155136/How-to-get-paid-in-writing-Review-2024.png" 
        alt="Review" 
        className="w-full py-2 mt-4"
        />

       <img src="https://www.shutterstock.com/image-vector/ukraine-kropyvnytskyi-april-26-2023-260nw-2293917457.jpg" 
        alt="Review" 
        className="w-full py-2 mt-4"
        />

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 justify-center">
          <button className="bg-blue-600 text-white h-8 w-8 rounded-full flex items-center justify-center">
            <FaFacebookF />
          </button>
          <button className="bg-blue-400 text-white h-8 w-8 rounded-full flex items-center justify-center">
            <FaTwitter />
          </button>
          <button className="bg-pink-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
            <FaInstagram />
          </button>
          <button className="bg-red-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
            <FaYoutube />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
