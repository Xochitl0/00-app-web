"use client";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const usuarioConectado = JSON.parse(
      localStorage.getItem("usuarioConectado")
    );
    if (usuarioConectado) {
      setUserName(usuarioConectado.user);
    }
  }, []);

  return (
    <div>
      <h1>Bienvenido, {userName}</h1>
    </div>
  );
};

export default Dashboard;
