import React from 'react';

export interface ColumnDef<TData extends object, TValue = unknown> {
  accessorKey: keyof TData & string;
  header: React.ReactNode;
  cell?: (row: TData) => React.ReactNode;
}

export interface DataTableProps<TData extends object, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData extends object, TValue = unknown>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessorKey}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessorKey}>
                {column.cell
                  ? column.cell(row)
                  : (row[column.accessorKey] as React.ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
