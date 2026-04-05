import getUsers from "@/services/apiUsers";
import type { User } from "@/types";
import { useQuery } from "@tanstack/react-query";

function useUsers(): {
  data: User[];
  isPending: boolean;
  error: Error | null;
} {
  const { error, data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { error, data, isPending };
}

export default useUsers;
