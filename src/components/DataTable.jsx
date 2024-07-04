import React from 'react';

function DataTable({ data, columns }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-200">
          <tr>
            {/* Itera sobre las columnas para renderizar los encabezados */}
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-4 font-medium text-gray-900 text-base">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 border-t border-gray-200">
          {/* Itera sobre los datos para renderizar las filas */}
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {/* Itera sobre las columnas para renderizar las celdas */}
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 text-base">
                  {/* Usa la función de renderizado de la columna si está definida */}
                  {column.render ? column.render(item[column.key]) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
