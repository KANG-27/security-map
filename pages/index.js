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
    <div className="flex">
      <BarraLateral
        candidatura={candidatura}
        setCandidatura={setCandidatura}
      />
      <div className="flex flex-col w-full">

        <div className="mx-10 lg:mx-20 flex flex-col gap-6">
          <BarraSuperior
            setCordenada={setCordenada}
            setZoom={setZoom}
            setColor={setColor}
            setLocalidad={setLocalidad}
            candidatura={candidatura}
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
        <div className=" lg:flex-row items-center mx-10 lg:mx-20 gap-10">

          <InformacionGeneral
            localidad={localidad}
            color={color}
            candidatura={candidatura}
            añoSeleccionado={añoSeleccionado}
          />

          <div className="flex flex-col w-full gap-20">
            {localidad != undefined && añoSelect.length > 0 && (
              <div className="flex justify-between mx-10">
                <span className="text-base">
                  Esta zona es{" "}
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
                  </span>{" "}
                </span>

                <span className="text-base">
                  Cantidad de Hospitales: {data[0].hospital.length}
                </span>
                <span className="text-base">
                  Cantidad de CAI: {data[0].cai.length}
                </span>
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
