import StatsCard from "./StatsCards";
import TableComponent from "./TableComponent";

function Main() {
  return (
    <div className="flex flex-col gap-[40px] h-screen pb-[40px]">
      <StatsCard />
      <TableComponent />
    </div>
  );
}

export default Main;
