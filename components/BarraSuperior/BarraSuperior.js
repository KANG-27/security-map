import Logo from "../Logo/Logo";
import React, { FC, useEffect, useState } from "react";
import LocalidadesV2 from "json/LocalidadesV2.json";
import { AutoComplete } from "primereact/autocomplete";

export default function BarraSuperior({
  setCordenada,
  setZoom,
  setColor,
  setLocalidad,
  candidatura,
  añoSeleccionado,
  setCondicionSeleccion,
  setAñoSeleccionado
}) {
  // se creo esta variable por que no se actualiza el estado en la primera carga por ende no deja que el usuario busque
  var valor = "";
  const [change, setChange] = useState();
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  let dataSelected;

  if (candidatura == 0) {
    dataSelected = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.año === añoSeleccionado
    );
  } else {
    dataSelected = LocalidadesV2.CandidaturaDos.años.filter(
      (x) => x.año === añoSeleccionado
    );
  }

  // Guarda las variables que son necesarias para pintar el mapa
  if (change != undefined) {
    if (dataSelected.length > 0) {
      var valueSelected = dataSelected[0].centrosEnLocalidades.filter(
        (value) => value.LOCALIDADES == change
      );
      setLocalidad(valueSelected[0].LOCALIDADES);
      setCordenada(valueSelected[0].CoordenadasUpz);
      setColor(valueSelected[0].Categorizacion);
      setZoom(400);
    }
  }

  // busca dentro de la data lo que escribio el usuario
  const search = () => {
    const coincidencias = [];
    for (let i = 0; i < dataSelected[0].centrosEnLocalidades.length; i++) {
      const texto = dataSelected[0].centrosEnLocalidades[i].LOCALIDADES;
      const textoMinusculas = texto.toLowerCase();
      const letraMinusculas = valor.toLowerCase();
      for (let j = 0; j < texto.length; j++) {
        if (
          textoMinusculas.substring(j, j + valor.length) === letraMinusculas
        ) {
          coincidencias.push(texto);
        }
      }
    }
    setItems(coincidencias !== "" && coincidencias);
  };

  setCondicionSeleccion(dataSelected.length <= 0 ? true : false);

  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center">
        <span>Año de candidatura</span>
        <div className="flex gap-10 justify-center ml-5">
          {candidatura == 0
            ? LocalidadesV2.CandidaturaUno.años.map((e) => (
              <>
                <button
                  data-value={e.año.toString()}
                  class="miBoton buttonyear text-sm font-semibold bg-[#171C2F] text-[#D5F379] w-[100px] h-[30px] justify-center items-center flex"
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
                  class="miBoton buttonyear text-sm font-semibold bg-[#171C2F] text-[#D5F379] w-[100px] h-[30px] justify-center items-center flex"
                  onClick={() => setAñoSeleccionado(e.año)}
                >
                  {e.año}
                </button>
              </>
            ))}
        </div>
      </div>
      <label className="flex items-center border-solid border-2 bg-white rounded-2xl h-[3em]">
        <div className="rounded-full bg-[#D5F379] h-full flex items-center">
          <span className="material-symbols-outlined mx-2 text-[#171C2F] ">search</span>
        </div>
        <AutoComplete
          disabled={dataSelected.length > 0 ? false : true}
          placeholder="Busque una localidad"
          value={value}
          suggestions={items}
          completeMethod={search}
          onChange={(e) => {
            valor = e.value;
            setValue(e.value);
          }}
          onSelect={(e) => {
            setChange(e.value);
          }}
        />
      </label>
    </div>
  );
}
