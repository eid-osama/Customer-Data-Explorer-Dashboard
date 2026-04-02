import type { User } from "@/types";
import { columns } from "./ui/columns";
import { DataTable } from "./ui/dataTable";
import { useState } from "react";
import PagenationComponent from "./PagenationComponent";

function TableComponent() {
  const data: User[] = [
    {
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+1 965-431-3024",
      age: 28,
      company: { name: "Dooley, Kozey and Cronin" },
      address: { country: "United States" },
    },
    {
      firstName: "James",
      lastName: "Smith",
      email: "james.smith@x.dummyjson.com",
      phone: "+44 7700 900123",
      age: 34,
      company: { name: "TechNova Ltd" },
      address: { country: "United Kingdom" },
    },
    {
      firstName: "Sophia",
      lastName: "Brown",
      email: "sophia.brown@x.dummyjson.com",
      phone: "+49 1512 3456789",
      age: 22,
      company: { name: "Berlin Softworks" },
      address: { country: "Germany" },
    },
    {
      firstName: "Daniel",
      lastName: "Williams",
      email: "daniel.williams@x.dummyjson.com",
      phone: "+33 612 345 678",
      age: 41,
      company: { name: "Paris Solutions" },
      address: { country: "France" },
    },
    {
      firstName: "Olivia",
      lastName: "Taylor",
      email: "olivia.taylor@x.dummyjson.com",
      phone: "+81 90-1234-5678",
      age: 29,
      company: { name: "Tokyo Innovations" },
      address: { country: "Japan" },
    },
    {
      firstName: "Liam",
      lastName: "Anderson",
      email: "liam.anderson@x.dummyjson.com",
      phone: "+61 412 345 678",
      age: 37,
      company: { name: "Sydney Labs" },
      address: { country: "Australia" },
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+1 965-431-3024",
      age: 28,
      company: { name: "Dooley, Kozey and Cronin" },
      address: { country: "United States" },
    },
    {
      firstName: "James",
      lastName: "Smith",
      email: "james.smith@x.dummyjson.com",
      phone: "+44 7700 900123",
      age: 34,
      company: { name: "TechNova Ltd" },
      address: { country: "United Kingdom" },
    },
    {
      firstName: "Sophia",
      lastName: "Brown",
      email: "sophia.brown@x.dummyjson.com",
      phone: "+49 1512 3456789",
      age: 22,
      company: { name: "Berlin Softworks" },
      address: { country: "Germany" },
    },
    {
      firstName: "Daniel",
      lastName: "Williams",
      email: "daniel.williams@x.dummyjson.com",
      phone: "+33 612 345 678",
      age: 41,
      company: { name: "Paris Solutions" },
      address: { country: "France" },
    },
    {
      firstName: "Olivia",
      lastName: "Taylor",
      email: "olivia.taylor@x.dummyjson.com",
      phone: "+81 90-1234-5678",
      age: 29,
      company: { name: "Tokyo Innovations" },
      address: { country: "Japan" },
    },
    {
      firstName: "Liam",
      lastName: "Anderson",
      email: "liam.anderson@x.dummyjson.com",
      phone: "+61 412 345 678",
      age: 37,
      company: { name: "Sydney Labs" },
      address: { country: "Australia" },
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+1 965-431-3024",
      age: 28,
      company: { name: "Dooley, Kozey and Cronin" },
      address: { country: "United States" },
    },
    {
      firstName: "James",
      lastName: "Smith",
      email: "james.smith@x.dummyjson.com",
      phone: "+44 7700 900123",
      age: 34,
      company: { name: "TechNova Ltd" },
      address: { country: "United Kingdom" },
    },
    {
      firstName: "Sophia",
      lastName: "Brown",
      email: "sophia.brown@x.dummyjson.com",
      phone: "+49 1512 3456789",
      age: 22,
      company: { name: "Berlin Softworks" },
      address: { country: "Germany" },
    },
    {
      firstName: "Daniel",
      lastName: "Williams",
      email: "daniel.williams@x.dummyjson.com",
      phone: "+33 612 345 678",
      age: 41,
      company: { name: "Paris Solutions" },
      address: { country: "France" },
    },
    {
      firstName: "Olivia",
      lastName: "Taylor",
      email: "olivia.taylor@x.dummyjson.com",
      phone: "+81 90-1234-5678",
      age: 29,
      company: { name: "Tokyo Innovations" },
      address: { country: "Japan" },
    },
    {
      firstName: "eid",
      lastName: "Anderson",
      email: "liam.anderson@x.dummyjson.com",
      phone: "+61 412 345 678",
      age: 37,
      company: { name: "Sydney Labs" },
      address: { country: "Australia" },
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const totalPages = Math.ceil(data.length / pageSize);
  const entries = data.length;
  return (
    <div className="flex flex-col flex-1 gap-[30px] justify-between  bg-white w-full p-10 rounded-[30px] border border-[#F0F0F0]">
      <DataTable columns={columns} data={paginatedData} />
      <PagenationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        entries={entries}
      />
    </div>
  );
}

export default TableComponent;
