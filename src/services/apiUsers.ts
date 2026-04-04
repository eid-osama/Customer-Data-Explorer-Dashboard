async function getUsers() {
  try {
    const res = await fetch("https://dummyjson.com/users?limit=0");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await res.json();

    return data.users;
  } catch (error) {
    console.error(error);
    console.log("could not load users");
    return [];
  }
}

export default getUsers;
