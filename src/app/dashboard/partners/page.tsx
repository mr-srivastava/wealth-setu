"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Partner {
  id: number;
  name: string;
  shortName: string;
  createdAt: string;
  updatedAt: string;
}

const partners: Array<Partner> = [
  {
    id: 1,
    name: "ICICI Mutual Funds",
    shortName: "ICICI",
    createdAt: "2024-12-25T12:45:04.039Z",
    updatedAt: "2024-12-25T12:45:04.039Z",
  },
  {
    id: 2,
    name: "Kotak Mutual Funds",
    shortName: "Kotak",
    createdAt: "2024-12-25T12:47:05.674Z",
    updatedAt: "2024-12-25T12:47:05.674Z",
  },
  {
    id: 3,
    name: "HDFC Mutual Funds",
    shortName: "HDFC",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 4,
    name: "Bandhan Mutual Funds",
    shortName: "Bandhan",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 5,
    name: "ABSL Mutual Funds",
    shortName: "ABSL",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 6,
    name: "TATA Mutual Funds",
    shortName: "TATA",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 7,
    name: "AXIS Mutual Funds",
    shortName: "AXIS",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 8,
    name: "UTI Mutual Funds",
    shortName: "UTI",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 9,
    name: "Edelweiss Mutual Funds",
    shortName: "EDELWEISS",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 10,
    name: "Bajaj Mutual Funds",
    shortName: "BAJAJ",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 11,
    name: "Union Mutual Funds",
    shortName: "UNION",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 12,
    name: "Nippon Mutual Funds",
    shortName: "NIPPON",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 13,
    name: "SBI Mutual Funds",
    shortName: "SBI",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 14,
    name: "DSP Mutual Funds",
    shortName: "DSP",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 15,
    name: "LIC MF Mutual Funds",
    shortName: "LIC MF",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 16,
    name: "Sundaram Mutual Funds",
    shortName: "SUND",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 17,
    name: "Mirae Mutual Funds",
    shortName: "MIRAE",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 18,
    name: "HSBC Mutual Funds",
    shortName: "HSBC",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 19,
    name: "Franklin Templeton Mutual Funds",
    shortName: "FRANK",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 20,
    name: "Canara Robeco Mutual Funds",
    shortName: "CANARA",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 21,
    name: "Mahindra Mutual Funds",
    shortName: "MAHINDRA",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 22,
    name: "Parag Parikh Mutual Funds",
    shortName: "PARAG",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 23,
    name: "ITI Mutual Funds",
    shortName: "ITI MF",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 24,
    name: "Invesco Mutual Funds",
    shortName: "INVESCO",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
  {
    id: 25,
    name: "Quant Mutual Funds",
    shortName: "QUANT",
    createdAt: "2024-12-25T13:08:38.655Z",
    updatedAt: "2024-12-25T13:08:38.655Z",
  },
];

const columns: ColumnDef<Partner>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "shortName",
    header: "Short Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("shortName")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("createdAt")).toLocaleString()}</div>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("updatedAt")).toLocaleString()}</div>
    ),
  },
];

export function PartnersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([
    // We want to search across both 'name' and 'shortName' columns
    {
      id: "name", // This will filter based on 'name' and 'shortName'
      value: "",
    },
    {
      id: "shortName", // To support searching across both columns
      value: "",
    },
  ]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: partners,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setColumnFilters([
      { id: "name", value: searchValue },
      { id: "shortName", value: searchValue },
    ]);
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search partners by name or short name..."
          value={(columnFilters[0].value as string) ?? ""}
          onChange={handleSearchChange}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <div className="p-4 pt-0">
      <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
        Partners
      </h1>
      <PartnersTable />
    </div>
  );
}
