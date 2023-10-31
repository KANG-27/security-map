import React from "react";
import { divIcon } from "leaflet";
import Localidades from "../../json/Localidades";
import LocalidadesV2 from "../../json/LocalidadesV2";
import { renderToStaticMarkup } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import {
  Circle,
  LayerGroup,
  MapContainer,
  Marker,
  TileLayer,
} from "react-leaflet";

export default function Map({
  cordenadas,
  zoom,
  color,
  localidades,
  candidatura,
  añoSeleccionado,
}) {
  // Busca dentro del barrio que selecciono la localidad
  let localidadSelected;

  if (candidatura == 0) {
    let buscarAño = LocalidadesV2.CandidaturaUno.años.filter(
      (x) => x.año === añoSeleccionado
    );

    localidadSelected =
      buscarAño.length > 0 &&
      buscarAño[0].centrosEnLocalidades.filter(
        (Localidades) => Localidades.LOCALIDADES == localidades
      );
  } else {
    let buscarAño = LocalidadesV2.CandidaturaDos.años.filter(
      (x) => x.año == añoSeleccionado
    );

    localidadSelected =
      buscarAño.length > 0 &&
      buscarAño[0].centrosEnLocalidades.filter(
        (Localidades) => Localidades.LOCALIDADES == localidades
      );
  }

  // Color de los circulos para el peligro del barrio
  const fillOptions = { fillColor: color };

  // Icono de cais
  const iconMarkup = renderToStaticMarkup(
    <icon size="small" variant="extended">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        viewBox="0 0 16.933 16.933"
      >
        <g
          style={{
            strokeWidth: 0.811835,
          }}
        >
          <path
            d="M1.322 288.533a.265.265 0 0 0-.263.266v6.35c0 .435.357.792.793.792h8.996a.798.798 0 0 0 .795-.793v-6.35a.265.265 0 0 0-.266-.265z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#f5f6e8",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M1.322 288.533a.265.265 0 0 0-.263.266v.215c.817 1.108 1.682 2.281 2.906 2.893 1.452.726 4.018-.821 5.06.741.489.733.371 2.288.809 3.294h1.013a.799.799 0 0 0 .796-.794v-6.35a.265.265 0 0 0-.266-.265z"
            style={{
              fill: "#dbdbcf",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.646 285.357a.265.265 0 0 0-.22.12L.309 288.65a.265.265 0 0 0 .22.413h11.64a.265.265 0 0 0 .222-.413l-2.118-3.173a.265.265 0 0 0-.218-.12z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#3a4d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M5.027 292.238a.265.265 0 0 0-.265.264v3.176a.265.265 0 0 0 .265.263h2.647a.265.265 0 0 0 .263-.263v-3.176a.265.265 0 0 0-.263-.264z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
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
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M4.762 291.18a.265.265 0 0 0-.264.263v1.059a.265.265 0 0 0 .264.266h3.176a.265.265 0 0 0 .263-.266v-1.059a.265.265 0 0 0-.264-.263Z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#3a4d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M8.996 291.18a.265.265 0 0 0-.266.263v2.118a.265.265 0 0 0 .266.263h1.322a.265.265 0 0 0 .266-.263v-2.118a.265.265 0 0 0-.266-.263zM2.38 291.18a.265.265 0 0 0-.263.263v2.118a.265.265 0 0 0 .264.263h1.324a.265.265 0 0 0 .264-.263v-2.118a.265.265 0 0 0-.264-.263z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#87d1ee",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.38 291.18a.265.265 0 0 0-.263.263v.612c.812.132.89 1.254 1.373 1.769h.215a.265.265 0 0 0 .264-.264v-2.117a.265.265 0 0 0-.264-.263zM8.996 291.18a.265.265 0 0 0-.266.263v.38c.37.239.903.194 1.262.374.292.146-.051 1.493.487 1.574a.265.265 0 0 0 .105-.21v-2.118a.265.265 0 0 0-.266-.263z"
            style={{
              fill: "#7dc1db",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.646 285.357a.265.265 0 0 0-.22.12l-.09.134c1.339 2.542 4.523.878 6.27 1.751.792.396 1.195 1.048 1.57 1.7h1.994a.265.265 0 0 0 .22-.411l-2.117-3.174a.265.265 0 0 0-.218-.12z"
            style={{
              fill: "#31434f",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M6.377 286.518a.258.258 0 0 0-.217.095c-.224.277-.413.371-.616.415-.202.044-.433.023-.702.006a.258.258 0 0 0-.272.232c-.076.774.008 1.459.285 2.032.278.573.751 1.022 1.397 1.32a.258.258 0 0 0 .217 0c.645-.298 1.117-.747 1.394-1.32.278-.573.363-1.258.287-2.032a.258.258 0 0 0-.272-.232c-.269.017-.5.038-.702-.006-.202-.044-.391-.138-.616-.415a.258.258 0 0 0-.183-.095z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
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
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M6.323 286.503a.252.252 0 0 0-.191.094c-.22.27-.405.363-.603.405-.198.043-.424.022-.686.006a.252.252 0 0 0-.267.227c-.005.054-.007.106-.011.16.891.624 2.568.642 2.762 1.03.052.104.186.63.309 1.077a2.57 2.57 0 0 0 .16-.28c.272-.56.355-1.23.281-1.987a.252.252 0 0 0-.266-.227c-.263.017-.488.037-.686-.006-.198-.042-.383-.135-.603-.405a.252.252 0 0 0-.178-.093.252.252 0 0 0-.021 0z"
            style={{
              fill: "#e5ab38",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: 0.429596,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeOpacity: 1,
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
          <path
            d="M2.646 285.357a.265.265 0 0 0-.22.12L.309 288.65a.265.265 0 0 0 .22.412h.53v5.54a.265.265 0 0 0 0 .016v.53c0 .092.019.18.048.263H1.06a.265.265 0 0 0-.266.266.265.265 0 0 0 .266.264H11.643a.265.265 0 0 0 .263-.264.265.265 0 0 0-.263-.266h-.05c.03-.083.05-.17.05-.264v-6.086h.527a.265.265 0 0 0 .22-.411l-2.117-3.174a.265.265 0 0 0-.218-.12zm.14.53h7.126l1.764 2.646H8.148c.085-.414.1-.868.053-1.357a.265.265 0 0 0-.279-.238c-.276.017-.513.038-.723-.006-.188-.04-.37-.131-.575-.353a.265.265 0 0 0-.08-.11.265.265 0 0 0-.157-.06.265.265 0 0 0-.016 0 .265.265 0 0 0-.006 0 .265.265 0 0 0-.183.06.265.265 0 0 0-.078.107c-.207.224-.388.316-.577.356-.21.045-.446.023-.722.006a.265.265 0 0 0-.28.238c-.047.49-.032.943.053 1.358H1.025Zm3.577 1.18c.236.211.484.33.725.382.203.043.374.021.554.012.028.604-.01 1.153-.212 1.568-.216.442-.559.788-1.067 1.046-.507-.258-.851-.604-1.066-1.046-.203-.415-.242-.964-.215-1.568.18.01.354.032.556-.012.241-.051.49-.171.725-.383zm-4.775 1.996h3.146c.027.067.055.134.086.199.273.559.73 1.001 1.349 1.306a.265.265 0 0 0 .19.073.265.265 0 0 0 .202-.075c.616-.305 1.072-.747 1.343-1.305.032-.064.06-.131.087-.199h3.123v5.292H7.937v-1.586a.265.265 0 0 0 .264-.266v-1.059a.265.265 0 0 0-.264-.263H4.761a.265.265 0 0 0-.263.263v1.06a.265.265 0 0 0 .263.265v1.586H1.588Zm.793 2.117a.265.265 0 0 0-.264.263v1.852a.265.265 0 0 0-.265.265.265.265 0 0 0 .265.264H3.97a.265.265 0 0 0 .263-.264.265.265 0 0 0-.263-.265v-1.852a.265.265 0 0 0-.264-.263zm6.615 0a.265.265 0 0 0-.266.263v1.852a.265.265 0 0 0-.263.265.265.265 0 0 0 .263.264h1.854a.265.265 0 0 0 .263-.264.265.265 0 0 0-.263-.265v-1.852a.265.265 0 0 0-.266-.263zm-6.35.529h.794v1.586h-.794Zm2.382 0h2.646v.53H5.028Zm4.232 0h.795v1.586H9.26Zm-3.969 1.059h.795v1.056a.265.265 0 0 0-.266.266.265.265 0 0 0 .266.264v1.058H5.29Zm1.324 0h.793v2.644h-.793v-1.058a.265.265 0 0 0 .264-.264.265.265 0 0 0-.264-.266zm-5.027 2.115h3.173v.529h-2.91a.259.259 0 0 1-.263-.264zm6.35 0h3.176v.265c0 .15-.117.264-.267.264h-2.91z"
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
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
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
              shapeMargin: 0,
              inlineSize: 0,
              clipRule: "nonzero",
              display: "inline",
              overflow: "visible",
              visibility: "visible",
              isolation: "auto",
              mixBlendMode: "normal",
              colorInterpolation: "sRGB",
              colorInterpolationFilters: "linearRGB",
              solidColor: "#000",
              solidOpacity: 1,
              vectorEffect: "none",
              fill: "#000",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
              strokeWidth: 0.429596,
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
              stopColor: "#000",
            }}
            transform="matrix(1.23178 0 0 1.23178 .645 -349.549)"
          />
        </g>
      </svg>
    </icon>
  );

  const iconoHospitales = renderToStaticMarkup(
    <icon size="small" variant="extended">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Icons"
  >
    <defs>
      <style>
        {
          ".cls-2{fill:#8ca4b8}.cls-3{fill:#adc4d9}.cls-4{fill:none;stroke:#45413c;stroke-linecap:round;stroke-linejoin:round}.cls-5{fill:#fff}.cls-6{fill:#e0e0e0}.cls-7{fill:#00b8f0}.cls-8{fill:#4acfff}"
        }
      </style>
    </defs>
    <title>{"588-hospital"}</title>
    <g id="_Group_" data-name="&lt;Group&gt;">
      <ellipse
        id="_Ellipse_"
        cx={24}
        cy={45.5}
        data-name="&lt;Ellipse&gt;"
        rx={20.5}
        ry={1.5}
        style={{
          fill: "#45413c",
          opacity: 0.15,
        }}
      />
      <rect
        id="_Rectangle_"
        width={40}
        height={3}
        x={4}
        y={15}
        className="cls-2"
        data-name="&lt;Rectangle&gt;"
        rx={1}
        ry={1}
      />
      <path
        id="_Path_"
        d="M43 15H5a1 1 0 0 0-1 1v1a1 1 0 0 0 0 .25 1 1 0 0 1 1-.75h38a1 1 0 0 1 1 .75 1 1 0 0 0 0-.25v-1a1 1 0 0 0-1-1Z"
        className="cls-3"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_2"
        width={40}
        height={3}
        x={4}
        y={15}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={1}
        ry={1}
      />
      <path
        id="_Rectangle_3"
        d="M5 18h38v25.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V18Z"
        className="cls-5"
        data-name="&lt;Rectangle&gt;"
      />
      <path
        id="_Path_2"
        d="M5 18h38v2.25H5z"
        className="cls-6"
        data-name="&lt;Path&gt;"
      />
      <path
        id="_Rectangle_4"
        d="M5 18h38v25.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V18h0Z"
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
      />
      <path
        id="_Rectangle_5"
        d="M13.5 12.5h21v32h-21z"
        className="cls-5"
        data-name="&lt;Rectangle&gt;"
      />
      <path
        id="_Rectangle_6"
        d="M13.5 12.5h21v1.79h-21z"
        className="cls-6"
        data-name="&lt;Rectangle&gt;"
      />
      <path
        id="_Rectangle_7"
        d="M13.5 12.5h21v32h-21z"
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
      />
      <path
        id="_Rectangle_8"
        d="M18 33.5h12v11H18z"
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
      />
      <path
        id="_Path_3"
        d="M20.44 44.5h5.2L30 33.93v-.43h-5.03l-4.53 11z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <path
        id="_Rectangle_9"
        d="M18 33.5h12v11H18z"
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
      />
      <rect
        id="_Rectangle_10"
        width={14}
        height={3.5}
        x={17}
        y={30}
        className="cls-2"
        data-name="&lt;Rectangle&gt;"
        rx={1}
        ry={1}
      />
      <path
        id="_Path_4"
        d="M30 30H18a1 1 0 0 0-1 1v1.5a.53.53 0 0 0 0 .12 1 1 0 0 1 1-.87h12a1 1 0 0 1 1 .87.53.53 0 0 0 0-.12V31a1 1 0 0 0-1-1Z"
        className="cls-3"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_11"
        width={14}
        height={3.5}
        x={17}
        y={30}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={1}
        ry={1}
      />
      <rect
        id="_Rectangle_12"
        width={23}
        height={3}
        x={12.5}
        y={9.5}
        className="cls-2"
        data-name="&lt;Rectangle&gt;"
        rx={1}
        ry={1}
      />
      <path
        id="_Path_5"
        d="M34.5 9.5h-21a1 1 0 0 0-1 1v1a1 1 0 0 0 .05.25 1 1 0 0 1 .95-.75h21a1 1 0 0 1 1 .75 1 1 0 0 0 0-.25v-1a1 1 0 0 0-1-1Z"
        className="cls-3"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_13"
        width={23}
        height={3}
        x={12.5}
        y={9.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={1}
        ry={1}
      />
      <path
        id="_Path_6"
        d="M27.5 19H26a.5.5 0 0 1-.5-.5V17a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H22a.5.5 0 0 1 .5.5V24a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z"
        data-name="&lt;Path&gt;"
        style={{
          fill: "#ff6242",
          stroke: "#45413c",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      <rect
        id="_Rectangle_14"
        width={2.5}
        height={4.5}
        x={8}
        y={20.5}
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_7"
        d="M8.5 25H10a.5.5 0 0 0 .5-.5V21a.5.5 0 0 0-.11-.3l-2.22 4.17a.49.49 0 0 0 .33.13Z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_15"
        width={2.5}
        height={4.5}
        x={8}
        y={27.5}
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_8"
        d="M8.5 32H10a.5.5 0 0 0 .5-.5V28a.5.5 0 0 0-.11-.3l-2.22 4.17a.49.49 0 0 0 .33.13Z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_16"
        width={2.5}
        height={4.5}
        x={8}
        y={34.5}
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_9"
        d="M8.5 39H10a.5.5 0 0 0 .5-.5V35a.5.5 0 0 0-.11-.3l-2.22 4.17a.49.49 0 0 0 .33.13Z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_17"
        width={2.5}
        height={4.5}
        x={8}
        y={20.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <rect
        id="_Rectangle_18"
        width={2.5}
        height={4.5}
        x={8}
        y={27.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <rect
        id="_Rectangle_19"
        width={2.5}
        height={4.5}
        x={8}
        y={34.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <rect
        id="_Rectangle_20"
        width={2.5}
        height={4.5}
        x={37.5}
        y={20.5}
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_10"
        d="M38 25h1.5a.5.5 0 0 0 .5-.5V21a.5.5 0 0 0-.11-.3l-2.22 4.17A.49.49 0 0 0 38 25Z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_21"
        width={2.5}
        height={4.5}
        x={37.5}
        y={27.5}
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_11"
        d="M38 32h1.5a.5.5 0 0 0 .5-.5V28a.5.5 0 0 0-.11-.3l-2.22 4.17A.49.49 0 0 0 38 32Z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_22"
        width={2.5}
        height={4.5}
        x={37.5}
        y={34.5}
        className="cls-7"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_12"
        d="M38 39h1.5a.5.5 0 0 0 .5-.5V35a.5.5 0 0 0-.11-.3l-2.22 4.17A.49.49 0 0 0 38 39Z"
        className="cls-8"
        data-name="&lt;Path&gt;"
      />
      <rect
        id="_Rectangle_23"
        width={2.5}
        height={4.5}
        x={37.5}
        y={20.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <rect
        id="_Rectangle_24"
        width={2.5}
        height={4.5}
        x={37.5}
        y={27.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <rect
        id="_Rectangle_25"
        width={2.5}
        height={4.5}
        x={37.5}
        y={34.5}
        className="cls-4"
        data-name="&lt;Rectangle&gt;"
        rx={0.5}
        ry={0.5}
      />
      <path
        id="_Path_13"
        d="M24 33.5v11"
        className="cls-4"
        data-name="&lt;Path&gt;"
      />
    </g>
  </svg>
    </icon>
  );

  // Agrega el icono de los cais a un tipo html para renderizar
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  const customMarkerIconHospitales = divIcon({
    html: iconoHospitales,
  });

  return (
    <MapContainer
      className="w-full h-[50em]"
      center={cordenadas}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        {/* Render de cais */}
        {localidadSelected.length > 0 && (
          <>
            {localidadSelected[0].cai?.map((element) => (
              <>
                <Marker
                  position={[
                    element.CoordenadasCai != null && element.CoordenadasCai[0],
                    element.CoordenadasCai != null && element.CoordenadasCai[1],
                  ]}
                  icon={customMarkerIcon}
                />
              </>
            ))}
            {localidadSelected[0].hospital?.map((element) => (
              <>
                <Marker
                  position={[
                    element.CoordenadasHospital != null &&
                      element.CoordenadasHospital[0],
                    element.CoordenadasHospital != null &&
                      element.CoordenadasHospital[1],
                  ]}
                  icon={customMarkerIconHospitales}
                />
              </>
            ))}
          </>
        )}
        <Circle
          center={cordenadas}
          pathOptions={fillOptions}
          radius={5000}
          stroke={false}
        />
      </LayerGroup>
    </MapContainer>
  );
}
