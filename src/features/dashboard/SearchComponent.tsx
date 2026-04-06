import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function useDebounce(value: string, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function SearchComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const [input, setInput] = useState(urlSearch);

  const debouncedSearch = useDebounce(input);
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedSearch) {
      params.set("search", debouncedSearch);
      params.set("page", "1"); // reset pagination on search
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  }, [debouncedSearch]);
  return (
    <InputGroup className="bg-[#F9FBFF]  ">
      <InputGroupInput
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
}

export default SearchComponent;
