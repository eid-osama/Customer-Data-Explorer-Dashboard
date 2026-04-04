import StatsCard from "../features/dashboard/StatsCards";
import TableComponent from "../features/dashboard/TableComponent";

function Main() {
  return (
    <div className="flex flex-col gap-[40px] h-screen pb-[40px]">
      <StatsCard />
      <TableComponent />
    </div>
  );
}

export default Main;
