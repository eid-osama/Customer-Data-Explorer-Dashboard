import TableOperations from "./TableOperations";
import UsersContainer from "./UsersContainer";

function TableComponent() {
  return (
    <div className="flex flex-1 flex-col gap-[30px] bg-white w-full p-6 md:p-8 lg:p-10 rounded-[30px] border border-[#F0F0F0]">
      <TableOperations />
      <UsersContainer />
    </div>
  );
}

export default TableComponent;
