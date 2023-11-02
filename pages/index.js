import { useEffect, useState } from "react";
import Map from "../components/Map/index";
import BarraSuperior from "@/components/BarraSuperior/BarraSuperior";
import Inferior from "@/components/Inferior/Inferior";
import LocalidadesV2 from "json/LocalidadesV2.json";

export default function Home() {
  const [cordenada, setCordenada] = useState([4.60971, -74.08175]);
  const [zoom, setZoom] = useState(11);
  const [color, setColor] = useState("white");
  const [localidad, setLocalidad] = useState();
  const [recuento, setRecuento] = useState();
  // candidaturaUno = 0 candidaturaDOS = 1

  const [candidatura, setCandidatura] = useState(1);
  const [añoSeleccionado, setAñoSeleccionado] = useState("2023");



  return (
    <div className="mt-10">
      <div className="mx-20">
        <BarraSuperior
          setCordenada={setCordenada}
          setZoom={setZoom}
          setColor={setColor}
          setLocalidad={setLocalidad}
          setRecuento={setRecuento}
          candidatura={candidatura}
          añoSeleccionado={añoSeleccionado}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-10 mb-10">
          <button
            type="button"
            className="cursor-pointer hover:text-slate-900 rounded-lg hover:bg-slate-100 px-3 py-2"
            onClick={() => setCandidatura(0)}
          >
            Candidatura 1
          </button>
          <button
            type="button"
            className="cursor-pointer hover:text-slate-900 rounded-lg hover:bg-slate-100 px-3 py-2"
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
                    type="button"
                    id={e.año}
                    className="cursor-pointer hover:text-slate-900 rounded-lg hover:bg-slate-100 px-3 py-2"
                    onClick={() => setAñoSeleccionado(e.año)}
                  >
                    {e.año}
                  </button>
                </>
              ))
            : LocalidadesV2.CandidaturaDos.años.map((e) => (
                <>
                  <button
                    type="button"
                    id={e.año}
                    className="cursor-pointer hover:text-slate-900 rounded-lg hover:bg-slate-100 px-3 py-2"
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
        recuento={recuento}
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
