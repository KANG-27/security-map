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
      <div className="flex gap-8 justify-center">
        <button
          data-value={"CandidaturaUno"}
          className="candidatura buttonyear text-md font-semibold"
          onClick={() => setCandidatura(0)}
        >
          Alcaldia Enrique Peñalosa
        </button>
        <button
          data-value={"CandidaturaUno"}
          className="candidatura buttonyear text-md font-semibold"
          onClick={() => setCandidatura(1)}
        >
          Alcaldia Claudia Lopez
        </button>
      </div>
      <div className="flex gap-10 justify-center">
        {candidatura == 0
          ? LocalidadesV2.CandidaturaUno.años.map((e) => (
              <>
                <button
                  data-value={e.año.toString()}
                  class="miBoton buttonyear text-sm font-semibold"
                  onClick={() => setAñoSeleccionado(e.año)}
                >
                  {e.año}
                </button>
              </>
            ))
          : LocalidadesV2.CandidaturaDos.años.map((e) => (
              <>
                <button
                  data-value={e.año.toString()}
                  class="miBoton buttonyear text-sm font-semibold"
                  onClick={() => setAñoSeleccionado(e.año)}
                >
                  {e.año}
                </button>
              </>
            ))}
      </div>

      <InformacionGeneral
        localidad={localidad}
        color={color}
        candidatura={candidatura}
        añoSeleccionado={añoSeleccionado}
      />
    </div>
  );
};
