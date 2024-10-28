import React from 'react';
import { BiEnvelope, BiPhone, BiBook } from 'react-icons/bi';

export default function Subscribe() {
  return (
    <div className="bg-blue-50 py-8">
      <div className="container mx-auto max-w-6xl">
        <h4 className="text-2xl sm:text-3xl text-gray-700 font-bold mb-1 text-center">
          Subscribe to our newsletter
        </h4>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Get College Notifications, Exam Notifications, and News Updates
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Email Input */}
          <div className="flex items-center bg-white border border-gray-300  p-2 w-full sm:w-auto">
            <BiEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none bg-transparent px-5"
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex items-center bg-white border border-gray-300  p-2 w-full sm:w-auto">
            <BiPhone className="text-gray-400 mr-2" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full outline-none bg-transparent px-5"
            />
          </div>

          {/* Course Select */}
          <div className="flex items-center bg-white border border-gray-300 p-2 w-full sm:w-auto">
            <BiBook className="text-gray-400 mr-2" />
            <select className="w-full outline-none bg-transparent px-5">
              <option value="">Select Course</option>
              <option value="engineering">Engineering</option>
              <option value="medical">Medical</option>
              <option value="law">Law</option>
              <option value="business">Business</option>
              <option value="arts">Arts</option>
            </select>
          </div>

          {/* Submit Button */}
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
