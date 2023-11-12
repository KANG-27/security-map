import React from 'react'
import LocalidadesV2 from "json/LocalidadesV2.json";
import { Bar, VictoryBar, VictoryChart, VictoryLabel, VictoryPie, VictoryTooltip, } from 'victory';
export const ResumenPrincipal = (años, locali, candi) => {
  return (
    <div className='flex flex-col p-5 items-center gap-6'> 
      <span className='text-xl'>Total de cais en la alcaldia de:</span>
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
              style={{ data: { fill: "#000000" } }}
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
    </div>
  )
}
