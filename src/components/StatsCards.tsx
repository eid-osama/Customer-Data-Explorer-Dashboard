import totalCustomers from "../assets/total-customers.png";
import countries from "../assets/countries.png";
import active from "../assets/active.png";
import Stat from "./Stat";

function StatsCard() {
  return (
    <div className="flex w-full h-[151px] justify-between">
      <Stat image={totalCustomers} field="Total Customers" count={5000} />
      <Stat image={countries} field="Countries" count={15} />
      <Stat image={active} field="active users" count={150} />
    </div>
  );
}

export default StatsCard;
