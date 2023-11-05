import { useEffect, useState } from "react";
import Map from "../components/Map/index";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Inferior from "@/components/Inferior/Inferior";
import LocalidadesV2 from "json/LocalidadesV2.json";

export default function Home() {
  const [cordenada, setCordenada] = useState([4.60971, -74.08175]);
  const [zoom, setZoom] = useState(11);
  const [color, setColor] = useState("transparent");
  const [localidad, setLocalidad] = useState();
  // candidaturaUno = 0 candidaturaDOS = 1

  const [candidatura, setCandidatura] = useState(1);
  const [añoSeleccionado, setAñoSeleccionado] = useState();
  const [condicionSeleccion, setCondicionSeleccion] = useState(false);

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
        setAñoSeleccionado("")
        setCordenada([4.60971, -74.08175])
        setColor("transparent")
        button.classList.remove("active");
      });
    }
  }, [candidatura, condicionSeleccion]);


  return (
    <div className="mt-10">
      <div className="mx-20">
        <BarraSuperior
          setCordenada={setCordenada}
          setZoom={setZoom}
          setColor={setColor}
          setLocalidad={setLocalidad}
          candidatura={candidatura}
          añoSeleccionado={añoSeleccionado}
          setCondicionSeleccion={setCondicionSeleccion}
        />
        <div className="flex flex-col items-center mb-10">
          {condicionSeleccion && (
            <div className="flex text-center">
              <span class="material-symbols-outlined text-red-600 mr-5">
                error
              </span>
              <span className="text-red-600">
                Seleccione un año antes de hacer una busqueda
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-10 mb-10">
          <button
            data-value={"CandidaturaUno"}
            className="candidatura buttonyear"
            onClick={() => setCandidatura(0)}
          >
            Candidatura 1
          </button>
          <button
            data-value={"CandidaturaUno"}
            className="candidatura buttonyear"
            onClick={() => setCandidatura(1)}
          >
            Candidatura 2
          </button>
        </div>
        <div className="flex gap-10 mb-10">
          {candidatura == 0
            ? LocalidadesV2.CandidaturaUno.años.map((e) => (
                <>
                  <button
                    data-value={e.año.toString()}
                    class="miBoton buttonyear"
                    onClick={() => setAñoSeleccionado(e.año)}
                  >
                    {e.año}
                  </button>
                </>
              ))
            : LocalidadesV2.CandidaturaDos.años.map((e) => (
                <>
                  <button
                    data-value={e.año.toString()}
                    class="miBoton buttonyear"
                    onClick={() => setAñoSeleccionado(e.año)}
                  >
                    {e.año}
                  </button>
                </>
              ))}
        </div>
        <Map
          cordenadas={cordenada}
          zoom={zoom}
          color={color}
          localidades={localidad}
          candidatura={candidatura}
          añoSeleccionado={añoSeleccionado}
        />
      </div>
      <Inferior
        localidad={localidad}
        color={color}
        candidatura={candidatura}
        añoSeleccionado={añoSeleccionado}
      />

      <div className="bg-slate-400 flex items-center gap-10 justify-evenly my-10">
        <div className="flex flex-col my-5">
          <span className="text-xs">Esta pagina fue creada por :</span>
          <span className="text-xs  mt-3">Kevin Andres Niño Guerrero</span>
        </div>
        <div className="flex flex-col my-5">
          <span className="text-xs flex  ">En colaboracion con :</span>
          <span className="text-xs flex  mt-3">Sebastian David Melo Diaz</span>
          <span className="text-xs flex  mt-3">Oscar Luiz Mendoza Ariza</span>
        </div>
      </div>
    </div>
  );
}
