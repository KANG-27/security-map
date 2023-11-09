import React from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import { VictoryBar, VictoryChart, VictoryPie, VictoryTooltip } from "victory";

export const ResumenSecundario = ({ añoSelect, localidad, candidatura }) => {
  let candidaturaCludia;
  let candidaturaEnrique;

  if (candidatura == 0) {
    let prueba = LocalidadesV2.CandidaturaDos.años.filter(
      (x) => x.añoCandidatura == añoSelect[0].añoCandidatura
    );
    let pruebaDos = prueba[0].centrosEnLocalidades.filter((x)=>x.LOCALIDADES==localidad)
    candidaturaCludia = pruebaDos[0];
    let quitararray = añoSelect[0].centrosEnLocalidades.filter((x)=>x.LOCALIDADES==localidad);
    candidaturaEnrique = quitararray[0]
  } else {
    let prueba = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.añoCandidatura == añoSelect[0].añoCandidatura
    );
    let pruebaDos = prueba[0].centrosEnLocalidades.filter((x)=>x.LOCALIDADES==localidad)
    candidaturaEnrique = pruebaDos[0];
    let quitararray = añoSelect[0].centrosEnLocalidades.filter((x)=>x.LOCALIDADES==localidad);
    candidaturaCludia = quitararray[0]
  }


  console.log(candidaturaEnrique)
  console.log(candidaturaCludia)

  let resumenPie = [
    { x: candidaturaEnrique.LOCALIDADES, y: candidaturaEnrique.Total, u:"Enrique"},
    { x: candidaturaCludia.LOCALIDADES, y:candidaturaCludia.Total, u:"Claudia" },
  ];

  return (
    <>
    {/* <span>claudia = {}</span> */}
      <div className="mx-96">
        <VictoryPie
        height={300}
          data={resumenPie}
          colorScale={[
            "grey",
            "darkcyan",
          ]}
          labels={({ datum }) => `Año candidatura ${añoSelect[0].añoCandidatura} de ${datum.u} Total de Robos: ${datum.y}`}
          labelComponent={<VictoryTooltip />}
          style={{
            labels: {
              fontSize: 6,
            },
          }}
        />
      </div>
    </>
  );
};
