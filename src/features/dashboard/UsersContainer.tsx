import { useSearchParams } from "react-router";
import { columns } from "../../components/ui/columns";
import { DataTable } from "../../components/ui/DataTable";

import { useMemo } from "react";
import PagenationComponent from "./PaginationComponent";
import useUsers from "./useUsers";
import { Spinner } from "@/components/ui/spinner";

function UsersContainer() {
  const { data = [], isPending, error, refetch } = useUsers();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "all";

  const filteredData = useMemo(() => {
    const s = search.toLowerCase();

    return data.filter((item) => {
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
      const email = item.email.toLowerCase();

      //  Search condition
      const matchesSearch = fullName.startsWith(s) || email.startsWith(s);

      //  Status condition
      const itemStatus = item.age < 35 ? "Active" : "Inactive";

      const matchesStatus = status === "all" ? true : itemStatus === status;

      return matchesSearch && matchesStatus;
    });
  }, [data, search, status]);
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = 6;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  if (isPending)
    return (
      <div className="flex flex-1 items-center justify-center">
        <Spinner className="size-12" />
      </div>
    );
  if (error) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <p className="text-red-500">
          {error instanceof Error ? error.message : "Something went wrong ⚠️"}
        </p>
        <button
          onClick={() => refetch?.()}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const entries = filteredData.length;

  return (
    <div className="flex flex-col flex-1 gap-[30px] ">
      <DataTable columns={columns} data={paginatedData} />
      <PagenationComponent totalPages={totalPages} entries={entries} />
    </div>
  );
}

export default UsersContainer;
