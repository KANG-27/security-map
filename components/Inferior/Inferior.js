import React from "react";
import { ResumenPrincipal } from "./Tablas/ResumenPrincipal";
import { ResumenSecundario } from "./Tablas/ResumenSecundario";

export const Inferior = ({ localidad, añoSelect, candidatura }) => {
  return (
    <>
      {localidad != undefined && añoSelect.length > 0 ? (
        <ResumenSecundario localidad={localidad} añoSelect={añoSelect} candidatura={candidatura}/>
      ) : (
        <ResumenPrincipal/>
      )}
    </>
  );
};
