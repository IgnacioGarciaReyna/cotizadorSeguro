import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  const [cargando, guardarCargando] = useState(false);

  //extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de seguro" />;
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        {/*Podría ser así, pero no queremos llenar todo de ternarios: {datos ? <Resumen /> : null} */}
        <Resumen datos={datos} />

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
