import React from 'react';
import { Link } from 'react-router-dom';

const TableComponent = ({ jsonData }) => {
  // Assuming the first row contains column names
  const columns = jsonData[0];

  return (
    <table border="1">
      <thead>
        <tr>
          {columns.map((columnName, index) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jsonData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                {cellIndex === columns.length - 1 ? (
                  // Link for the last row
                  <Link to={`/user/${encodeURIComponent(cell)}`}>{cell}</Link>
                ) : (
                  // Plain text for other rows
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
