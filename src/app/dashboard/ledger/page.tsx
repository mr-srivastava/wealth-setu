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

interface Transaction {
  id: number;
  amount: number;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
  partnerId: number;
  partner: {
    id: number;
    name: string;
    shortName: string;
    createdAt: string;
    updatedAt: string;
  };
}

const transactions: Array<Transaction> = [
  {
    id: 1,
    amount: 78568.49,
    timestamp: "1680307200000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 2,
    amount: 80195.75,
    timestamp: "1682908800000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 3,
    amount: 93207.81,
    timestamp: "1685587200000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 4,
    amount: 93935.08,
    timestamp: "1688265600000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 5,
    amount: 98680.89,
    timestamp: "1690848000000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 6,
    amount: 101091.11,
    timestamp: "1693526400000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 7,
    amount: 103746.88,
    timestamp: "1696118400000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 8,
    amount: 105454.67,
    timestamp: "1698796800000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 9,
    amount: 98639.41,
    timestamp: "1701398400000",
    partnerId: 1,
    createdAt: "2024-12-25T13:36:17.858Z",
    updatedAt: "2024-12-25T13:36:17.858Z",
    partner: {
      id: 1,
      name: "ICICI Mutual Funds",
      shortName: "ICICI",
      createdAt: "2024-12-25T12:45:04.039Z",
      updatedAt: "2024-12-25T12:45:04.039Z",
    },
  },
  {
    id: 10,
    amount: 25430.86,
    timestamp: "1680307200000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 11,
    amount: 26628.28,
    timestamp: "1682908800000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 12,
    amount: 32193.65,
    timestamp: "1685587200000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 13,
    amount: 31086.03,
    timestamp: "1688265600000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 14,
    amount: 34112.23,
    timestamp: "1690848000000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 15,
    amount: 35191.13,
    timestamp: "1693526400000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 16,
    amount: 36076.17,
    timestamp: "1696118400000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 17,
    amount: 36985.86,
    timestamp: "1698796800000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 18,
    amount: 34936.74,
    timestamp: "1701398400000",
    partnerId: 2,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 2,
      name: "Kotak Mutual Funds",
      shortName: "Kotak",
      createdAt: "2024-12-25T12:47:05.674Z",
      updatedAt: "2024-12-25T12:47:05.674Z",
    },
  },
  {
    id: 19,
    amount: 7993.14,
    timestamp: "1680307200000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 20,
    amount: 7877.88,
    timestamp: "1682908800000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 21,
    amount: 8552.69,
    timestamp: "1685587200000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 22,
    amount: 9035.16,
    timestamp: "1688265600000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 23,
    amount: 9813.34,
    timestamp: "1690848000000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 24,
    amount: 9308.08,
    timestamp: "1693526400000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 25,
    amount: 9315.3,
    timestamp: "1696118400000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 26,
    amount: 9444.95,
    timestamp: "1698796800000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 27,
    amount: 8931.47,
    timestamp: "1701398400000",
    partnerId: 3,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 3,
      name: "HDFC Mutual Funds",
      shortName: "HDFC",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 28,
    amount: 12844,
    timestamp: "1680307200000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 29,
    amount: 12497.51,
    timestamp: "1682908800000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 30,
    amount: 14309.95,
    timestamp: "1685587200000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 31,
    amount: 13773.94,
    timestamp: "1688265600000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 32,
    amount: 14847.64,
    timestamp: "1690848000000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 33,
    amount: 15072.03,
    timestamp: "1693526400000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 34,
    amount: 15311.45,
    timestamp: "1696118400000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 35,
    amount: 15552.46,
    timestamp: "1698796800000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 36,
    amount: 14638.77,
    timestamp: "1701398400000",
    partnerId: 4,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 4,
      name: "Bandhan Mutual Funds",
      shortName: "Bandhan",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 37,
    amount: 5739.18,
    timestamp: "1680307200000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 38,
    amount: 5523.06,
    timestamp: "1682908800000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 39,
    amount: 7751.53,
    timestamp: "1685587200000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 40,
    amount: 6242.38,
    timestamp: "1688265600000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 41,
    amount: 6292.91,
    timestamp: "1690848000000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 42,
    amount: 6240.02,
    timestamp: "1693526400000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 43,
    amount: 6277.24,
    timestamp: "1696118400000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 44,
    amount: 6359.26,
    timestamp: "1698796800000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 45,
    amount: 5862.18,
    timestamp: "1701398400000",
    partnerId: 5,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 5,
      name: "ABSL Mutual Funds",
      shortName: "ABSL",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 46,
    amount: 11400.59,
    timestamp: "1680307200000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 47,
    amount: 11302.56,
    timestamp: "1682908800000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 48,
    amount: 34128.64,
    timestamp: "1685587200000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 49,
    amount: 12599.55,
    timestamp: "1688265600000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 50,
    amount: 13292.12,
    timestamp: "1690848000000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 51,
    amount: 13549,
    timestamp: "1693526400000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 52,
    amount: 13615.43,
    timestamp: "1696118400000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 53,
    amount: 13661.96,
    timestamp: "1698796800000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
  {
    id: 54,
    amount: 12730.25,
    timestamp: "1701398400000",
    partnerId: 6,
    createdAt: "2024-12-25T13:42:51.296Z",
    updatedAt: "2024-12-25T13:42:51.296Z",
    partner: {
      id: 6,
      name: "TATA Mutual Funds",
      shortName: "TATA",
      createdAt: "2024-12-25T13:08:38.655Z",
      updatedAt: "2024-12-25T13:08:38.655Z",
    },
  },
];

const columns: ColumnDef<Transaction>[] = [
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
    accessorFn: (row) => row.partner.name,
    header: "Partner Name",
  },
  {
    accessorFn: (row) => row.partner.shortName,
    header: "Partner Short Name",
  },

  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => (
      <div>
        {new Date(parseInt(row.getValue("timestamp"))).toLocaleString()}
      </div>
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
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

export function TransactionsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([
    { id: "amount", value: "" },
    { id: "partner.name", value: "" },
  ]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: transactions,
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
      { id: "amount", value: searchValue },
      { id: "partner.name", value: searchValue },
    ]);
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search transactions by amount or partner..."
          value={(columnFilters[0].value as string) || ""}
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

export default function Transactions() {
  return (
    <div className="p-4 pt-0">
      <h1 className="my-2 text-3xl font-semibold leading-none tracking-tight">
        Transactions
      </h1>
      <TransactionsTable />
    </div>
  );
}
