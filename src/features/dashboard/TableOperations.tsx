import FilterComponent from "./Filtercomponent";
import SearchComponent from "./SearchComponent";

function TableOperations() {
  return (
    <div className="flex justify-between gap-4 max-h-[120px] ">
      <SearchComponent />
      <FilterComponent />
    </div>
  );
}

export default TableOperations;
