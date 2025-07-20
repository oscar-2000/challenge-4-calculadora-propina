import React from "react";
import { InputNumber } from 'antd';
import { useContext, useState, useEffect } from "react";
import DatosContext from '@context/DatosContext'
import { ConfigProvider } from "antd";
import SelectTrip from "@ui/SelectTip";
import PersonIcon from '/public/img/icon-person.svg';


export default function Formulario() {
    const {datos, actualizarBill, actualizarTip, actualizarPersona} = useContext(DatosContext)
    const [visibleCustom, setVisible] = useState(false);
    const [permitedPeople, setPeople] = useState(1);

    const changeVisibleCustom = () => {
        setVisible(prev => !prev);
    }

    return(
        <>
        <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
                <p className="texto-verde-oscuro text-lg font-semibold text-md tracking-[2px] mb-3">Bill</p>
                <div className="flex flex-row gap-2 justify-between items-center">
                    <ConfigProvider
                    theme={{
                        token: {
                            colorBgContainer: "transparent",
                            colorBorder: "transparent",
                            borderRadius: 0,
                            lineWidth: 0,
                            colorText: "#01454b"
                        },
                        components: {
                            InputNumber: {
                                hoverBorderColor: "transparent",
                                handleHoverColor: "transparent",
                                activeBorderColor: "transparent",
                                addonBg: "#f3f8fb",
                                activeShadow: "transparent",
                                inputFontSize: 25,
                            }
                        }
                    }}
                    >
                    <div className="bg-[#f3f8fb] border-[2px] border-transparent duration-300 hover:border-[#5faaa1] rounded-md w-full">
                        <div className="flex flex-row gap-2 justify-between items-center px-3">
                            <InputNumber 
                            addonBefore={<span className="text-[#01454b]/60 text-[1.3rem]">$</span>}
                            defaultValue={0}
                            value={datos.bill}
                            controls={false} 
                            min={0}
                            decimalSeparator="."
                            max={1000000}
                            onChange={(value) => actualizarBill(value)}
                            className="font-bold [&>input]:text-right"
                            style={{ width: '100%' }} 
                            />
                        </div>
                    </div>
                    </ConfigProvider>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="texto-verde-oscuro text-lg font-semibold text-md tracking-[2px] mb-3">Select Tip %</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[5,10,15,25,50].map((porcentaje) => {
                        return(
                        <div key={porcentaje} className="col-span-1">
                            <SelectTrip onClick={() => {
                                actualizarTip(porcentaje),
                                setVisible(false)
                            }} active={datos.tip === porcentaje && !datos.custom}>
                                {porcentaje}%
                            </SelectTrip>
                        </div>
                        )
                    })}
                    <div className="col-span-1">
                        {!visibleCustom ? (
                            <button onClick={() => {
                                actualizarTip(0),
                                changeVisibleCustom()
                            }} className="cursor-pointer bg-[#f3f8fb] hover:bg-[#9ee8df] hover:text-[#01454b] p-3 text-center texto-verde-oscuro text-2xl font-semibold duration-300 rounded-md w-full">Custom</button>
                        )
                        :
                        (
                        <ConfigProvider
                        theme={{
                            token: {
                                colorBgContainer: "transparent",
                                colorBorder: "transparent",
                                borderRadius: 0,
                                lineWidth: 0,
                                colorText: "#01454b"
                            },
                            components: {
                                InputNumber: {
                                    hoverBorderColor: "transparent",
                                    handleHoverColor: "transparent",
                                    activeBorderColor: "transparent",
                                    addonBg: "#f3f8fb",
                                    activeShadow: "transparent",
                                    inputFontSize: 25,
                                }
                            }
                        }}
                        >
                        <div className="bg-[#f3f8fb] border-[2px] border-transparent duration-300 hover:border-[#5faaa1] rounded-md">
                            <div className="flex flex-row gap-2 justify-between items-center px-3 py-2 text-end">
                                <InputNumber 
                                defaultValue={0}
                                controls={false} 
                                min={0}
                                decimalSeparator="."
                                max={100}
                                onChange={(value) => actualizarTip(value)}
                                className="font-bold"
                                />
                            </div>
                        </div>
                        </ConfigProvider>
                        )
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="flex flex-row gap-2 justify-between items-center">
                    <p className="texto-verde-oscuro text-lg font-semibold text-md tracking-[2px] mb-3">Number of People</p>
                    {permitedPeople <= 0 ? <p className="texto-naranjo text-lg font-semibold text-md tracking-[2px]">Can't be zero</p> : ''}
                </div>
                <div className="flex flex-row gap-2 justify-between items-center">
                    <ConfigProvider
                    theme={{
                        token: {
                            colorBgContainer: "transparent",
                            colorBorder: "transparent",
                            borderRadius: 0,
                            lineWidth: 0,
                            colorText: "#01454b"
                        },
                        components: {
                            InputNumber: {
                                hoverBorderColor: "transparent",
                                handleHoverColor: "transparent",
                                activeBorderColor: "transparent",
                                addonBg: "#f3f8fb",
                                activeShadow: "transparent",
                                inputFontSize: 25,
                            }
                        }
                    }}
                    >
                    <div className={`bg-[#f3f8fb] border-[2px] border-transparent duration-300 rounded-md w-full hover:border-[#5faaa1]  ${permitedPeople <= 0 ? 'borde-naranjo' : ''}`}>
                        <div className="flex flex-row gap-2 justify-between items-center px-3">
                            <InputNumber 
                            prefix={<img src="/img/icon-person.svg" className="h-5 w-auto pe-6" alt="Person"/>}
                            defaultValue={1}
                            value={datos.numberPeople}
                            controls={false} 
                            decimalSeparator="."
                            max={100}
                            onChange={(value) => {
                                actualizarPersona(value),
                                setPeople(value)
                            }}
                            className="font-bold [&>input]:text-right"
                            style={{ width: '100%' }} 
                            />
                        </div>
                    </div>
                    </ConfigProvider>
                </div>
            </div>
        </div>
        </>
    )
}