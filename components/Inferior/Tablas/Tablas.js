
import GraficoBarrasAño from "./GraficoBarrasAño";
import GraficoTortaRoboLocalidad from "./GraficoTortaRoboLocalidad";

export default function Tablas({ candidatura, añoSeleccionado }) {

 
  return (
    <div className="w-full ">
      <GraficoBarrasAño candidatura={candidatura}/>
      <GraficoTortaRoboLocalidad candidatura={candidatura} añoSeleccionado={añoSeleccionado}/>
    </div>
  );
}
