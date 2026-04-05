import totalCustomers from "@/assets/total-customers.png";
import countries from "@/assets/countries.png";
import active from "@/assets/active.png";
import Stat from "./Stat";
import useUsers from "./useUsers";
import { useMemo } from "react";

function StatsCard() {
  const { data = [], isPending } = useUsers();
  const stats = useMemo(() => {
    const emails = new Set<string>();
    const countries = new Set<string>();
    let activeCount = 0;

    for (const user of data) {
      emails.add(user.email);
      countries.add(user.address.country);

      if (user.age < 35) activeCount++;
    }

    return {
      uniqueCustomers: emails.size,
      uniqueCountries: countries.size,
      activeUsers: activeCount,
    };
  }, [data]);

  return (
    <div className="flex w-full h-[151px] justify-between">
      <Stat
        image={totalCustomers}
        field="Total Customers"
        count={stats.uniqueCustomers}
        isPending={isPending}
      />
      <Stat
        image={countries}
        field="Countries"
        count={stats.uniqueCountries}
        isPending={isPending}
      />
      <Stat
        image={active}
        field="active users"
        count={stats.activeUsers}
        isPending={isPending}
      />
    </div>
  );
}

export default StatsCard;
