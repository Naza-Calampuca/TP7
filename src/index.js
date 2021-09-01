import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

import React, { Fragment, useState } from 'react';

import { useForm } from 'react-hook-form';

const index = () => {
  const { register, errors, handleSubmit } = useForm();

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...Entradas, data]);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> EjemploUno </h1>
        <input
          name="titulo"
          placeholder="Ingrese Titulo"
          className="form-control"
          ref={register({
            required: { value: true, message: 'Titulo Obligatorio' },
            minLenght: { value: 2, message: 'Minimo 2 letras' }
          })}
        />

        {errors.titulo && (
          <span className="text-danger text-small d-block mb-2">
            {errors.titulo.message}
          </span>
        )}

        <input
          name="descripcion"
          placeholder="Ingrese Descripcion"
          className="form-control"
          ref={register({
            required: { value: true, message: 'Titulo Obligatorio' }
          })}
        />

        {errors.descripcion && (
          <span className="text-danger text-small d-block mb-2">
            {errors.descripcion.message}
          </span>
        )}
        <button className="btn btn- primary">Agregar </button>
      </form>

      <ul>
        {Entradas.map(item => (
          <li>
            {item.titulo} - {item.descripcion}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default index;
