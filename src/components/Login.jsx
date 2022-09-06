import React, { useState } from "react";

const Login = () => {
  const valoresIniciales = {
    email: "",
    password: "",
  };

  const [datos, setDatos] = useState(valoresIniciales);

  const handleImputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos(valoresIniciales);
    console.log(datos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleImputChange}
          value={datos.email}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleImputChange}
          value={datos.password}
        />
      </div>
      <button type="submit">acceder</button>
    </form>
  );
};

export default Login;
