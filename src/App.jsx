import React from "react";
import { useEffect } from "react";
import Login from "./components/Login";
import { getBusiness } from "./services/getBusiness";

const App = () => {
  const [business, setBusiness] = React.useState([]);

  useEffect(() => {
    const getApi = async () => {
      const data = await getBusiness();
      setBusiness(data);
      console.log(data);
    };
    getApi();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>delivery</h2>
      <Login />
      {/* <Register /> */}
      <section>
        {business?.map((item) => (
          <div key={item.id}>
            <h3>Nombre de la empresa: {item.name}</h3>
            <p>ruc: {item.ruc}</p>
            <p>celular: {item.telephone}</p>
            <p>email: {item.email}</p>
            <p>Nombre del representante: {item.name}</p>
            <p>Apellido del representante: {item.lastname}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
