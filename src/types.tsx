export type stat = {
  image: string;
  field: string;
  count: number | string;
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
};
