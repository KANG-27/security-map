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
    <div className="mx-10">
      <div className="flex gap-10 mb-10 justify-center">
        <button
          data-value={"CandidaturaUno"}
          className="candidatura buttonyear"
          onClick={() => setCandidatura(0)}
        >
          Alcaldia Enrique Peñaolsa
        </button>
        <button
          data-value={"CandidaturaUno"}
          className="candidatura buttonyear"
          onClick={() => setCandidatura(1)}
        >
          Alcaldia Claudia Lopez
        </button>
      </div>
      <div className="flex gap-10 mb-10">
        {candidatura == 0
          ? LocalidadesV2.CandidaturaUno.años.map((e) => (
              <>
                <button
                  data-value={e.año.toString()}
                  class="miBoton buttonyear"
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
                  class="miBoton buttonyear"
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
