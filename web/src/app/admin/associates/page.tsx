"use client";

import { DataTable } from "@/components/Common/DataTable";
import { WrapperAdmin } from "@/components/Common/WrapperAdmin";

import s from "@/components/app.module.scss";
import { Service } from "@/types/Service";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo, useState } from "react";

const initial: Service[] = [
  {
    name: "Service 1",
    description: "Description 1",
  },
  {
    name: "Service 2",
    description: "Description 2",
  },
];
export default function AdminAssociatesPage() {
  const [data, setData] = useState(() => initial);

  const columns = useMemo<MRT_ColumnDef<Service>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 150,
      },
    ],
    []
  );

  return (
    <WrapperAdmin>
      <section className={s.admin}>
        <div className={s.admin__header}>
          <h1 className={s.admin__header__title}>Asociados</h1>
        </div>


        <DataTable data={data} setData={setData} columns={columns} />
      </section>
    </WrapperAdmin>
  );
}
