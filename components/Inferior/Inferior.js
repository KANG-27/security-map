import GraficoTotalRoboAño from "./Tablas/GraficoTotalRoboAño";
import Tablas from "./Tablas/Tablas";
import LocalidadesV2 from "json/LocalidadesV2.json";

export default function Inferior({
  localidad,
  color,
  candidatura,
  añoSeleccionado,
}) {
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
  return (
    <>
      {localidad != undefined && añoSelect.length > 0 ? (
        <div className="flex w-full">
          <div className=" rounded-xl bg-slate-400 gap-10 p-8 m-5 w-full">
            <div className="flex flex-col gap-5">
              <span className="font-semibold">
                {data[0].LOCALIDADES} - {añoSeleccionado}
              </span>

              <div className="ml-5 flex flex-col gap-2">
                <span className="text-sm">
                  Cantidad de atentados: {data[0].Total}
                </span>
                <span className="text-sm">
                  Cantidad de atentados sin arma: {data[0].SinArmas}
                </span>
                <span className="text-sm">
                  Cantidad de atentados con arma blanca: {data[0].ArmaBlanca}
                </span>
                <span className="text-sm">
                  Cantidad de atentados con arma de fuego: {data[0].ArmaFuego}
                </span>
                <span className="text-sm">
                  Casos no reportados: {data[0].NoReportados}
                </span>
                <span className="text-sm">
                  Casos con escopolamina: {data[0].Escopolamina}
                </span>
                <span className="text-sm">
                  Casos contundentes: {data[0].Contundentes}
                </span>
                <span className="text-sm">
                  Cantidad de CAI: {data[0].cai.length}
                </span>
                <span className="text-sm">
                  Cantidad de Hospitales: {data[0].hospital.length}
                </span>
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
                <span></span>
              </div>
            </div>
          </div>
          <Tablas candidatura={candidatura} añoSeleccionado={añoSeleccionado} />
        </div>
      ) : (
        <div className="flex w-full">
          <div className="w-[35%] rounded-xl bg-slate-400 gap-10 p-8 m-5 ">
            <div className="flex flex-col gap-5">
              <span className="font-semibold">
                BOGOTA - 2016 a 2023
              </span>
              <div className="ml-5 flex flex-col gap-2">
                <span className="text-sm">
                  Total de robos: {LocalidadesV2.CandidaturaUno.totalRobos+LocalidadesV2.CandidaturaDos.totalRobos}
                </span>
                <span className="text-sm">
                  Total de CAI: {LocalidadesV2.CandidaturaUno.totalCais+LocalidadesV2.CandidaturaDos.totalCais}
                </span>
                <span className="text-sm">
                  Total de Hospitales: {LocalidadesV2.CandidaturaUno.totalHospitales+LocalidadesV2.CandidaturaDos.totalHospitales}
                </span>
              </div>
            </div>
          </div>
          <GraficoTotalRoboAño />
        </div>
      )}
    </>
  );
}
