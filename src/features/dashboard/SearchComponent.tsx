import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function useDebounce(value: string, delay = 280) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
// function Highlight({ text, query }) {
//   if (!query) return <>{text}</>;
//   const parts = text.split(
//     new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"),
//   );
//   return (
//     <>
//       {parts.map((part, i) =>
//         part.toLowerCase() === query.toLowerCase() ? (
//           <mark
//             key={i}
//             style={{
//               background: "var(--accent)",
//               color: "var(--bg)",
//               borderRadius: 3,
//               padding: "0 2px",
//             }}
//           >
//             {part}
//           </mark>
//         ) : (
//           part
//         ),
//       )}
//     </>
//   );
// }

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
    <InputGroup>
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
