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
        <>
          <span className="text-4xl font-medium">
            La localidad seleccionada es <span className="underline font-bold">{localidad}</span>
          </span>
          <div className="grid grid-cols-3 justify-items-center my-20 gap-5">
            <div className="flex relative flex-col gap-2 bg-[#AF85E9] rounded-xl border-2 border-black w-[100%] justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={22}
                  fill="none"
                >
                  <path
                    fill="#171C2F"
                    d="M6.786 8.643h9.428v1.571H6.786V8.643Zm0 3.928h9.428v1.572H6.786V12.57Z"
                  />
                  <path
                    fill="#171C2F"
                    d="m22.5 3.468-1.111-1.11-2.632 2.631a9.498 9.498 0 0 0-1.246-1.246l2.632-2.632L19.032 0l-2.837 2.836a9.413 9.413 0 0 0-12.859 12.86L.5 18.531l1.111 1.11 2.632-2.631c.376.453.793.87 1.246 1.246l-2.632 2.632L3.968 22l2.837-2.836a9.414 9.414 0 0 0 12.859-12.86L22.5 3.469Zm-11 15.39A7.857 7.857 0 1 1 19.357 11a7.865 7.865 0 0 1-7.857 7.857Z"
                  />
                </svg>
              </div>
              <div className="border-b-2 border-black flex justify-center mx-10">
                <span className="text-lg text-cente font-medium">Total Hurtos:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl">
                  {data[0].Total}
                </span>
              </div>
            </div>

            <div className="flex relative flex-col gap-2 bg-[#171C2F] rounded-xl border-2 border-[#D5F379] w-[100%] py-5 justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={17}
                  fill="none"
                >
                  <path
                    fill="#000"
                    d="M6.377 1.049H23.16v4.196h-1.049v1.048h-6.293a1.049 1.049 0 0 0-1.05 1.05V8.39a2.098 2.098 0 0 1-2.097 2.098H9.126c-.399 0-.766.23-.944.587l-2.57 5.13a1.036 1.036 0 0 1-.934.577H1.133s-3.147 0 1.049-6.294c0 0 3.146-4.196-1.05-4.196V1.05h1.05L2.706 0h3.147l.524 1.049ZM13.72 8.39V7.342a1.049 1.049 0 0 0-1.05-1.049h-1.048s-1.049 1.05 0 2.098a2.098 2.098 0 0 1-2.098-2.098 1.049 1.049 0 0 0-1.049 1.05V8.39a1.049 1.049 0 0 0 1.05 1.05h3.146a1.049 1.049 0 0 0 1.049-1.05Z"
                  />
                </svg>
              </div>
              <div className="border-b-2 border-white flex justify-center mx-10">
                <span className="text-lg text-cente font-medium text-white">Hurtos sin arma:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl text-white">
                  {data[0].SinArmas}
                </span>
              </div>


              {/* <div className="flex flex-col gap-2">
            <span className="text-lg text-center">Hurtos sin arma:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-lg">{data[0].SinArmas}</span>
            </div>
          </div> */}
            </div>


            <div className="flex relative flex-col gap-2 bg-[#D5F379] rounded-xl border-2 border-black w-[100%] py-5 justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={22}
                  fill="none"
                >
                  <path
                    fill="#171C2F"
                    d="M.663 0c-3.63 6.171 8.829 19.965 8.829 19.965l3.109-3.157L17.68 22 20 19.646.663 0Z"
                  />
                </svg>
              </div>
              <div className="border-b-2 border-black flex justify-center mx-10">
                <span className="text-lg text-cente font-medium text-[#171C2F]">Hurtos con arma blanca:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl text-[#171C2F]">
                  {data[0].ArmaBlanca}
                </span>
              </div>
              {/* <div className="flex flex-col gap-2">
              <span className="text-lg text-center">
                {" "}
                Hurtos con arma blanca:
              </span>
              <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
                <span className="text-lg">{data[0].ArmaBlanca}</span>
              </div>
            </div> */}
            </div>


            <div className="flex relative flex-col gap-2 bg-[#54EAA2] rounded-xl border-2 border-black w-[100%] py-5 justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={17}
                  fill="none"
                >
                  <path
                    fill="#000"
                    d="M6.377 1.049H23.16v4.196h-1.049v1.048h-6.293a1.049 1.049 0 0 0-1.05 1.05V8.39a2.098 2.098 0 0 1-2.097 2.098H9.126c-.399 0-.766.23-.944.587l-2.57 5.13a1.036 1.036 0 0 1-.934.577H1.133s-3.147 0 1.049-6.294c0 0 3.146-4.196-1.05-4.196V1.05h1.05L2.706 0h3.147l.524 1.049ZM13.72 8.39V7.342a1.049 1.049 0 0 0-1.05-1.049h-1.048s-1.049 1.05 0 2.098a2.098 2.098 0 0 1-2.098-2.098 1.049 1.049 0 0 0-1.049 1.05V8.39a1.049 1.049 0 0 0 1.05 1.05h3.146a1.049 1.049 0 0 0 1.049-1.05Z"
                  />
                </svg>
              </div>
              <div className="border-b-2 border-black flex justify-center mx-10">
                <span className="text-lg text-cente font-medium text-[#171C2F]">Hurtos con arma de fuego:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl text-[#171C2F]">
                  {data[0].ArmaFuego}
                </span>
              </div>

              {/* <div className="flex flex-col gap-2">
            <span className="text-lg text-center">
              {" "}
              Hurtos con arma de fuego:
            </span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-lg">{data[0].ArmaFuego}</span>
            </div>
          </div> */}

            </div>



            <div className="flex relative flex-col gap-2 bg-[#eae854] rounded-xl border-2 border-black w-[100%] py-5 justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <span class="material-symbols-outlined">
                  air_freshener
                </span>
              </div>
              <div className="border-b-2 border-black flex justify-center mx-10">
                <span className="text-lg text-cente font-medium text-[#171C2F]">Hurtos con escopolamina:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl text-[#171C2F]">
                  {data[0].Escopolamina}
                </span>
              </div>



              {/* <div className="flex flex-col gap-2">
            <span className="text-lg text-center">
              {" "}
              Hurtos con escopolamina:
            </span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-lg">{data[0].Escopolamina}</span>
            </div>
          </div> */}
            </div>

            <div className="flex relative flex-col gap-2 bg-[#ff8d23] rounded-xl border-2 border-black w-[100%] py-5 justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <span class="material-symbols-outlined">
                  handyman
                </span>
              </div>
              <div className="border-b-2 border-black flex justify-center mx-10">
                <span className="text-lg text-cente font-medium text-[#171C2F]">Hurtos con armas contundentes:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl text-[#171C2F]">
                  {data[0].Contundentes}
                </span>
              </div>

              {/* <div className="flex flex-col gap-2">
            <span className="text-lg text-center"> Hurtos con armas contundentes:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
              <span className="text-lg">{data[0].Contundentes}</span>
            </div>
          </div> */}
            </div>


            <div className="flex relative flex-col gap-2 bg-[#234bff] rounded-xl border-2 border-black w-[100%] py-5 justify-center">
              <div className="absolute top-[-10px] left-[410px] bg-white p-1 border-2 border-black rounded-md">
                <span class="material-symbols-outlined">
                  question_mark
                </span>
              </div>
              <div className="border-b-2 border-white flex justify-center mx-10">
                <span className="text-lg text-cente font-medium text-white">Hurtos no especificado:</span>
              </div>
              <div className="flex justify-center py-4 font-semibold">
                <span className="text-5xl text-white">
                  {data[0].NoReportados}
                </span>
              </div>


              {/* <div className="flex flex-col gap-2">
              <span className="text-lg text-center"> Hurtos no especificado:</span>
              <div className="bg-slate-400 rounded-xl flex justify-center py-1 font-semibold">
                <span className="text-lg">{data[0].NoReportados}</span>
              </div>
            </div> */}
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-3 justify-items-center my-20">
          <div className="flex relative flex-col gap-2 bg-[#AF85E9] rounded-xl border-2 border-black w-[50%] py-5">
            <div className="absolute top-[-10px] left-[200px] bg-white p-1 border-2 border-black rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={22}
                fill="none"
              >
                <path
                  fill="#171C2F"
                  d="M6.786 8.643h9.428v1.571H6.786V8.643Zm0 3.928h9.428v1.572H6.786V12.57Z"
                />
                <path
                  fill="#171C2F"
                  d="m22.5 3.468-1.111-1.11-2.632 2.631a9.498 9.498 0 0 0-1.246-1.246l2.632-2.632L19.032 0l-2.837 2.836a9.413 9.413 0 0 0-12.859 12.86L.5 18.531l1.111 1.11 2.632-2.631c.376.453.793.87 1.246 1.246l-2.632 2.632L3.968 22l2.837-2.836a9.414 9.414 0 0 0 12.859-12.86L22.5 3.469Zm-11 15.39A7.857 7.857 0 1 1 19.357 11a7.865 7.865 0 0 1-7.857 7.857Z"
                />
              </svg>
            </div>
            <div className="border-b-2 border-black flex justify-center mx-10">
              <span className="text-lg text-cente font-medium">Total Hurtos:</span>
            </div>
            <div className="flex justify-center py-4 font-semibold">
              <span className="text-5xl">
                {LocalidadesV2.CandidaturaUno.totalRobos +
                  LocalidadesV2.CandidaturaDos.totalRobos}
              </span>
            </div>
          </div>
          <div className="flex relative flex-col gap-2 bg-[#3e75ec] rounded-xl border-2 border-black w-[50%] py-5">
            <div className="absolute top-[-10px] left-[200px] bg-white p-1 border-2 border-black rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={29}
                fill="none"
              >
                <path
                  fill="#171C2F"
                  d="m14.694 14.81 1.15 4.957-4.344-2.62-4.344 2.62 1.15-4.945-3.834-3.31 5.06-.434L11.5 6.414l1.968 4.652 5.06.434-3.834 3.31ZM0 5.11v7.667C0 19.869 4.907 26.5 11.5 28.11 18.093 26.501 23 19.87 23 12.778V5.11L11.5 0 0 5.111Z"
                />
              </svg>
            </div>
            <div className="border-b-2 border-black flex justify-center mx-10">
              <span className="text-lg text-cente font-medium">Total CAI:</span>
            </div>
            <div className="flex justify-center py-4 font-semibold">
              <span className="text-5xl">
                {LocalidadesV2.CandidaturaDos.totalCais}
              </span>
            </div>
          </div>
          <div className="flex relative flex-col gap-2 bg-[#ec3e3e] rounded-xl border-2 border-black w-[50%] py-5">
            <div className="absolute top-[-10px] left-[200px] bg-white p-1 border-2 border-black rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="none"
              >
                <path
                  fill="#171C2F"
                  d="M26.667 6.667h-4V1.333c0-.8-.534-1.333-1.334-1.333H6.667c-.8 0-1.334.533-1.334 1.333v5.334h-4C.533 6.667 0 7.2 0 8v18.667C0 27.467.533 28 1.333 28h25.334c.8 0 1.333-.533 1.333-1.333V8c0-.8-.533-1.333-1.333-1.333ZM8 22.667H6.667c-.8 0-1.334-.534-1.334-1.334S5.867 20 6.667 20H8c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.334-1.333 1.334Zm0-5.334H6.667c-.8 0-1.334-.533-1.334-1.333 0-.8.534-1.333 1.334-1.333H8c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.333-1.333 1.333Zm6.667 5.334h-1.334c-.8 0-1.333-.534-1.333-1.334S12.533 20 13.333 20h1.334c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.334-1.333 1.334Zm0-5.334h-1.334C12.533 17.333 12 16.8 12 16c0-.8.533-1.333 1.333-1.333h1.334c.8 0 1.333.533 1.333 1.333 0 .8-.533 1.333-1.333 1.333ZM16 10h-.667v.667c0 .8-.533 1.333-1.333 1.333-.8 0-1.333-.533-1.333-1.333V10H12c-.8 0-1.333-.533-1.333-1.333 0-.8.533-1.334 1.333-1.334h.667v-.666c0-.8.533-1.334 1.333-1.334.8 0 1.333.534 1.333 1.334v.666H16c.8 0 1.333.534 1.333 1.334S16.8 10 16 10Zm5.333 12.667H20c-.8 0-1.333-.534-1.333-1.334S19.2 20 20 20h1.333c.8 0 1.334.533 1.334 1.333 0 .8-.534 1.334-1.334 1.334Zm0-5.334H20c-.8 0-1.333-.533-1.333-1.333 0-.8.533-1.333 1.333-1.333h1.333c.8 0 1.334.533 1.334 1.333 0 .8-.534 1.333-1.334 1.333Z"
                />
              </svg>
            </div>
            <div className="border-b-2 border-black flex justify-center mx-10">
              <span className="text-lg text-cente font-medium">Total Hospitales:</span>
            </div>
            <div className="flex justify-center py-4 font-semibold">
              <span className="text-5xl">
                {LocalidadesV2.CandidaturaDos.totalHospitales}
              </span>
            </div>
          </div>
          {/* <div className="flex flex-col gap-2">
            <span className="text-lg text-center">Total Hospitales:</span>
            <div className="bg-slate-400 rounded-xl flex justify-center py-4 font-semibold">
              <span className="text-lg">
                {LocalidadesV2.CandidaturaDos.totalHospitales}
              </span>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
}
