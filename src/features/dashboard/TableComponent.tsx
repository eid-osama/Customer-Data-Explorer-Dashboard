import { columns } from "../../components/ui/columns";
import { DataTable } from "../../components/ui/DataTable";
import { useState } from "react";
import PagenationComponent from "./PaginationComponent";
import useUsers from "./useUsers";

function TableComponent() {
  const { data, isPending } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  if (isPending) return <p>Loading....</p>;
  const pageSize = 6;
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const totalPages = Math.ceil(data.length / pageSize);
  const entries = data.length;
  return (
    <div className="flex flex-col flex-1 gap-[30px] justify-between  bg-white w-full p-10 rounded-[30px] border border-[#F0F0F0]">
      <DataTable columns={columns} data={paginatedData} />
      <PagenationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        entries={entries}
      />
    </div>
  );
}

export default TableComponent;
