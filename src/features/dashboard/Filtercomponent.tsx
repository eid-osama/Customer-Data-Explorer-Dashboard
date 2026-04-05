import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "react-router";
function FilterComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "all";

  function handleChange(value: string) {
    if (value === "all") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", value);
      searchParams.set("page", "1");
    }

    setSearchParams(searchParams);
  }
  return (
    <Select value={status} onValueChange={handleChange}>
      <SelectTrigger className="max-w-[100px] w-full bg-[#F9FBFF]  ">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Inactive">Inactive</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default FilterComponent;
