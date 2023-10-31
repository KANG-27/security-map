// import Tablas from "components/Inferior/Tablas.js";

import { useState, useEffect } from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

export default function Tablas({ candidatura }) {
  let dataSelected;
  if (candidatura == 0) {
    dataSelected = LocalidadesV2.CandidaturaUno;
  } else {
    dataSelected = LocalidadesV2.CandidaturaDos;
  }

  console.log(dataSelected);

  let añosSelected=[];

  dataSelected.años.map((element) => {
    añosSelected.push(element.año);
  });

  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];



  return (
    <div>
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          //   tickValues={[1, 2, 3, 4]}
          tickFormat={añosSelected}
        />
        <VictoryAxis
          dependentAxis
          //   tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>
    </div>
  );
}
