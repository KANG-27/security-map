import React, { useEffect } from 'react'
import Logo from '../Logo/Logo'

export const BarraLateral = ({ candidatura, setCandidatura }) => {



    return (
        <div className='bg-[#171C2F] flex flex-col items-center w-[16%]'>
            <a className="flex items-center flex-col ">
                <Logo />
                <span className='text-white'>Security Map</span>
            </a>
            <span className='border-t-2 border-dashed border-[#D5F379] text-white text-center w-full mt-5 pt-5'>Seleccione un alcalde</span>
            <div className='w-full mt-10 pl-5 pr-10'>
                <div className='flex items-center'>
                    <span class="material-symbols-outlined text-white">
                        account_circle
                    </span>
                    <button
                        data-value={"CandidaturaUno"}
                        className="candidatura buttonyear flex items-center mb-3 cursor-pointer text-white"
                        onClick={() => setCandidatura(0)}
                    >
                        Enrique Peñalosa
                    </button>
                </div>
                <div className='flex items-center pt-3 border-t-2 border-[#D5F379]'>
                    <span class="material-symbols-outlined text-white">
                        account_circle
                    </span>
                    <button
                        data-value={"CandidaturaUno"}
                        className="candidatura buttonyear flex items-center mb-3 cursor-pointer text-white"
                        onClick={() => setCandidatura(1)}
                    >
                        Claudia Lopez
                    </button>







                    {/* <button className='candidatura flex items-center mb-3 cursor-pointer' data-value={"CandidaturaUno"} onClick={() => setCandidatura(0)}>
                    <span class="material-symbols-outlined text-white">
                        account_circle
                    </span>
                    <span className='text-center text-white'>Enrique Peñalosa</span>
                </button>
                <div className='border-t-2 border-solid border-[#D5F379]'>

                    <button className='candidatura flex pt-3 cursor-pointer' data-value={"CandidaturaUno"} onClick={() => setCandidatura(1)}>
                        <span class="material-symbols-outlined text-white">
                            account_circle
                        </span>
                        <span className='text-white'>Claudia Lopez</span>
                    </button>
                </div> */}
                </div>
            </div>
        </div>
    )
}
