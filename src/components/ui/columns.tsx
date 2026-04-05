import type { User } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "company.name",
    header: "Company",
    cell: ({ getValue }) => {
      const value = getValue<string>();

      return (
        <div className="max-w-[120px] truncate" title={value}>
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: "address.country",
    header: "Country",
  },
  {
    accessorFn: (row) => {
      if (row.age < 35) return "Active";
      if (row.age >= 35) return "Inactive";
    },
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();

      return (
        <span
          className={`${
            status === "Active"
              ? "text-green-600 font-medium bg-[#16C098]/38 border-[#00B087]"
              : "text-red-600 font-medium bg-[#FFC5C5] border-[#DF0404]"
          }   border rounded-[4px] px-[8px] py-1 block text-center
            `}
        >
          {status}
        </span>
      );
    },
  },
];
