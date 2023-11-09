import React from "react";
import { ResumenPrincipal } from "./Tablas/ResumenPrincipal";
import { ResumenSecundario } from "./Tablas/ResumenSecundario";

export const Inferior = ({ localidad, añoSelect }) => {
  return (
    <>
      {localidad != undefined && añoSelect.length > 0 ? (
        <ResumenSecundario/>
      ) : (
        <ResumenPrincipal/>
      )}
    </>
  );
};
