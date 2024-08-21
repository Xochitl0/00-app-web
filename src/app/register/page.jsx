import React from "react";
import TitlePage from "../components/TitlePage";
import "../register/index.css";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <div className="body w-full">
        <div className="flex container">
          {/* Columna iquierda */}
          <div className="w-2/5 bg-pinky rounded-tl-lg rounded-bl-lg">
            <h2 className="p-20 font-bold text-white font-h">Welcome Back!</h2>
            <p className="text-center -mt-10 text-white font">
              To keep connected with us please <br /> login with your personal
              info
            </p>
            <div className="text-center">
              <button type="submit" className="bg-mb mt-5 border-2">
                SIGN IN
              </button>
            </div>
          </div>
          {/* Columna izquierda */}
          <div className="w-3/5 bg-gray-100 rounded-tr-lg rounded-br-lg ">
            <h1 className="font-bold p-10"> Create Account</h1>
            <div className="flex items-center justify-center">
              <button className="rounded-full text-xl border-2 border-solid m-2 h-10 w-10">
                <FaFacebookF />
              </button>

              <button className="rounded-full text-xl border-2 border-solid m-2 w-10  h-10 ">
                <IoLogoGoogleplus />
              </button>
              <button className="rounded-full text-xl border-2 border-solid m-2 h-10 w-10">
                <FaLinkedin />
              </button>
            </div>
            <div className="text-center text-gray-400">
              <p className="font-light">or use your email for registration</p>
            </div>
            <form action="">
              <div className="">
                <div className="mb-4 mt-3 text-center">
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="mt-1 p-2 w-80 border rounded"
                  />
                </div>
                <div className="mb-4 mt-3 text-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="mt-1 p-2 w-80 border rounded"
                  />
                </div>
                <div className="mb-4 mt-3 text-center">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="mt-1 p-2 w-80 border rounded"
                  />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="bg-menta mt-5 ">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
