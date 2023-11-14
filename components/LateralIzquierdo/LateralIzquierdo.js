import React from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import InformacionGeneral from "./InformacionGeneral";

export const LateralIzquierdo = ({
  localidad,
  color,
  añoSeleccionado,
  candidatura,
  setCandidatura,
  setAñoSeleccionado,
}) => {
  return (
    <div className="flex flex-col gap-6 max-w-full">
      <InformacionGeneral
        localidad={localidad}
        color={color}
        candidatura={candidatura}
        añoSeleccionado={añoSeleccionado}
      />
    </div>
  );
};
