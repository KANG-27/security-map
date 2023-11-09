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
    <div className="flex items-center justify-between mx-10 mb-10">
      <div className="flex items-center flex-col ml-5">
        <Logo />
        <span>Security Map</span>
      </div>
      <span>{value}</span>
      <label className="flex items-center bg-white rounded-2xl h-[3em]">
        <AutoComplete
          disabled={dataSelected.length > 0 ? false : true}
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
        <span className="material-symbols-outlined mx-2">search</span>
      </label>
    </div>
  );
}
