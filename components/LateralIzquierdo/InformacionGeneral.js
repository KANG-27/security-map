import LocalidadesV2 from "json/LocalidadesV2.json";

export default function InformacionGeneral({
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
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center"> Total de Hurtos:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].Total}</span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center"> Hurtos sin arma:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].SinArmas}</span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center">
              {" "}
              Hurtos con arma blanca:
            </span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].ArmaBlanca}</span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center">
              {" "}
              Hurtos con arma de fuego:
            </span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].ArmaFuego}</span>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <span className="text-xl text-center">
              {" "}
              Hurtos con escopolamina:
            </span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].Escopolamina}</span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center"> Hurtos con armas contundentes:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].Contundentes}</span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center"> Hurto no especificado:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-xl ">{data[0].NoReportados}</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center">Total Hurtos:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-5 font-semibold">
              <span className="text-xl ">
                {LocalidadesV2.CandidaturaUno.totalRobos +
                  LocalidadesV2.CandidaturaDos.totalRobos}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center">Total CAI:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-5 font-semibold">
              <span className="text-xl ">
                {LocalidadesV2.CandidaturaDos.totalCais}
              </span>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <span className="text-xl text-center">Total Hospitales:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-5 font-semibold">
              <span className="text-xl ">
                {LocalidadesV2.CandidaturaDos.totalHospitales}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
