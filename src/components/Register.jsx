import React, { useState } from "react";

const Register = () => {
  const valoresIniciales = {
    bussinesName: "",
    ruc: "",
    telephone: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
  };

  const [datos, setDatos] = useState(valoresIniciales);

  const handleInputChange = (e) => {
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
        <label htmlFor="bussinesName">Nombre de la empresa</label>
        <input
          type="text"
          name="bussinesName"
          id="bussinesName"
          onChange={handleInputChange}
          value={datos.bussinesName}
        />
      </div>
      <div>
        <label htmlFor="ruc">RUC</label>
        <input
          type="text"
          name="ruc"
          id="ruc"
          onChange={handleInputChange}
          value={datos.ruc}
        />
      </div>
      <div>
        <label htmlFor="telephone">Teléfono</label>
        <input
          type="text"
          name="telephone"
          id="telephone"
          onChange={handleInputChange}
          value={datos.telephone}
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={datos.email}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          value={datos.password}
        />
      </div>
      <div>
        <label htmlFor="name">Nombre del representante</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          value={datos.name}
        />
      </div>
      <div>
        <label htmlFor="lastname">Apellido del representante</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          onChange={handleInputChange}
          value={datos.lastname}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
