import React from "react";
import DatosContext from "@context/DatosContext";
import { useState } from "react";

const DatosProvider = ({children}) => {
    const InicialData = {
        bill: 0,
        tip: 0,
        custom: false,
        numberPeople: 0
    }
    const [datos, setDatos] = useState(InicialData);

    const actualizarBill = (data) => {
        setDatos(prev => ({...prev, bill: data}))
    }

    const actualizarTip = (data) => {
        setDatos(prev => ({...prev, tip: data, custom: data === 0 ? true : false}));
    }

    const actualizarPersona = (data) => {
        setDatos(prev => ({...prev, numberPeople: data > 0 ? data : 0}))
    }

    const Reset = () => {
        setDatos(InicialData)
    }

    return (
        <DatosContext.Provider value={{datos, actualizarBill, actualizarTip, actualizarPersona, Reset}}>
        {children}
        </DatosContext.Provider>
    )
}

export default DatosProvider;
