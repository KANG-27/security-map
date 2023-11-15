import React from 'react'
import LocalidadesV2 from "json/LocalidadesV2.json";
import { Bar, VictoryArea, VictoryAxis, VictoryBar, VictoryChart, VictoryClipContainer, VictoryGroup, VictoryLabel, VictoryLegend, VictoryLine, VictoryStack, VictoryTooltip, } from 'victory';
import App from '@/pages/_app';
export const ResumenPrincipal = () => {
  // console.log(LocalidadesV2.CandidaturaUno.SumaSinArmas); 
  const data1 = [
    { x: LocalidadesV2.CandidaturaUno.años[0].año, y: LocalidadesV2.CandidaturaUno.años[0].totalCais },
    { x: LocalidadesV2.CandidaturaUno.años[1].año, y: LocalidadesV2.CandidaturaUno.años[1].totalCais },
    { x: LocalidadesV2.CandidaturaUno.años[2].año, y: LocalidadesV2.CandidaturaUno.años[2].totalCais },
    { x: LocalidadesV2.CandidaturaUno.años[3].año, y: LocalidadesV2.CandidaturaUno.años[3].totalCais },
    { x: LocalidadesV2.CandidaturaDos.años[0].año, y: LocalidadesV2.CandidaturaDos.años[0].totalCais },
    { x: LocalidadesV2.CandidaturaDos.años[1].año, y: LocalidadesV2.CandidaturaDos.años[1].totalCais },
    { x: LocalidadesV2.CandidaturaDos.años[2].año, y: LocalidadesV2.CandidaturaDos.años[2].totalCais },
    { x: LocalidadesV2.CandidaturaDos.años[3].año, y: LocalidadesV2.CandidaturaDos.años[3].totalCais },
  ]
  const data2 = [
    { x: LocalidadesV2.CandidaturaUno.años[0].año, y: LocalidadesV2.CandidaturaUno.años[3].totalhospitales },
    { x: LocalidadesV2.CandidaturaUno.años[1].año, y: LocalidadesV2.CandidaturaUno.años[2].totalhospitales },
    { x: LocalidadesV2.CandidaturaUno.años[2].año, y: LocalidadesV2.CandidaturaUno.años[2].totalhospitales },
    { x: LocalidadesV2.CandidaturaUno.años[3].año, y: LocalidadesV2.CandidaturaUno.años[3].totalhospitales },
    { x: LocalidadesV2.CandidaturaDos.años[0].año, y: LocalidadesV2.CandidaturaDos.años[0].totalhospitales },
    { x: LocalidadesV2.CandidaturaDos.años[1].año, y: LocalidadesV2.CandidaturaDos.años[1].totalhospitales },
    { x: LocalidadesV2.CandidaturaDos.años[2].año, y: LocalidadesV2.CandidaturaDos.años[2].totalhospitales },
    { x: LocalidadesV2.CandidaturaDos.años[3].año, y: LocalidadesV2.CandidaturaDos.años[3].totalhospitales },
  ]
  const Año_2016 = [
    { x: LocalidadesV2.CandidaturaUno.años[0].Totales_Tipos_hurto[0].SumaSinArmas, y: LocalidadesV2.CandidaturaUno.años[0].centrosEnLocalidades[1].Total },
    { x: LocalidadesV2.CandidaturaUno.años[0].centrosEnLocalidades[1].Total, y: LocalidadesV2.CandidaturaUno.años[0].Totales_Tipos_hurto[0].SumaSinArmas },
    // { x: LocalidadesV2.CandidaturaUno.años[0].centrosEnLocalidades[1].Total, y: LocalidadesV2.CandidaturaUno.años[0].centrosEnLocalidades[1].Total },

    
  ];
  console.log(Año_2016);
  return (
    <div className='flex flex-col p-5 items-center gap-10 mt-2'>
      <strong className='text-xl'>Total de cai en la alcaldia de:</strong>
      <div className='flex items-center'>
        <div className='flex flex-col items-center'>
          <span className='font-bold text-base'>Enrique Peñalosa</span>
          <VictoryChart domainPadding={{ x: 40, y: 40 }}>
            <VictoryBar
              style={{ data: { fill: "#000000" } }}
              data={[
                { x: new Date(LocalidadesV2.CandidaturaUno.años[0].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[0].totalCais },
                { x: new Date(LocalidadesV2.CandidaturaUno.años[1].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[1].totalCais },
                { x: new Date(LocalidadesV2.CandidaturaUno.años[2].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[2].totalCais },
                { x: new Date(LocalidadesV2.CandidaturaUno.años[3].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[3].totalCais }
              ]}
              labels={({ datum }) => `CAI: ${datum.y}`}
              labelComponent={<VictoryTooltip />}
              dataComponent={
                <Bar
                  tabIndex={0}
                  ariaLabel={({ datum }) => `x: ${datum.x}`}
                />
              }
            />
          </VictoryChart>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-bold text-base'>Claudia Lopez</span>
          <VictoryChart domainPadding={{ x: 40, y: 40 }}>
            <VictoryBar
              style={{ data: { fill: "#D5F379" } }}
              data={[
                { x: new Date(LocalidadesV2.CandidaturaDos.años[0].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[1].totalCais },
                { x: new Date(LocalidadesV2.CandidaturaDos.años[1].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[1].totalCais },
                { x: new Date(LocalidadesV2.CandidaturaDos.años[2].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[2].totalCais },
                { x: new Date(LocalidadesV2.CandidaturaDos.años[3].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[3].totalCais }
              ]}
              labels={({ datum }) => `CAI: ${datum.y}`}
              labelComponent={<VictoryTooltip />}
              dataComponent={
                <Bar
                  tabIndex={0}
                  ariaLabel={({ datum }) => `x: ${datum.x}`}
                />
              }
            />
          </VictoryChart>
        </div>
      </div>
        <strong className='text-xl m-2'>Total de hospitales en la alcaldia de:</strong>
      <div className='flex items-center'>
        <div className='flex flex-col items-center'>
          <span className='font-bold text-base'>Enrique Peñalosa</span>
          <VictoryChart domainPadding={{ x: 40, y: 40 }}>
            <VictoryBar
              style={{ data: { fill: "#D5F379" } }}
              data={[
                { x: new Date(LocalidadesV2.CandidaturaUno.años[0].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[0].totalhospitales },
                { x: new Date(LocalidadesV2.CandidaturaUno.años[1].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[1].totalhospitales },
                { x: new Date(LocalidadesV2.CandidaturaUno.años[2].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[2].totalhospitales },
                { x: new Date(LocalidadesV2.CandidaturaUno.años[3].año, 2, 2), y: LocalidadesV2.CandidaturaUno.años[3].totalhospitales }
              ]}
              labels={({ datum }) => `CAI: ${datum.y}`}
              labelComponent={<VictoryTooltip />}
              dataComponent={
                <Bar
                  tabIndex={0}
                  ariaLabel={({ datum }) => `x: ${datum.x}`}
                />
              }
            />
          </VictoryChart>
        </div>
        <div className='flex flex-col items-center'>
          <span className='font-bold text-base'>Claudia Lopez</span>
          <VictoryChart domainPadding={{ x: 40, y: 40 }}>
            <VictoryBar
              style={{ data: { fill: "#000000" } }}
              data={[
                { x: new Date(LocalidadesV2.CandidaturaDos.años[0].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[0].totalhospitales },
                { x: new Date(LocalidadesV2.CandidaturaDos.años[1].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[1].totalhospitales },
                { x: new Date(LocalidadesV2.CandidaturaDos.años[2].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[2].totalhospitales },
                { x: new Date(LocalidadesV2.CandidaturaDos.años[3].año, 2, 2), y: LocalidadesV2.CandidaturaDos.años[3].totalhospitales }
              ]}
              labels={({ datum }) => `CAI: ${datum.y}`}
              labelComponent={<VictoryTooltip />}
              dataComponent={
                <Bar
                  tabIndex={0}
                  ariaLabel={({ datum }) => `x: ${datum.x}`}
                />
              }
            />
          </VictoryChart>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex flex-col items-center'>
        <strong className='text-xl m-7'>Total definitivo entre <span className='text-2xl'>CAI</span> y <span className='text-2xl'>Hospitales</span></strong>
        <VictoryChart domainPadding={20}>
          <VictoryLegend
            x={150}
            y={0}
            title="Comparación"
            centerTitle
            orientation="horizontal"
            gutter={20}
            style={{ border: { stroke: 'black' }, title: { fontSize: 20 }  }}
            data={[
              { name: 'CAI', symbol: { fill: 'black' } },
              { name: 'Hospitales', symbol: { fill: '#D5F379' } },
            ]}
          />
          <VictoryAxis tickValues={[LocalidadesV2.CandidaturaUno.años[0].año,LocalidadesV2.CandidaturaUno.años[1].año, LocalidadesV2.CandidaturaUno.años[2].año, LocalidadesV2.CandidaturaUno.años[3].año, LocalidadesV2.CandidaturaDos.años[0].año,LocalidadesV2.CandidaturaDos.años[1].año,LocalidadesV2.CandidaturaDos.años[2].año,LocalidadesV2.CandidaturaDos.años[3].año ]} />
          <VictoryAxis dependentAxis />
          <VictoryBar data={data1} x="x" y="y" style={{ data: { fill: 'black' } }} />
          <VictoryBar data={data2} x="x" y="y" style={{ data: { fill: '#D5F379' } }} />
        </VictoryChart>

        
      </div>
      {/* <div className='flex flex-col items-center'>
        <strong className='text-xl m-7'>Total de tipos de hurto</strong>
        <VictoryChart domainPadding={20}>
          <VictoryLegend
            x={150}
            y={0}
            centerTitle
            title="Comparación"
            orientation="vertical"
            gutter={20}
            style={{ border: { stroke: 'black' }, title: { fontSize: 20 }, pocision: {} }}
            data={[
              { name: 'Arma Blanca', symbol: { fill: '#7D3C98' } },
              { name: 'Contundentes', symbol: { fill: 'black' } },
              // { name: 'ArmaFuego', symbol: { fill: '#D5F379' } },
              // { name: 'ArmaBlanca', symbol: { fill: '#D5F379' } },
              // { name: 'Escopolamina', symbol: { fill: '#D5F379' } },
              // { name: 'NoReportados', symbol: { fill: '#D5F379' } },
            ]}
          />
          <VictoryAxis tickValues={[LocalidadesV2.CandidaturaUno.años[0].año,LocalidadesV2.CandidaturaUno.años[1].año, LocalidadesV2.CandidaturaUno.años[2].año, LocalidadesV2.CandidaturaUno.años[3].año, LocalidadesV2.CandidaturaDos.años[0].año,LocalidadesV2.CandidaturaDos.años[1].año,LocalidadesV2.CandidaturaDos.años[2].año,LocalidadesV2.CandidaturaDos.años[3].año ]} />
          <VictoryAxis dependentAxis />
          <VictoryBar data={Año_2016} x="x" y="y" style={{ data: { fill: 'black' } }} />
        </VictoryChart>
      </div> */}
      </div>
    </div>
  )
}
