import { useSearchParams } from "react-router";
import { columns } from "../../components/ui/columns";
import { DataTable } from "../../components/ui/DataTable";

import PagenationComponent from "./PaginationComponent";
import useUsers from "./useUsers";
import TableOperations from "./TableOperations";
import { useMemo } from "react";
function UsersContainer() {
  const { data = [], isPending } = useUsers();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const filteredData = useMemo(() => {
    const s = search.toLowerCase();

    return data.filter((item) => {
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();

      return fullName.startsWith(s) || item.email.toLowerCase().startsWith(s);
    });
  }, [data, search]);
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = 6;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  if (isPending) return <p>Loading....</p>;

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const entries = filteredData.length;

  return (
    <div className="flex flex-col flex-1 gap-[30px] justify-between">
      <TableOperations />
      <DataTable columns={columns} data={paginatedData} />
      <PagenationComponent totalPages={totalPages} entries={entries} />
    </div>
  );
}

export default UsersContainer;
