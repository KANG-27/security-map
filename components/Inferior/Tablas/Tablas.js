
import GraficoBarrasAño from "./GraficoBarrasAño";
import GraficoTortaRoboLocalidad from "./GraficoTortaRoboLocalidad";

export default function Tablas({ candidatura, añoSeleccionado }) {

 
  return (
    <div className="flex justify-center">
      <GraficoBarrasAño/>
      <GraficoTortaRoboLocalidad  candidatura={candidatura} añoSeleccionado={añoSeleccionado}/>
    </div>
  );
}
