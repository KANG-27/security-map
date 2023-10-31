import Tablas from "components/Inferior/Tablas.js";


export default function Inferior({ localidad, recuento, color, candidatura }) {


  return (
    <>
      {localidad != undefined && (
        <div className="ml-60">
          <div className="flex flex-col mt-10 gap-5">
            <span className="font-semibold">{localidad}</span>

            <div className="ml-5 flex flex-col gap-2">
              <span className="text-sm">Cantidad de atentados: {recuento}</span>
              <span className="text-sm">
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
            </div>
          </div>
        </div>
      )}
      
          <div className="w-[20%]">
            <Tablas candidatura={candidatura}/>
          </div>
     
    </>
  );
}
