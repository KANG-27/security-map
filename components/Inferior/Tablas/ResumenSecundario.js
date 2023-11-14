import React from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import {
  Bar,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryPie,
  VictoryTheme,
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
      <div className="mx-20 flex flex-col items-center mt-5 gap-8 border-t-2 border-dashed border-[#171C2F]">
        <div className="flex items-center gap-2 mt-10">
          <span className="font-bold text-2xl">Años de alcaldia: </span>
          <span className="text-2xl"> {añoSelect[0].añoCandidatura}</span>
        </div>
        <div className="pie-total-hurtos-select flex gap-3 items-center mt-10">
          <div className="flex justify-center">
            <VictoryPie
              data={resumenPie}
              colorScale={["#D5F379", "#171C2F"]}
              labels={({ datum }) =>
                `Año candidatura ${añoSelect[0].añoCandidatura} de ${datum.u} Total de Robos: ${datum.y}`
              }
              labelComponent={<VictoryTooltip />}
              style={{
                labels: {
                  fontSize: 20,
                },
              }}
            />
          </div>
          <div className="bg-[#171C2F] flex p-10 rounded-xl shadow-2xl">
            <div className="flex flex-col gap-6 items-center">
              <span className="text-xl text-white underline">Enrique peñaloza</span>
              {/* cai */}
              <div className="flex items-center bg-[#D5F379] rounded-lg px-5 py-2 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={29}
                  fill="none"
                >
                  <path
                    fill="#171C2F"
                    d="m14.694 14.81 1.15 4.957-4.344-2.62-4.344 2.62 1.15-4.945-3.834-3.31 5.06-.434L11.5 6.414l1.968 4.652 5.06.434-3.834 3.31ZM0 5.11v7.667C0 19.869 4.907 26.5 11.5 28.11 18.093 26.501 23 19.87 23 12.778V5.11L11.5 0 0 5.111Z"
                  />
                </svg>
                <span className="ml-2">Cantidad de CAI: {candidaturaEnrique.cai.length}</span>
              </div>
              {/* hospitales */}
              <div className="flex items-center bg-[#D5F379] rounded-lg px-5 py-2 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  fill="none"
                >
                  <path
                    fill="#171C2F"
                    d="M26.667 6.667h-4V1.333c0-.8-.534-1.333-1.334-1.333H6.667c-.8 0-1.334.533-1.334 1.333v5.334h-4C.533 6.667 0 7.2 0 8v18.667C0 27.467.533 28 1.333 28h25.334c.8 0 1.333-.533 1.333-1.333V8c0-.8-.533-1.333-1.333-1.333ZM8 22.667H6.667c-.8 0-1.334-.534-1.334-1.334S5.867 20 6.667 20H8c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.334-1.333 1.334Zm0-5.334H6.667c-.8 0-1.334-.533-1.334-1.333 0-.8.534-1.333 1.334-1.333H8c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.333-1.333 1.333Zm6.667 5.334h-1.334c-.8 0-1.333-.534-1.333-1.334S12.533 20 13.333 20h1.334c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.334-1.333 1.334Zm0-5.334h-1.334C12.533 17.333 12 16.8 12 16c0-.8.533-1.333 1.333-1.333h1.334c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.333-1.333 1.333ZM16 10h-.667v.667c0 .8-.533 1.333-1.333 1.333-.8 0-1.333-.533-1.333-1.333V10H12c-.8 0-1.333-.533-1.333-1.333 0-.8.533-1.334 1.333-1.334h.667v-.666c0-.8.533-1.334 1.333-1.334.8 0 1.333.534 1.333 1.334v.666H16c.8 0 1.333.534 1.333 1.334S16.8 10 16 10Zm5.333 12.667H20c-.8 0-1.333-.534-1.333-1.334S19.2 20 20 20h1.333c.8 0 1.334.533 1.334 1.333 0 .8-.534 1.334-1.334 1.334Zm0-5.334H20c-.8 0-1.333-.533-1.333-1.333 0-.8.533-1.333 1.333-1.333h1.333c.8 0 1.334.533 1.334 1.333 0 .8-.534 1.333-1.334 1.333Z"
                  />
                </svg>
                <span className="ml-2">Cantidad de hospitales: {candidaturaEnrique.hospital.length}</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center border-l-2 border-[#D5F379] ml-5 pl-5">
              <span className="text-xl text-white underline ">Claudia Lopez</span>
              {/* cai */}
              <div className="flex items-center bg-[#D5F379] rounded-lg px-5 py-2 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={29}
                  fill="none"
                >
                  <path
                    fill="#171C2F"
                    d="m14.694 14.81 1.15 4.957-4.344-2.62-4.344 2.62 1.15-4.945-3.834-3.31 5.06-.434L11.5 6.414l1.968 4.652 5.06.434-3.834 3.31ZM0 5.11v7.667C0 19.869 4.907 26.5 11.5 28.11 18.093 26.501 23 19.87 23 12.778V5.11L11.5 0 0 5.111Z"
                  />
                </svg>
                <span className="ml-2">Cantidad de CAI: {candidaturaCludia.cai.length}</span>
              </div>
              {/* hospitales */}
              <div className="flex items-center bg-[#D5F379] rounded-lg px-5 py-2 w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  fill="none"
                >
                  <path
                    fill="#171C2F"
                    d="M26.667 6.667h-4V1.333c0-.8-.534-1.333-1.334-1.333H6.667c-.8 0-1.334.533-1.334 1.333v5.334h-4C.533 6.667 0 7.2 0 8v18.667C0 27.467.533 28 1.333 28h25.334c.8 0 1.333-.533 1.333-1.333V8c0-.8-.533-1.333-1.333-1.333ZM8 22.667H6.667c-.8 0-1.334-.534-1.334-1.334S5.867 20 6.667 20H8c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.334-1.333 1.334Zm0-5.334H6.667c-.8 0-1.334-.533-1.334-1.333 0-.8.534-1.333 1.334-1.333H8c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.333-1.333 1.333Zm6.667 5.334h-1.334c-.8 0-1.333-.534-1.333-1.334S12.533 20 13.333 20h1.334c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.334-1.333 1.334Zm0-5.334h-1.334C12.533 17.333 12 16.8 12 16c0-.8.533-1.333 1.333-1.333h1.334c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.333-1.333 1.333ZM16 10h-.667v.667c0 .8-.533 1.333-1.333 1.333-.8 0-1.333-.533-1.333-1.333V10H12c-.8 0-1.333-.533-1.333-1.333 0-.8.533-1.334 1.333-1.334h.667v-.666c0-.8.533-1.334 1.333-1.334.8 0 1.333.534 1.333 1.334v.666H16c.8 0 1.333.534 1.333 1.334S16.8 10 16 10Zm5.333 12.667H20c-.8 0-1.333-.534-1.333-1.334S19.2 20 20 20h1.333c.8 0 1.334.533 1.334 1.333 0 .8-.534 1.334-1.334 1.334Zm0-5.334H20c-.8 0-1.333-.533-1.333-1.333 0-.8.533-1.333 1.333-1.333h1.333c.8 0 1.334.533 1.334 1.333 0 .8-.534 1.333-1.334 1.333Z"
                  />
                </svg>
                <span className="ml-2">Cantidad de hospitales: {candidaturaCludia.hospital.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#D5F379] rounded-xl shadow-2xl flex flex-col items-center mt-10 w-full">
          <span className="font-bold text-3xl my-5">Tipos de hurto</span>
          <div className="flex flex-col lg:flex-row items-center barras-laterales-selected w-full">
            <div className="flex flex-col items-center gap-1 lg::gap-3 bg-[#171C2F] rounded-xl m-5 w-full">
              <span className="text-xl underline text-[#D5F379]">Enrique Peñalosa</span>
              <VictoryChart domainPadding={50} theme={VictoryTheme.material} fill="#D5F379">
                <VictoryBar
                  style={{ data: { fill: "#D5F379" }, labels: { fill: "#D5F379" }, fill: "#D5F379", stroke: "#D5F379" }}
                  horizontal
                  data={resumenBarras.candidaturaEnrique}
                  x="quarter"
                  y="earnings"
                  labels={({ datum }) => ` ${datum.earnings}`}
                  textAnchor="middle"
                // style={{ fontSize: 18, fill: "black" }}
                />
              </VictoryChart>
            </div>

            <div className="flex flex-col items-center gap-1 lg::gap-3 bg-[#171C2F] rounded-xl m-5  w-full">
              <span className="text-xl underline text-[#D5F379]">Claudia Lopez</span>
              <VictoryChart domainPadding={50} theme={VictoryTheme.material} fill="#D5F379">
                <VictoryBar
                  style={{ data: { fill: "#D5F379" }, labels: { fill: "#D5F379" }, fill: "#D5F379", stroke: "#D5F379" }}
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
        </div>
      </div>
    </>
  );
};
