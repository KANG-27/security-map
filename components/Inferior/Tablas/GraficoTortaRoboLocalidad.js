// import Tablas from "components/Inferior/Tablas.js";

import { useState } from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";

import {
  VictoryTooltip,
  VictoryPie,
} from "victory";

export default function GraficoTortaRoboLocalidad({
  candidatura,
  añoSeleccionado,
}) {
  const [graficoRoboLocalidad, setGraficoRoboLocalidad] = useState(true);

  const dataSelected = [];

  if (candidatura == 0) {
    let buscarAño = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.año === añoSeleccionado
    );

    buscarAño.length > 0 &&
      buscarAño[0].centrosEnLocalidades.forEach((element, i) => {
        let valReplace = element.Total.replace(".", "");
        dataSelected.push({
          x: element.LOCALIDADES,
          y: valReplace,
        });
      });
  } else {
    let buscarAño = LocalidadesV2.CandidaturaDos.años.filter(
      (x) => x.año === añoSeleccionado
    );

    buscarAño.length > 0 &&
      buscarAño[0].centrosEnLocalidades.forEach((element, i) => {
        let valReplace = element.Total.replace(".", "");
        dataSelected.push({
          x: element.LOCALIDADES,
          y: valReplace,
        });
      });
  }

  return (
    <div className="flex flex-col">
      <div
        className="flex justify-between bg-[#D3D3D3] rounded-lg px-5 mt-20 mx-5 mr-10 cursor-pointer"
        onClick={() => {
          setGraficoRoboLocalidad(!graficoRoboLocalidad);
        }}
      >
        <span>Grafico Torta robos por localidades</span>

        <span>{graficoRoboLocalidad ? "+" : "-"}</span>
      </div>
      {graficoRoboLocalidad && (
        <div className=" mx-5 ml-14 mt-20">
          <span>Localidades:</span>
          <div className="grid grid-cols-4 my-5">
            {dataSelected.map((element) => (
              <>
                <span>{element.x}</span>
              </>
            ))}
          </div>
          <div className="mx-60">
            <VictoryPie
              data={dataSelected}
              colorScale={[
                "MediumSlateBlue",
                "RebeccaPurple",
                "DarkSlateBlue",
                "SlateBlue",
                "Indigo",
                "Purple",
              ]}
              labels={({ datum }) => `${datum.x} Total de Robos: ${datum.y}`}
              labelComponent={<VictoryTooltip />}
              style={{
                labels: {
                  fontSize: 10,
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
