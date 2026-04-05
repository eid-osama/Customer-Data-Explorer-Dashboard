import StatsCard from "./StatsCards";
import TableComponent from "./TableComponent";

function Dashboard() {
  return (
    <div className="flex flex-col gap-[40px]">
      <StatsCard />
      <TableComponent />
    </div>
  );
}

export default Dashboard;
