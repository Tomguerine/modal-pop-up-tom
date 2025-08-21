import React from 'react';
import DataTable, { ColumnDef } from '../components/DataTable';

export interface Employee {
  id: number;
  name: string;
  role: string;
}

const columns: ColumnDef<Employee>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'role', header: 'Role' },
];

const employees: Employee[] = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob', role: 'Designer' },
];

export default function EmployeeList() {
  return <DataTable<Employee> columns={columns} data={employees} />;
}
