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
  VictoryPolarAxis,
  VictoryLabel,
} from "victory";

export default function GraficoBarrasAño({ candidatura }) {
  const [graficoAño, setGraficoAño] = useState(false);

  const data = { CandidaturaUno: [], CandidaturaDos: [] };

  let datacompleta = [];

  LocalidadesV2.CandidaturaUno.años.forEach((element) => {
    data.CandidaturaUno.push({ x: element.año, y: element.TotalRobos });
    datacompleta.push({ x: element.año, y: element.TotalRobos });
  });
  LocalidadesV2.CandidaturaDos.años.forEach((element) => {
    data.CandidaturaDos.push({ x: element.año, y: element.TotalRobos });
    datacompleta.push({ x: element.año, y: element.TotalRobos });
  });

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between bg-[#D3D3D3] rounded-lg px-5 mt-20 mx-5 mr-10 cursor-pointer"
        onClick={() => {
          setGraficoAño(!graficoAño);
        }}
      >
        <span>Grafico por año</span>
        
        <span>{graficoAño?"+":"-"}</span>
      </div>
      {graficoAño && (
        <div className="mx-60">
        <VictoryChart>
          <VictoryArea
            interpolation="natural"
            data={datacompleta}
            style={{
              data: {
                fill: "#483D8B",
                fillOpacity: 0.7,
              },
              labels: {
                fontSize: 11,
              },
            }}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryLabel renderInPortal dy={-20} />}
          />
        </VictoryChart>
        </div>
      )}

      {/* Total de robos por año en la candidatura  */}
      {/* <VictoryChart domainPadding={{ x: 30 }}>
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
      </VictoryChart> */}
      {/* Total de robos por año en la candidatura dos */}
      {/* <VictoryChart domainPadding={{ x: 30 }}>
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
      </VictoryChart> */}
    </div>
  );
}
