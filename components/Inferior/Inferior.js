import Tablas from "./Tablas/Tablas";

export default function Inferior({
  localidad,
  recuento,
  color,
  candidatura,
  añoSeleccionado,
}) {
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
      <div className="flex w-full">
        <div className="grid grid-cols-4 rounded-xl bg-slate-400 gap-10 p-8 m-5 pr-80">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={64}
              height={64}
              viewBox="0 0 16.933 16.933"
            >
              <path
                d="M7.855 283.303c-.566.012-1.113.257-1.844.632-.511.114-.732.085-1.232-.103l-.928-.348c-.469-.176-1-.03-1.313.361l-.355.446a1.104 1.104 0 0 0-.021 1.35l-.01-.014c.58.888.83 1.853.685 2.756l-.525 2.01a2.675 2.675 0 0 0 .476 2.408c.491.636 1.215 1.109 1.954 1.484.738.375 1.498.651 2.064.87.283.108.52.204.668.28a.83.83 0 0 1 .137.084.265.265 0 0 0 .5 0 .265.265 0 0 0 0-.002.899.899 0 0 1 .136-.082c.149-.076.385-.172.668-.28.567-.219 1.326-.495 2.065-.87.739-.375 1.462-.848 1.953-1.484.49-.636.729-1.455.475-2.407v-.002l-.51-2.008c-.195-1.239.13-1.7.685-2.78l-.023.036c.3-.4.292-.958-.022-1.35l-.357-.445a1.161 1.161 0 0 0-1.312-.36l-.926.347c-.5.187-.721.217-1.233.103l.075.03c-.78-.45-1.344-.676-1.93-.663z"
                style={{
                  color: "#000",
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: 400,
                  fontStretch: "normal",
                  fontSize: "medium",
                  lineHeight: "normal",
                  fontFamily: "sans-serif",
                  fontVariantLigatures: "normal",
                  fontVariantPosition: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantAlternates: "normal",
                  fontFeatureSettings: "normal",
                  textIndent: 0,
                  textAlign: "start",
                  textDecoration: "none",
                  textDecorationLine: "none",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  writingMode: "lr-tb",
                  direction: "ltr",
                  textOrientation: "mixed",
                  dominantBaseline: "auto",
                  baselineShift: "baseline",
                  textAnchor: "start",
                  whiteSpace: "normal",
                  shapePadding: 0,
                  clipRule: "nonzero",
                  display: "inline",
                  overflow: "visible",
                  visibility: "visible",
                  opacity: 1,
                  isolation: "auto",
                  mixBlendMode: "normal",
                  colorInterpolation: "sRGB",
                  colorInterpolationFilters: "linearRGB",
                  solidColor: "#000",
                  solidOpacity: 1,
                  vectorEffect: "none",
                  fill: "#5b6571",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: 0.529167,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  colorRendering: "auto",
                  imageRendering: "auto",
                  shapeRendering: "auto",
                  textRendering: "auto",
                  enableBackground: "accumulate",
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="M7.855 283.302c-.566.013-1.113.258-1.844.633-.511.114-.732.085-1.232-.103l-.928-.348c-.469-.175-1-.03-1.313.362l-.355.445a1.104 1.104 0 0 0-.021 1.35l-.01-.014c.037.056.068.114.102.17 1.208.25 2.765-.719 3.99.097 1.184.79 1.502 1.921 1.769 3.258.05.248-.022.75.12.964.685 1.027 2.322 1.155 3.177 2.011.319.318.25 1.192.25 1.837.525-.317 1.012-.696 1.373-1.163.49-.636.729-1.455.474-2.407v-.002l-.509-2.008c-.195-1.239.13-1.7.685-2.78a1.102 1.102 0 0 0-.045-1.313l-.357-.445a1.161 1.161 0 0 0-1.312-.362l-.926.348c-.49.183-.715.214-1.203.109-.755-.432-1.311-.651-1.885-.639z"
                style={{
                  display: "inline",
                  fill: "#3a4d5c",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 0.52916664,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="M7.86 288.03a2.914 2.914 0 0 0-2.91 2.91 2.914 2.914 0 0 0 2.91 2.91 2.914 2.914 0 0 0 2.91-2.91 2.914 2.914 0 0 0-2.91-2.91zM4.119 286.178a.265.265 0 0 0-.21.382l.215.43-.23.691a.265.265 0 0 0 .252.348h1.861a.265.265 0 0 0 .266-.266v-1.16a.265.265 0 0 0-.213-.26l-.805-.162a.265.265 0 0 0-.05-.004h-1.06a.265.265 0 0 0-.026 0zM10.48 286.178a.265.265 0 0 0-.025.004l-.805.162a.265.265 0 0 0-.213.26v1.16a.265.265 0 0 0 .266.265h1.86a.265.265 0 0 0 .253-.347l-.23-.692.214-.43a.265.265 0 0 0-.236-.382h-1.059a.265.265 0 0 0-.025 0z"
                style={{
                  color: "#000",
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: 400,
                  fontStretch: "normal",
                  fontSize: "medium",
                  lineHeight: "normal",
                  fontFamily: "sans-serif",
                  fontVariantLigatures: "normal",
                  fontVariantPosition: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantAlternates: "normal",
                  fontFeatureSettings: "normal",
                  textIndent: 0,
                  textAlign: "start",
                  textDecoration: "none",
                  textDecorationLine: "none",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  writingMode: "lr-tb",
                  direction: "ltr",
                  textOrientation: "mixed",
                  dominantBaseline: "auto",
                  baselineShift: "baseline",
                  textAnchor: "start",
                  whiteSpace: "normal",
                  shapePadding: 0,
                  clipRule: "nonzero",
                  display: "inline",
                  overflow: "visible",
                  visibility: "visible",
                  opacity: 1,
                  isolation: "auto",
                  mixBlendMode: "normal",
                  colorInterpolation: "sRGB",
                  colorInterpolationFilters: "linearRGB",
                  solidColor: "#000",
                  solidOpacity: 1,
                  vectorEffect: "none",
                  fill: "#fed883",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: 0.529167,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  colorRendering: "auto",
                  imageRendering: "auto",
                  shapeRendering: "auto",
                  textRendering: "auto",
                  enableBackground: "accumulate",
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="M7.86 293.85a2.914 2.914 0 0 0 2.911-2.91 2.914 2.914 0 0 0-2.91-2.91 2.908 2.908 0 0 0-2.475 1.386c.648-.066 1.195-.086 2.064.44.81.539 1.455 1.395 1.106 2.332-.129.321-.459.59-.663.887-.184.238-.142.516-.032.775z"
                style={{
                  display: "inline",
                  fill: "#febe40",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 0.52916664,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="M7.835 289.088a.265.265 0 0 0-.21.146l-.442.881-.977.137a.265.265 0 0 0-.15.45l.703.692-.172.971a.265.265 0 0 0 .381.281l.893-.457.89.457a.265.265 0 0 0 .381-.281l-.172-.97.703-.692a.265.265 0 0 0-.148-.451l-.977-.137-.44-.88a.265.265 0 0 0-.263-.147z"
                style={{
                  color: "#000",
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: 400,
                  fontStretch: "normal",
                  fontSize: "medium",
                  lineHeight: "normal",
                  fontFamily: "sans-serif",
                  fontVariantLigatures: "normal",
                  fontVariantPosition: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantAlternates: "normal",
                  fontFeatureSettings: "normal",
                  textIndent: 0,
                  textAlign: "start",
                  textDecoration: "none",
                  textDecorationLine: "none",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  writingMode: "lr-tb",
                  direction: "ltr",
                  textOrientation: "mixed",
                  dominantBaseline: "auto",
                  baselineShift: "baseline",
                  textAnchor: "start",
                  whiteSpace: "normal",
                  shapePadding: 0,
                  clipRule: "nonzero",
                  display: "inline",
                  overflow: "visible",
                  visibility: "visible",
                  opacity: 1,
                  isolation: "auto",
                  mixBlendMode: "normal",
                  colorInterpolation: "sRGB",
                  colorInterpolationFilters: "linearRGB",
                  solidColor: "#000",
                  solidOpacity: 1,
                  vectorEffect: "none",
                  fill: "#5b6571",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: 0.529167,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  colorRendering: "auto",
                  imageRendering: "auto",
                  shapeRendering: "auto",
                  textRendering: "auto",
                  enableBackground: "accumulate",
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="M6 285.941a.263.263 0 0 0-.067.012l-.795.236a.265.265 0 0 0-.187.254v.527a.289.289 0 0 0 .076.188l.795.793a.265.265 0 0 0 .45-.188v-1.556c.002-.15-.123-.27-.273-.266zM9.699 285.941a.265.265 0 0 0-.262.266v1.556a.265.265 0 0 0 .451.188l.795-.793a.265.265 0 0 0 .076-.188v-.527a.265.265 0 0 0-.187-.254l-.795-.236a.265.265 0 0 0-.078-.012z"
                style={{
                  color: "#000",
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: 400,
                  fontStretch: "normal",
                  fontSize: "medium",
                  lineHeight: "normal",
                  fontFamily: "sans-serif",
                  fontVariantLigatures: "normal",
                  fontVariantPosition: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantAlternates: "normal",
                  fontFeatureSettings: "normal",
                  textIndent: 0,
                  textAlign: "start",
                  textDecoration: "none",
                  textDecorationLine: "none",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  writingMode: "lr-tb",
                  direction: "ltr",
                  textOrientation: "mixed",
                  dominantBaseline: "auto",
                  baselineShift: "baseline",
                  textAnchor: "start",
                  whiteSpace: "normal",
                  shapePadding: 0,
                  clipRule: "nonzero",
                  display: "inline",
                  overflow: "visible",
                  visibility: "visible",
                  opacity: 1,
                  isolation: "auto",
                  mixBlendMode: "normal",
                  colorInterpolation: "sRGB",
                  colorInterpolationFilters: "linearRGB",
                  solidColor: "#000",
                  solidOpacity: 1,
                  vectorEffect: "none",
                  fill: "#ec7523",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: 0.52916676,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  colorRendering: "auto",
                  imageRendering: "auto",
                  shapeRendering: "auto",
                  textRendering: "auto",
                  enableBackground: "accumulate",
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="m10.76 286.97.01-1.149c0-.158-.053-.23-.269-.341H10.5c-.694-.377-1.647-.75-2.639-.75-1.141 0-2.036.308-2.79.797a.265.265 0 0 0-.12.22v1.223c.008.064.015.128.077.188l.168.168.183-.148c.668-.527 1.423-.737 2.483-.737s1.801.21 2.469.737l.19.143.138-.138a.275.275 0 0 0 .101-.213z"
                style={{
                  color: "#000",
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fontWeight: 400,
                  fontStretch: "normal",
                  fontSize: "medium",
                  lineHeight: "normal",
                  fontFamily: "sans-serif",
                  fontVariantLigatures: "normal",
                  fontVariantPosition: "normal",
                  fontVariantCaps: "normal",
                  fontVariantNumeric: "normal",
                  fontVariantAlternates: "normal",
                  fontFeatureSettings: "normal",
                  textIndent: 0,
                  textAlign: "start",
                  textDecoration: "none",
                  textDecorationLine: "none",
                  textDecorationStyle: "solid",
                  textDecorationColor: "#000",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  writingMode: "lr-tb",
                  direction: "ltr",
                  textOrientation: "mixed",
                  dominantBaseline: "auto",
                  baselineShift: "baseline",
                  textAnchor: "start",
                  whiteSpace: "normal",
                  shapePadding: 0,
                  clipRule: "nonzero",
                  display: "inline",
                  overflow: "visible",
                  visibility: "visible",
                  opacity: 1,
                  isolation: "auto",
                  mixBlendMode: "normal",
                  colorInterpolation: "sRGB",
                  colorInterpolationFilters: "linearRGB",
                  solidColor: "#000",
                  solidOpacity: 1,
                  vectorEffect: "none",
                  fill: "#febe40",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none",
                  strokeWidth: 0.529167,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeDashoffset: 0,
                  strokeOpacity: 1,
                  colorRendering: "auto",
                  imageRendering: "auto",
                  shapeRendering: "auto",
                  textRendering: "auto",
                  enableBackground: "accumulate",
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="m7.86 292.19.891.457c.195.099.42-.067.381-.282l-.172-.97.704-.692a.265.265 0 0 0-.149-.451l-.976-.137-.442-.88a.265.265 0 0 0-.234-.148.264.264 0 0 0-.239.148l-.433.863c.894.516.861 1.376.67 2.091z"
                style={{
                  display: "inline",
                  fill: "#3a4d5c",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 0.52916664,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
              <path
                d="M7.86 284.73c-1.142 0-2.036.308-2.79.797a.264.264 0 0 0-.12.22v.296c1.328.077 2.352-1.117 3.852-.368.4.2.41.57.42.933.41.118.769.302 1.108.57l.19.143.138-.138a.275.275 0 0 0 .101-.213l.012-1.149c0-.158-.054-.23-.27-.341H10.5c-.694-.377-1.647-.75-2.638-.75z"
                style={{
                  display: "inline",
                  fill: "#f4a32a",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 0.52916664,
                  strokeLinecap: "square",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 4,
                  strokeDasharray: "none",
                  strokeOpacity: 1,
                }}
                transform="matrix(1.20958 0 0 1.20958 -1.041 -341.705)"
              />
            </svg>
            <span className="text-xs">Policia</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 128 128"
            >
              <circle cx={64} cy={64} r={60} fill="#FFF" opacity={0.5} />
              <circle cx={64} cy={64} r={60} fill="#F7F7F7" />
              <path
                fill="#62345B"
                d="M64 4c-1.7 0-3.4.1-5 .2 30.8 2.5 55 28.3 55 59.8s-24.2 57.2-55 59.8c1.7.1 3.3.2 5 .2 33.1 0 60-26.9 60-60S97.1 4 64 4z"
                opacity={0.2}
              />
              <path
                fill="#F1657C"
                d="M99.5 52.7H77.3c-1.1 0-2-.9-2-2V28.5c0-1.1-.9-2-2-2H54.7c-1.1 0-2 .9-2 2v22.2c0 1.1-.9 2-2 2H28.5c-1.1 0-2 .9-2 2v18.5c0 1.1.9 2 2 2h22.2c1.1 0 2 .9 2 2v22.2c0 1.1.9 2 2 2h18.5c1.1 0 2-.9 2-2V77.3c0-1.1.9-2 2-2h22.2c1.1 0 2-.9 2-2V54.7c.1-1.1-.8-2-1.9-2z"
              />
              <path
                fill="#62345B"
                d="M73.2 103H54.8c-1.9 0-3.5-1.6-3.5-3.5V77.2c0-.3-.2-.5-.5-.5H28.5c-1.9 0-3.5-1.6-3.5-3.5V54.8c0-1.9 1.6-3.5 3.5-3.5h22.2c.3 0 .5-.2.5-.5V28.5c0-1.9 1.6-3.5 3.5-3.5h18.5c1.9 0 3.5 1.6 3.5 3.5v22.2c0 .3.2.5.5.5h22.2c1.9 0 3.5 1.6 3.5 3.5v18.5c0 1.9-1.6 3.5-3.5 3.5H77.2c-.3 0-.5.2-.5.5v22.2c.1 2-1.5 3.6-3.5 3.6zM28.5 54.2c-.3 0-.5.2-.5.5v18.5c0 .3.2.5.5.5h22.2c1.9 0 3.5 1.6 3.5 3.5v22.2c0 .3.2.5.5.5h18.5c.3 0 .5-.2.5-.5V77.2c0-1.9 1.6-3.5 3.5-3.5h22.2c.3 0 .5-.2.5-.5V54.8c0-.3-.2-.5-.5-.5H77.2c-1.9 0-3.5-1.6-3.5-3.5V28.5c0-.3-.2-.5-.5-.5H54.8c-.3 0-.5.2-.5.5v22.2c0 1.9-1.6 3.5-3.5 3.5H28.5z"
              />
              <path
                fill="#62345B"
                d="M64 125.5C30.1 125.5 2.5 97.9 2.5 64S30.1 2.5 64 2.5s61.5 27.6 61.5 61.5-27.6 61.5-61.5 61.5zm0-120C31.7 5.5 5.5 31.7 5.5 64s26.2 58.5 58.5 58.5 58.5-26.2 58.5-58.5S96.3 5.5 64 5.5z"
              />
            </svg>
            <span className="text-xs">Hospitales</span>
          </div>
        </div>

        <Tablas candidatura={candidatura} añoSeleccionado={añoSeleccionado} />
      </div>
    </>
  );
}
