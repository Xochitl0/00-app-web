"use client";

import "../globals.css";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Me diste click");
  };

  return (
    <>
      <div className="body w-full">
        <div className="flex container">
          {/* Columna izquierda */}
          <div className="w-3/5 bg-gray-100 rounded-tl-lg rounded-bl-lg">
            <div>
              <h1 className="font-bold p-10"> Sign in</h1>
              <div className="flex justify-center">
                <button className="rounded-full border-2 border-solid h-10 w-10 p-2 mt-2">
                  <FaFacebookF />
                </button>
                <button className="rounded-full border-2 border-solid h-10 w-10 p-2 mt-2">
                  <IoLogoGoogleplus />
                </button>
                <button className="rounded-full border-2 border-solid h-10 w-10 p-2 mt-2">
                  <FaLinkedin />
                </button>
              </div>
            </div>
            <div className="text-center text-gray-400">
              <p className="font-light">or use your email account</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="">
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
                <a href="/">Forgout your password?</a>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-menta b-signUp mt-5 ">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>

          {/* Columna derecha */}
          <div className="w-2/5 bg-pinky rounded-tr-lg rounded-br-lg ">
            <h2 className="p-20 font-bold text-white font-h">Hello, Friend!</h2>
            <p className="text-center -mt-10 text-white font">
              Enter your personal detail <br /> and start journey with us
            </p>
            <div className="text-center">
              <button type="submit" className="bg-mb b-signIn mt-5 border-2">
                SING IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
