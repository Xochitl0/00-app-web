"use client";
import "../globals.css";
import * as Yup from "yup";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import { Formik } from "formik";
import { Box, TextField } from "@mui/material";

const Register = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registro exitoso");
  };

  const handleClick = () => {
    router.push("/login");
  };

  const onSubmit = ({ name, email, password }) => {
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registro exitoso");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name requerido"),
    email: Yup.string().email("Email no válido").required("Email requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Mínimo 6 carácteres")
      .required("Password requerida"),
  });

  return (
    <>
      <div className="flex bg-[url('./assets/fondo1.jpeg')] bg-cover bg-no-repeat min-h-screen">
        <header />
        <div className="container md:max-w-3xl mt-16 mx-auto px-4 box-size">
          {/* Columna iquierda */}
          <div className="w-2/5 bg-pinky rounded-tl-lg rounded-bl-lg">
            <h2 className="p-10 font-bold text-white font-h">Welcome Back!</h2>
            <p className="text-center -mt-10 text-white font">
              To keep connected with us please <br /> login with your personal
              info
            </p>
            <div className="text-center">
              <button
                onClick={handleClick}
                type="submit"
                className="bg-mb button-color mt-5 border-2"
              >
                SIGN IN
              </button>
            </div>
          </div>
          {/* Columna izquierda */}
          <div className="w-3/5 bg-gray-100  px-4 rounded-tr-lg rounded-br-lg ">
            <h1 className="font-bold p-5"> Create Account</h1>
            <div className="flex justify-center">
              <button className="rounded-full border-2 border-solid h-10 w-10 p-2 mt-2">
                <FaFacebookF />
              </button>

              <button className="rounded-full border-2 border-solid h-10 w-10 p-2 m-2">
                <IoLogoGoogleplus />
              </button>
              <button className="rounded-full border-2 border-solid h-10 w-10 p-2 mt-2">
                <FaLinkedin />
              </button>
            </div>
            <div className="text-center text-gray-400">
              <p className="font-light">or use your email for registration</p>
            </div>

            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
                <Box
                  component="form"
                  action=""
                  className="container"
                  onSubmit={handleSubmit}
                >
                  <div className="container">
                    <div className="mb-4 mt-3 text-center">
                      <TextField
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="mt-1 p-2 w-80 border rounded"
                        fullWidth
                        sx={{ mb: -3 }}
                        value={values.name}
                        onChange={handleChange}
                        error={errors.name && touched.name}
                        helperText={errors.name && touched.name && errors.name}
                      />
                    </div>
                    <div className="mb-4 mt-3 text-center">
                      <TextField
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="mt-1 p-2 w-80 border rounded"
                        fullWidth
                        sx={{ mb: -3 }}
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email && touched.email}
                        helperText={
                          errors.email && touched.email && errors.email
                        }
                      />
                    </div>
                    <div className="mb-4 mt-3 text-center">
                      <TextField
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="mt-1 p-2 w-80 border rounded"
                        fullWidth
                        sx={{ mb: -3 }}
                        value={values.password}
                        onChange={handleChange}
                        error={errors.password && touched.password}
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-menta button-color mt-5"
                    >
                      SIGN UP
                    </button>
                  </div>
                </Box>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
