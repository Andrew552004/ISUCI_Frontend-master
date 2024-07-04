//mostrar estadísticas dinámicas con opciones de filtro. 
import React, { useState } from "react";
import { GiPodium } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { GrTrophy } from "react-icons/gr";

function DashboardStats() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [topN, setTopN] = useState(0);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleTopNChange = (event) => {
        setTopN(event.target.value);
    };

    const getStats = () => {};

    return (
        <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
            <div className="text-4xl font-bold py-2">Estadísticas</div>

            <div className="flex pt-4 items-end">
                <div className="flex flex-col">
                    <label className="font-bold pl-4">Desde</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        className="m-2 rounded-md py-2 px-4"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="font-bold pl-4">Hasta</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        className="m-2 rounded-md py-2 px-4"
                    />
                </div>

                <div className="flex flex-col w-40">
                    <label className="font-bold pl-4">Representantes</label>
                    <input
                        type="number"
                        min={0}
                        value={topN}
                        onChange={handleTopNChange}
                        className="m-2 rounded-md py-2 px-4"
                    />
                </div>

                <button
                    onClick={getStats}
                    className="m-2 max-h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                    Generar Estadísticas
                </button>
            </div>

            <div className="sm:flex sm:space-x-4">
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <div className="flex items-center pb-4">
                                    <GiPodium className="w-10 h-10 mr-4 text-blue-500" />
                                    <h3 className="text-2xl font-medium text-gray-400">
                                        Top {topN} Representantes
                                    </h3>
                                </div>

                                <p className="text-2xl font-bold text-black pt-3 ">
                                    1. Juan
                                </p>
                                <p className="text-2xl font-bold text-black pt-3 ">
                                    2. Juan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                    <div className="flex bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <div className="flex items-center pb-4">
                                    <GrMoney className="w-10 h-10 text-blue-500 mr-4" />
                                    <h3 className="text-2xl leading-6 font-medium text-gray-400 w-2/3">
                                        Regionales con mayor ventas
                                    </h3>
                                </div>
                                <p className="text-2xl font-bold text-black pt-3">
                                    1. Andina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
                    <div className="bg-white p-5">
                        <div className="sm:flex sm:items-start">
                            <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                                <div className="flex items-center pb-4">
                                    <GrTrophy className="w-10 h-10 text-blue-500 mr-4"/>
                                    <h3 className="text-2xl leading-6 font-medium text-gray-400">
                                        Producto más vendido
                                    </h3>
                                </div>
                                <p className="text-3xl font-bold text-black pt-4">
                                    Nombre Producto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardStats;
