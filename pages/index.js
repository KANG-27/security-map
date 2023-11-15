import { useEffect, useState } from "react";
import Map from "../components/Map/index";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import LocalidadesV2 from "json/LocalidadesV2.json";

import { LateralIzquierdo } from "@/components/LateralIzquierdo/LateralIzquierdo";
import { Inferior } from "@/components/Inferior/Inferior";
import { BarraLateral } from "@/components/BarraLateral/BarraLateral";
import InformacionGeneral from "@/components/LateralIzquierdo/InformacionGeneral";

export default function Home() {
  const [cordenada, setCordenada] = useState([4.60971, -74.08175]);
  const [zoom, setZoom] = useState(11);
  const [color, setColor] = useState("transparent");
  const [localidad, setLocalidad] = useState();
  // candidaturaUno = 0 candidaturaDOS = 1

  const [candidatura, setCandidatura] = useState(1);
  const [añoSeleccionado, setAñoSeleccionado] = useState();
  const [condicionSeleccion, setCondicionSeleccion] = useState(false);

  let data;
  let añoSelect;

  if (localidad != undefined) {
    if (candidatura == 0) {
      añoSelect = LocalidadesV2.CandidaturaUno.años.filter(
        (x) => x.año == añoSeleccionado
      );
      data =
        añoSelect.length > 0 &&
        añoSelect[0].centrosEnLocalidades.filter(
          (x) => x.LOCALIDADES == localidad
        );
    } else {
      añoSelect = LocalidadesV2.CandidaturaDos.años.filter(
        (x) => x.año == añoSeleccionado
      );
      data =
        añoSelect.length > 0 &&
        añoSelect[0].centrosEnLocalidades.filter(
          (x) => x.LOCALIDADES == localidad
        );
    }
  }

  useEffect(() => {
    const buttonsCandidatura = document.querySelectorAll(".candidatura");
    let lastClickedButtonCandidatura = null;

    buttonsCandidatura.forEach((button) => {
      button.addEventListener("click", () => {
        if (lastClickedButtonCandidatura !== button) {
          if (lastClickedButtonCandidatura) {
            lastClickedButtonCandidatura.classList.remove("active");
            // Desactivar los botones "buttons" cuando se activa un botón "buttonsCandidatura"
            disableButtons();
          }
          button.classList.add("active");
          lastClickedButtonCandidatura = button;
        }
      });
    });

    const buttons = document.querySelectorAll(".miBoton");
    let lastClickedButton = null;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (lastClickedButton !== button) {
          if (lastClickedButton) {
            lastClickedButton.classList.remove("active");
          }
          button.classList.add("active");
          lastClickedButton = button;
        }
      });
    });

    function disableButtons() {
      buttons.forEach((button) => {
        setAñoSeleccionado("");
        setCordenada([4.60971, -74.08175]);
        setColor("transparent");
        button.classList.remove("active");
      });
    }
  }, [candidatura, condicionSeleccion]);

  return (
    <div className="flex flex-col sm:flex-row">
      <BarraLateral
        candidatura={candidatura}
        setCandidatura={setCandidatura}
      />

      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-6">
          <BarraSuperior
            setCordenada={setCordenada}
            setZoom={setZoom}
            setColor={setColor}
            setLocalidad={setLocalidad}
            candidatura={candidatura}
            localidad={localidad}
            añoSelect={añoSelect}
            añoSeleccionado={añoSeleccionado}
            setAñoSeleccionado={setAñoSeleccionado}
            setCondicionSeleccion={setCondicionSeleccion}
          />
          <div className="flex flex-col items-center mb-10">
            {condicionSeleccion && (
              <div className="flex gap-5">
                <span class="material-symbols-outlined text-red-600">
                  error
                </span>
                <span className="text-red-600">
                  Seleccione un año antes de hacer una busqueda
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex-row items-center mx-10 lg:mx-20 gap-10">

          <InformacionGeneral
            localidad={localidad}
            color={color}
            candidatura={candidatura}
            añoSeleccionado={añoSeleccionado}
          />

          <div className="flex flex-col w-full gap-20 bg-[#171C2F] rounded-xl items-center px-5 pb-5">
            <span className="text-[#D5F379] text-4xl underline mt-10">Informacion sobre la zona</span>
            {localidad != undefined && añoSelect.length > 0 && (
              <div className="flex sm:flex-row flex-col justify-between mx-10 gap-20">
                <div className="bg-[#D5F379] px-5 py-2 rounded-lg flex justify-center">
                  <span class={
                    color == "red"
                      ? "text-red-600 material-symbols-outlined"
                      : color == "yellow"
                        ? "text-yellow-500 material-symbols-outlined"
                        : "text-green-600 material-symbols-outlined"
                  }                          >
                    error
                  </span>
                  <span className="text-base font-medium ml-2">
                    Esta zona es: {" "}
                    <span
                      className={
                        color == "red"
                          ? "text-red-600"
                          : color == "yellow"
                            ? "text-yellow-500"
                            : "text-green-600"
                      }
                    >
                      {color == "red"
                        ? " Peligrosa"
                        : color === "yellow"
                          ? "insegura"
                          : "Segura"}
                    </span>
                  </span>
                </div>
                <div className="bg-[#D5F379] px-5 py-2 rounded-lg flex">
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
                  <span className="text-base font-medium ml-2">
                    Cantidad de Hospitales: {data[0].hospital.length}
                  </span>
                </div>
                <div className="bg-[#D5F379] px-5 py-2 rounded-lg flex">
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
                  <span className="text-base font-medium ml-2">
                    Cantidad de CAI: {data[0].cai.length}
                  </span>
                </div>
              </div>
            )}
            <Map
              cordenadas={cordenada}
              zoom={zoom}
              color={color}
              localidades={localidad}
              candidatura={candidatura}
              añoSeleccionado={añoSeleccionado}
            />
          </div>
        </div>
        <Inferior añoSelect={añoSelect} localidad={localidad} candidatura={candidatura} />
        <div className="bg-slate-400 flex items-center gap-10 justify-evenly my-10">
          <div className="flex flex-col my-5 gap-3 text-sm">
            <span>Esta pagina fue creada por :</span>
            <span>Kevin Andres Niño Guerrero</span>
          </div>
          <div className="flex flex-col my-5 text-sm gap-3">
            <span>En colaboracion con :</span>
            <span>Sebastian David Melo Diaz</span>
            <span>Oscar Luis Mendoza Ariza</span>
            <span>Sebastian Garcia Rivera</span>
          </div>
        </div>
      </div>
    </div>
  );
}
