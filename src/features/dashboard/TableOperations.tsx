import FilterComponent from "./FilterComponent";
import SearchComponent from "./SearchComponent";

function TableOperations() {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 gap-4 max-h-[120px] ">
      <SearchComponent />
      <FilterComponent />
    </div>
  );
}

export default TableOperations;
