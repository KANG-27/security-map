// import Tablas from "components/Inferior/Tablas.js";

import { useState } from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import {
  VictoryChart,
  VictoryArea,
  VictoryTooltip,
  VictoryLabel,
  VictoryPie,
} from "victory";

export default function GraficoBarrasAño() {

  const data = { CandidaturaUno: [], CandidaturaDos: [] };

  LocalidadesV2.CandidaturaUno.años.forEach((element) => {
    data.CandidaturaUno.push({ x: element.año, y: element.TotalRobos });
  });
  LocalidadesV2.CandidaturaDos.años.forEach((element) => {
    data.CandidaturaDos.push({ x: element.año, y: element.TotalRobos });
  });

  const dataCais = { CandidaturaUno: [], CandidaturaDos: [] };

  LocalidadesV2.CandidaturaUno.años.forEach((element) => {
    dataCais.CandidaturaUno.push({ x: element.año, y: element.totalCais });
  });
  LocalidadesV2.CandidaturaDos.años.forEach((element) => {
    dataCais.CandidaturaDos.push({ x: element.año, y: element.totalCais });
  });

  const dataHospitales = { CandidaturaUno: [], CandidaturaDos: [] };

  LocalidadesV2.CandidaturaUno.años.forEach((element) => {
    dataHospitales.CandidaturaUno.push({
      x: element.año,
      y: element.totalhospitales,
    });
  });
  LocalidadesV2.CandidaturaDos.años.forEach((element) => {
    dataHospitales.CandidaturaDos.push({
      x: element.año,
      y: element.totalhospitales,
    });
  });

  return (
    <div className="flex flex-col w-full">
      <div className="flex mt-10 w-full">
        <div className="flex flex-col ml-10">
          <span>Alcaldia Enrique Peñalosa</span>
          <div className="mt-10">
            <div>
              <span>Cantidad de hurtos por año</span>
              <VictoryChart>
                <VictoryArea
                  interpolation="natural"
                  data={data.CandidaturaUno}
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
            <div>
              <span>Cantidad de CAI</span>
              <VictoryPie
                data={dataCais.CandidaturaUno}
                colorScale={[
                  "MediumSlateBlue",
                  "RebeccaPurple",
                  "DarkSlateBlue",
                  "SlateBlue",
                  "Indigo",
                  "Purple",
                ]}
                labels={({ datum }) => `${datum.x} Total de CAIS: ${datum.y}`}
                labelComponent={<VictoryTooltip />}
                style={{
                  labels: {
                    fontSize: 10,
                  },
                }}
              />
            </div>
            <div>
              <span>Cantidad de Hospitales</span>
              <VictoryPie
                data={dataHospitales.CandidaturaUno}
                colorScale={[
                  "Teal",
                  "LightSeaGreen",
                  "DarkOliveGreen",
                  "Olive",
                  "OliveDrab",
                  "DarkGreen",
                ]}
                labels={({ datum }) => `${datum.x} Total de Hospitales: ${datum.y}`}
                labelComponent={<VictoryTooltip />}
                style={{
                  labels: {
                    fontSize: 10,
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-10">
          <span>Alcaldia Claudia Lopez</span>
          <div className="mt-10">
            <div>
              <span>Cantidad de hurtos por año</span>
              <VictoryChart>
                <VictoryArea
                  interpolation="natural"
                  data={data.CandidaturaDos}
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
            <div>
              <span>Cantidad de CAI</span>
              <VictoryPie
                data={dataCais.CandidaturaDos}
                colorScale={[
                  "MediumSlateBlue",
                  "RebeccaPurple",
                  "DarkSlateBlue",
                  "SlateBlue",
                  "Indigo",
                  "Purple",
                ]}
                labels={({ datum }) => `${datum.x} Total de CAIS: ${datum.y}`}
                labelComponent={<VictoryTooltip />}
                style={{
                  labels: {
                    fontSize: 10,
                  },
                }}
              />
            </div>
            <div>
              <span>Cantidad de Hospitales</span>
              <VictoryPie
                data={dataHospitales.CandidaturaDos}
                colorScale={[
                  "Teal",
                  "LightSeaGreen",
                  "DarkOliveGreen",
                  "Olive",
                  "OliveDrab",
                  "DarkGreen",
                ]}
                labels={({ datum }) => `${datum.x} Total de Hospitales: ${datum.y}`}
                labelComponent={<VictoryTooltip />}
                style={{
                  labels: {
                    fontSize: 10,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
