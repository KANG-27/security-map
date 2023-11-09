import React from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import { VictoryBar, VictoryChart } from "victory";

export const ResumenSecundario = ({ añoSelect, localidad, candidatura }) => {
  let dataAlcaldiaContraria;

  if (candidatura == 0) {
    dataAlcaldiaContraria = LocalidadesV2.CandidaturaDos.años.filter(
      (x) => x.añoCandidatura == añoSelect[0].añoCandidatura
    );

  } else {
    dataAlcaldiaContraria = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.añoCandidatura == añoSelect[0].añoCandidatura
    );
  }

  return (
  <div>
     <VictoryChart>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  </div>
  );
};
