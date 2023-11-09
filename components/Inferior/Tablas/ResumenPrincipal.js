import React from 'react'
import LocalidadesV2 from "json/LocalidadesV2.json";
import { Bar, VictoryBar, VictoryChart, VictoryPie } from 'victory';
export const ResumenPrincipal = () => {
  let cai_Enrique = LocalidadesV2.CandidaturaUno.totalCais;
  let cai_Claudia = LocalidadesV2.CandidaturaDos.totalCais;
  console.log();

  return (
    <div>
      <VictoryChart height={400} width={400}
          domainPadding={{ x: 50, y: [0, 20] }}
          scale={{ x: "time" }}
        >
          <VictoryBar
            data={[
              { x: new Date(LocalidadesV2.CandidaturaUno.años[0].año, 1, 1), y: 50 },
              { x: new Date(LocalidadesV2.CandidaturaUno.años[1].año, 1, 1), y: 70 },
              { x: new Date(LocalidadesV2.CandidaturaUno.años[2].año, 1, 1), y: 100 },
              { x: new Date(LocalidadesV2.CandidaturaUno.años[3].año, 1, 1), y: 200 }
            ]}
          />
        </VictoryChart>
        <div>
          <VictoryPie
          style={{ labels: { fill: "white" } }}
          innerRadius={100}
          labelRadius={110}
          labels={({ datum }) => `${datum.y}`}
          data={[
            { x: 1, y: LocalidadesV2.CandidaturaUno.años[0].año},
            { x: 1, y: LocalidadesV2.CandidaturaUno.años[1].año},
            { x: 1, y: LocalidadesV2.CandidaturaUno.años[2].año},
            { x: 1, y: LocalidadesV2.CandidaturaUno.años[3].año}
          ]}
        />
    </div>
    </div>
  )
}
