'use client'

import React, { useState } from "react";
import {  FaEye, FaUser, FaPhone,  } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { CiUser } from "react-icons/ci";

const AuthForm: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+254");
  const [showCountryCodes, setShowCountryCodes] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State for Forgot Password section

  const toggleForm = () => setIsSignIn(!isSignIn);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const countryCodes = ["+254", "+255", "+256", "+44"]; // Add more codes as needed

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[380px]">
        {/* Forgot Password Section */}
        {showForgotPassword && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[380px]">
              <h2 className="text-sm font-semibold mb-4">Forgot Password</h2>
              <p className="text-xs text-gray-600 mb-4">
                Please enter the email you used to register, and we will send you a password reset link.
              </p>
              <div className="relative mb-4">
                <FaRegEnvelopeOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                <input
                  type="email"
                  placeholder=" Enter Email"
                  className="w-full pl-10 pr-4 py-2 border text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
                />
              </div>
              <div className="flex justify-end  gap-4">
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white text-sm rounded-lg "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Toggle Between Sign In and Sign Up */}
        <div className="flex justify-around mb-6">
          <button
            onClick={toggleForm}
            className={`text-sm  ${isSignIn ? "text-gray-600" : "text-gray-400"}`}
          >
            Sign In
          </button>
          <button
            onClick={toggleForm}
            className={`text-sm ${!isSignIn ? "text-gray-600" : "text-gray-400"}`}
          >
            Sign Up
          </button>
        </div>

        {isSignIn ? (
          // Sign In Form
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <FaRegEnvelopeOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2  text-xs border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-medium mb-2">Password</label>
              <div className="relative">
                <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <IoEyeOutline /> : <LuEyeClosed  />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs">Remember Me</span>
              </label>
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full text-sm bg-orange-600 text-white py-2 rounded-lg "
            >
              Sign In
            </button>
          </form>
        ) : (
          // Sign Up Form
          <form>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2"></label>
                <div className="relative">
                  <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full pl-10 pr-4 text-xs py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium mb-2"></label>
                <div className="relative">
                  <CiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full pl-10 pr-4 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2"></label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type=""
                  placeholder="Phone"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
                />
                <button
                  type="button"
                  onClick={() => setShowCountryCodes(!showCountryCodes)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-400"
                >
                  {countryCode} ▼
                </button>
                {showCountryCodes && (
                  <div className="absolute right-0 text-orange-500 bg-gray-100 hover:bg-white top-full mt-2 z-50 bg--200 border rounded-lg shadow-lg">
                    {countryCodes.map((code) => (
                      <div
                        key={code}
                        onClick={() => {
                          setCountryCode(code);
                          setShowCountryCodes(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {code}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2"></label>
              <div className="relative">
                <FaRegEnvelopeOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2"></label>
              <div className="relative">
                <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 text-xs py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <IoEyeOutline/> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2"></label>
              <div className="relative">
                <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-10 py-2 border text-xs rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-600"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-1/2  transform -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <IoEyeOutline /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-xs">
                  By signing up, you agree to the{" "}
                  <a href="#" className="text-gray-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gray-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 rounded-lg text-white py-2 "
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;