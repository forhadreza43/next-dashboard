import CustomersTable from "@/app/ui/customers/table";
import React, { Suspense } from "react";

export default async function CustomerPage(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomersTable query={query} />
    </Suspense>
  );
}
