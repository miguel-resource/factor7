"use client";

import { DataTable } from "@/components/Common/DataTable";
import { WrapperAdmin } from "@/components/Common/WrapperAdmin";

export default function AdminServicesPage() {
  return (
    <WrapperAdmin>
      <section className="w-6/6 ml-56 mt-10 mx-auto">
        <DataTable />
      </section>
    </WrapperAdmin>
  );
};
