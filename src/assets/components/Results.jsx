import React from "react";
import { useContext } from "react";
import DatosContext from '@context/DatosContext'

export default function Formulario() {
    const {datos, Reset} = useContext(DatosContext)
    const TipAmount = datos.numberPeople > 0 ? (datos.bill / datos.numberPeople * (datos === 100 ? datos : datos.tip / 100)).toFixed(2) : 0;
    const Total = (TipAmount*datos.numberPeople).toFixed(2);
    return(
        <>
        <div className="flex flex-col justify-between h-full gap-y-15 p-5 lg:p-10">
            <div className="flex flex-col justify-between gap-y-10">
                <div className="flex flex-row gap-2 justify-between items-center flex-wrap">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white capitalize text-lg font-semibold text-md tracking-[2px]">Tip amount</p>
                        <p className="text-white/60 capitalize text-md font-semibold text-md tracking-[2px]">/ person</p>
                    </div>
                    <p className="texto-verde capitalize text-3xl lg:text-5xl font-semibold text-md tracking-[2px]">${TipAmount}</p>
                </div>
                <div className="flex flex-row gap-2 justify-between items-center flex-wrap">
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white capitalize text-lg font-semibold text-md tracking-[2px]">Total</p>
                        <p className="text-white/60 capitalize text-md font-semibold text-md tracking-[2px]">/ person</p>
                    </div>
                    <p className="texto-verde capitalize text-3xl lg:text-5xl font-semibold text-md tracking-[2px]">${Total}</p>
                </div>
            </div>
            <button onClick={() => Reset()} className="cursor-pointer bg-[#9ee8df] hover:bg-[#73a8a2] p-3 text-center texto-verde-oscuro uppercase text-2xl text:3xl font-semibold duration-300 rounded-md w-full">Reset</button>
        </div>
        </>
    )
}