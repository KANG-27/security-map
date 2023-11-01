// import Tablas from "components/Inferior/Tablas.js";

import { useState, useEffect } from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryArea,
  VictoryTooltip,
  Bar,
} from "victory";

export default function GraficoBarrasAño({ candidatura }) {
  const data = { CandidaturaUno: [], CandidaturaDos: [] };

  LocalidadesV2.CandidaturaUno.años.forEach((element) => {
    data.CandidaturaUno.push({ x: element.año, y: element.TotalRobos });
  });
  LocalidadesV2.CandidaturaDos.años.forEach((element) => {
    data.CandidaturaDos.push({ x: element.año, y: element.TotalRobos });
  });

  return (
    <div className="flex gap-52">
      {/* Total de robos por año en la candidatura  */}
      <VictoryChart domainPadding={{ x: 30 }}>
        <VictoryBar
          name="area-3"
          data={data.CandidaturaUno}
          style={{ data: { fill: "#0f0d8f" } }}
          labels={({ datum }) => `Total de Robos: ${datum.y}`}
          labelComponent={<VictoryTooltip />}
          dataComponent={
            <Bar tabIndex={0} ariaLabel={({ datum }) => `x: ${datum.x}`} />
          }
        />
      </VictoryChart>
      {/* Total de robos por año en la candidatura dos */}
      <VictoryChart domainPadding={{ x: 30 }}>
        <VictoryBar
          name="area-3"
          data={data.CandidaturaDos}
          style={{ data: { fill: "#0f0d8f" } }}
          labels={({ datum }) => `Total de Robos: ${datum.y}`}
          labelComponent={<VictoryTooltip />}
          dataComponent={
            <Bar tabIndex={0} ariaLabel={({ datum }) => `x: ${datum.x}`} />
          }
        />
      </VictoryChart>
    </div>
  );
}
