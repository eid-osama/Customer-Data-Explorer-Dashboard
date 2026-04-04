import getUsers from "@/services/apiUsers";
import { useQuery } from "@tanstack/react-query";

function useUsers() {
  const { error, data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { error, data, isPending };
}

export default useUsers;
