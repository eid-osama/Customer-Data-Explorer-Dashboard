export type stat = {
  image: string;
  field: string;
  count: number | string;
  isPending: boolean;
};
export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  company: {
    name: string;
  };
  address: {
    country: string;
  };
  age: number;
  // status: "active" | "inactive";
};
