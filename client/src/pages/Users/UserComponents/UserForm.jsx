import React from 'react';

const UserForm = () => {
  return (
    <div className="bg-gray-50 p-6 min-h-screen flex justify-center items-start">
      <form className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg flex flex-col gap-6">
        
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Create Account
        </h2>

        {/* Username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-gray-600 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black-500 focus:ring-2 focus:ring-black-200 transition-all"
            placeholder="Enter username"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black-500 focus:ring-2 focus:ring-black-200 transition-all"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black-500 focus:ring-2 focus:ring-black-200 transition-all"
            placeholder="Enter password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 bg-black hover:bg-gray-500 cursor-pointer text-white font-medium py-2 rounded-lg transition-all shadow-md"
        >
          Create Account
        </button>

      </form>
    </div>
  );
};

export default UserForm;
