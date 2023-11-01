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
  VictoryPie,
} from "victory";

export default function GraficoTortaRoboLocalidad({
  candidatura,
  añoSeleccionado,
}) {
  const dataSelected = [];

  if (candidatura == 0) {
    let buscarAño = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.año === añoSeleccionado
    );

    buscarAño.length > 0 &&
      buscarAño[0].centrosEnLocalidades.forEach((element, i) => {
        // console.log(element)
        let valReplace = element.Total.replace(".", "");
        dataSelected.push({
          x: i + 1,
          y: valReplace,
          placement: element.LOCALIDADES,
        });
      });
  }

  console.log(dataSelected);
  return (
    <div>
      <VictoryPie
        colorScale="warm"
        radius={120}
        style={{ labels: { padding: 2, fontSize: 10 } }}
        data={dataSelected}
        labels={({ datum }) => `${datum.placement}\nlabel`}
        labelPlacement={({ datum }) => datum.placement}
        labelPosition="startAngle"
        labelComponent={<VictoryTooltip active />}
      />
    </div>
  );
}
