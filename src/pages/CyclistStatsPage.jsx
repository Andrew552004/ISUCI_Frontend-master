import React, { useState } from "react";
import AppBase from "../components/AppBase";
import DataTable from "../components/DataTable";
import DashboardStats from "../components/DashBoardStats";

function CyclistStatsPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleCalculateStats = () => {
    // Aquí puedes agregar la lógica para calcular estadísticas
  };

  // Datos de ejemplo para la tabla de estadísticas de ciclistas
  const cyclistData = [
    {
      id: 1,
      nombre: "Juan Pérez",
      equipo: "Equipo A",
      tiempoAcumulado: "12:34:56",
      victorias: 5,
      podios: 7,
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      equipo: "Equipo B",
      tiempoAcumulado: "14:22:10",
      victorias: 3,
      podios: 4,
    },
    // Agrega más ciclistas de prueba aquí
  ];

  // Columnas para la tabla de estadísticas de ciclistas
  const cyclistColumns = [
    { header: "Nombre", key: "nombre" },
    { header: "Equipo", key: "equipo" },
    { header: "Tiempo Acumulado", key: "tiempoAcumulado" },
    { header: "Victorias", key: "victorias" },
    { header: "Podios", key: "podios" },
  ];

  return (
    <AppBase>
      <div className="text-4xl font-bold px-6 py-4">
        Estadísticas de Ciclistas
      </div>

      <div className="flex">
        <div className="w-full">
          <div className="text-2xl font-bold px-6 py-4">
            Filtrar por periodo
          </div>
          <div className="flex pl-4 items-end">
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

            <button
              onClick={handleCalculateStats}
              className="m-2 max-h-14 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              Calcular Estadísticas
            </button>
          </div>

          {/* Tabla de datos */}
          <DataTable data={cyclistData} columns={cyclistColumns} />
        </div>
      </div>

      {/* <DashboardStats /> */}
    </AppBase>
  );
}

export default CyclistStatsPage;
