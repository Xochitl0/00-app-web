"use client";

import "../globals.css";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      storedUserData.email === email &&
      storedUserData.password === password
    ) {
      alert("Inicio de sesion");
      router.push("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleClick = () => {
    router.push("/register");
  };

  return (
    <>
      <div className="flex bg-[url('./assets/fondo1.jpeg')]  min-h-screen bg-cover bg-no-repeat">
        <header />
        <div className="container md:max-w-3xl mt-16 mx-auto px-4 box-size">
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
            <form action="" className="container" onSubmit={handleSubmit}>
              <div className="container">
                <div className="mb-4 mt-3 text-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="mt-1 p-2 w-80 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 mt-3 text-center">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="mt-1 p-2 w-80 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center">
                <a href="/">Forgout your password?</a>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-menta button-color mt-5 ">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>

          {/* Columna derecha */}
          <div className="w-2/5 bg-pinky rounded-tr-lg rounded-br-lg">
            <h2 className="p-20 font-bold text-white font-h">Hello, Friend!</h2>
            <p className="text-center -mt-10 text-white font">
              Enter your personal detail <br /> and start journey with us
            </p>
            <div className="text-center">
              <button
                onClick={handleClick}
                type="submit"
                className="bg-mb button-color mt-5 border-2"
              >
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
