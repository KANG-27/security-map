// import Tablas from "components/Inferior/Tablas.js";

import { useState, useEffect } from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import { VictoryChart, VictoryArea, VictoryLabel } from "victory";

export default function GraficoBarrasAño({ candidatura }) {
  const [graficoAño, setGraficoAño] = useState(true);

  const [datacompleta, setDatacompleta] = useState();

  useEffect(() => {
    if (candidatura == 0) {
      setDatacompleta((element) => {
        let variable = [];
        LocalidadesV2.CandidaturaUno.años.forEach((element) => {
          variable.push({ x: element.año, y: element.TotalRobos });
        });
        return variable;
      });
    } else {
      setDatacompleta((element) => {
        let variable = [];
        LocalidadesV2.CandidaturaDos.años.forEach((element) => {
          variable.push({ x: element.año, y: element.TotalRobos });
        });
        return variable;
      });
    }
  }, [candidatura]);

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between bg-[#D3D3D3] rounded-lg px-5 mt-20 mx-5 mr-10 cursor-pointer"
        onClick={() => {
          setGraficoAño(!graficoAño);
        }}
      >
        <span>Grafico por año</span>
        <span>{graficoAño ? "+" : "-"}</span>
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
    </div>
  );
}
