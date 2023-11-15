import React from "react";
import Logo from "../Logo/Logo";

export const BarraLateral = ({ candidatura, setCandidatura }) => {
  return (
    <div className="bg-[#171C2F] w-full sm:w-[16%]">
      <div className="flex flex-row items-center sm:flex-col sm:fixed">
        <a className="flex items-center flex-col">
          <Logo />
          <span className="text-white">Security Map</span>
        </a>
        <div className="border-t-2 sm:border-dashed border-[#D5F379] w-[80%] flex item-center mt-2 pt-2 border-none">
          <span className="text-white text-center w-full ">
            Seleccione un alcalde
          </span>
        </div>
        <div className="w-full mt-10 pl-5 pr-10">
          <div className="flex items-center">
            <span class="material-symbols-outlined text-white">
              account_circle
            </span>
            <button
              data-value={"CandidaturaUno"}
              className="candidatura buttonyear flex items-center mb-3 cursor-pointer text-white"
              onClick={() => setCandidatura(0)}
            >
              Enrique Peñalosa
            </button>
          </div>
          <div className="flex items-center pt-3 border-t-2 border-[#D5F379]">
            <span class="material-symbols-outlined text-white">
              account_circle
            </span>
            <button
              data-value={"CandidaturaUno"}
              className="candidatura buttonyear flex items-center mb-3 cursor-pointer text-white"
              onClick={() => setCandidatura(1)}
            >
              Claudia Lopez
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
