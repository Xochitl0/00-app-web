"use client";

import "../globals.css";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { Formik } from "formik";
import { Box, TextField } from "@mui/material";

import * as Yup from "yup";

const Login = () => {
  const router = useRouter();

  // Redireccion
  const handleClick = () => {
    router.push("/register");
  };

  const onSubmit = ({ emailOrUsername, password }, { resetForm }) => {
    console.log(emailOrUsername, password);
    const storedUserData = JSON.parse(localStorage.getItem("userData")) || [];

    // Validaciones credenciales
    const usuario = storedUserData.find(
      (usuario) =>
        (usuario.user === emailOrUsername ||
          usuario.email === emailOrUsername) &&
        usuario.password === password
    );

    if (usuario) {
      localStorage.setItem("usuarioConectado", JSON.stringify(usuario));
      showAlert();
      router.push("/dashboard");
    } else {
      mAlert();
    }

    // Limpiar los campos del formulario
    resetForm();
  };

  // Validaciones campos
  const validationSchema = Yup.object().shape({
    emailOrUsername: Yup.string().required(
      "Email o nombre de usuario requerido"
    ),
    password: Yup.string()
      .trim()
      .min(6, "Mínimo 6 caracteres")
      .required("Password requerida"),
  });

  const Swal = require("sweetalert2");

  const showAlert = () => {
    Swal.fire({
      title: "Inicio de sesión exitoso",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  };

  const mAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales incorrectas",
    });
  };

  return (
    <>
      <div className="flex bg-[url('./assets/fondo1.jpeg')]  min-h-screen bg-cover bg-no-repeat">
        <header />
        <div className="container md:max-w-3xl mt-16 mx-auto px-4 box-size">
          {/* Columna izquierda */}
          <div className="w-3/5 bg-gray-100 rounded-tl-lg rounded-bl-lg">
            <div>
              <h1 className="font-bold p-5"> Sign in</h1>
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
            <Formik
              initialValues={{ emailOrUsername: "", password: "" }}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
                <Box
                  action=""
                  className="container"
                  onSubmit={handleSubmit}
                  component="form"
                >
                  <div className="container">
                    <div className="mb-4 mt-3 text-center">
                      <TextField
                        type="text"
                        id="emailOrUsername"
                        name="emailOrUsername"
                        placeholder="Email o nombre de usuario"
                        className="mt-1 p-2 w-80 border rounded"
                        fullWidth
                        sx={{ mb: -3 }}
                        value={values.emailOrUsername}
                        onChange={handleChange}
                        error={
                          errors.emailOrUsername && touched.emailOrUsername
                        }
                        helperText={
                          errors.emailOrUsername && touched.emailOrUsername
                            ? errors.emailOrUsername
                            : ""
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
                          errors.password && touched.password
                            ? errors.password
                            : ""
                        }
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <a href="/">Forgout your password?</a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-menta button-color mt-5 "
                    >
                      SIGN IN
                    </button>
                  </div>
                </Box>
              )}
            </Formik>
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
                SING UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
