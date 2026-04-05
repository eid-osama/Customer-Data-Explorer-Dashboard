import getUsers from "@/services/apiUsers";
import type { User } from "@/types";
import {
  useQuery,
  type QueryObserverResult,
  type RefetchOptions,
} from "@tanstack/react-query";

function useUsers(): {
  data: User[] | undefined;
  isPending: boolean;
  error: Error | null;
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<User[] | undefined, Error>>;
} {
  const { error, data, isPending, refetch } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { error, data, isPending, refetch };
}

export default useUsers;
