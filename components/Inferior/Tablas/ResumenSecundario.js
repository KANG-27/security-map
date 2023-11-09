import React from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import {
  Bar,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryPie,
  VictoryTooltip,
} from "victory";

export const ResumenSecundario = ({ añoSelect, localidad, candidatura }) => {
  let candidaturaCludia;
  let candidaturaEnrique;

  if (candidatura == 0) {
    let prueba = LocalidadesV2.CandidaturaDos.años.filter(
      (x) => x.añoCandidatura == añoSelect[0].añoCandidatura
    );
    let pruebaDos = prueba[0].centrosEnLocalidades.filter(
      (x) => x.LOCALIDADES == localidad
    );
    candidaturaCludia = pruebaDos[0];
    let quitararray = añoSelect[0].centrosEnLocalidades.filter(
      (x) => x.LOCALIDADES == localidad
    );
    candidaturaEnrique = quitararray[0];
  } else {
    let prueba = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.añoCandidatura == añoSelect[0].añoCandidatura
    );
    let pruebaDos = prueba[0].centrosEnLocalidades.filter(
      (x) => x.LOCALIDADES == localidad
    );
    candidaturaEnrique = pruebaDos[0];
    let quitararray = añoSelect[0].centrosEnLocalidades.filter(
      (x) => x.LOCALIDADES == localidad
    );
    candidaturaCludia = quitararray[0];
  }

  let resumenPie = [
    {
      x: candidaturaEnrique.LOCALIDADES,
      y: candidaturaEnrique.Total,
      u: "Enrique",
    },
    {
      x: candidaturaCludia.LOCALIDADES,
      y: candidaturaCludia.Total,
      u: "Claudia",
    },
  ];

  let resumenBarras = {
    candidaturaEnrique: [
      {
        quarter: "ArmaBlanca",
        earnings: parseInt(candidaturaEnrique.ArmaBlanca),
      },
      { quarter: "ArmaFuego", earnings: parseInt(candidaturaCludia.ArmaFuego) },
      {
        quarter: "Contundentes",
        earnings: parseInt(candidaturaEnrique.Contundentes),
      },
      {
        quarter: "Escopolamina",
        earnings: parseInt(candidaturaEnrique.Escopolamina),
      },
      {
        quarter: "NoReportados",
        earnings: parseInt(candidaturaEnrique.NoReportados),
      },
      { quarter: "SinArmas", earnings: parseInt(candidaturaEnrique.SinArmas) },
    ],
    candidaturaClaudia: [
      {
        quarter: "ArmaBlanca",
        earnings: parseInt(candidaturaCludia.ArmaBlanca),
      },
      { quarter: "ArmaFuego", earnings: parseInt(candidaturaCludia.ArmaFuego) },
      {
        quarter: "Contundentes",
        earnings: parseInt(candidaturaCludia.Contundentes),
      },
      {
        quarter: "Escopolamina",
        earnings: parseInt(candidaturaCludia.Escopolamina),
      },
      {
        quarter: "NoReportados",
        earnings: parseInt(candidaturaCludia.NoReportados),
      },
      { quarter: "SinArmas", earnings: parseInt(candidaturaCludia.SinArmas) },
    ],
  };

  return (
    <>
      {/* <span>claudia = {}</span> */}
      <div className="mx-96 flex flex-col">
        <VictoryPie
          data={resumenPie}
          colorScale={["grey", "darkcyan"]}
          labels={({ datum }) =>
            `Año candidatura ${añoSelect[0].añoCandidatura} de ${datum.u} Total de Robos: ${datum.y}`
          }
          labelComponent={<VictoryTooltip />}
          style={{
            labels: {
              fontSize: 6,
            },
          }}
        />
        <div className="flex flex-col">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              horizontal
              height={200} width={300}
              data={resumenBarras.candidaturaEnrique}
              x="quarter"
              y="earnings"
              labels={({ datum }) => ` ${datum.earnings}`}
              textAnchor="middle"
        style={{ fontSize: 18, fill: 'black' }}
            />
          </VictoryChart>
          <VictoryChart domainPadding={40}>
            <VictoryBar
              horizontal
              data={resumenBarras.candidaturaClaudia}
              x="quarter"
              y="earnings"
              labels={({ datum }) => ` ${datum.earnings}`}
              textAnchor="middle"
              
            />
          </VictoryChart>
        </div>
      </div>
    </>
  );
};
