"use client";

import { DataTable } from "@/components/Common/DataTable";
import { WrapperAdmin } from "@/components/Common/WrapperAdmin";

import s from "@/components/app.module.scss";
import { getAll } from "@/services/FAQ";
import { FAQ } from "@/types/FAQ";
import { Service } from "@/types/Service";
import { MRT_ColumnDef } from "material-react-table";
import { useEffect, useMemo, useState } from "react";

const initial: FAQ[] = [
  {
    question: "¿Qué es el servicio 1?",
    answer: "El servicio 1 es un servicio que...",
  },
  {
    question: "¿Qué es el servicio 2?",
    answer: "El servicio 2 es un servicio que...",
  },
];
export default function AdminFaqPage() {
  const [data, setData] = useState(() => initial);

  const columns = useMemo<MRT_ColumnDef<Service>[]>(
    () => [
      {
        accessorKey: "question", //access nested data with dot notation
        header: "Pregunta Frecuente",
        size: 150,
      },
      {
        accessorKey: "answer",
        header: "Respuesta",
        size: 150,
      },
    ],
    []
  );

  const handleData = async () => {
    const res = await getAll();
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <WrapperAdmin>
      <section className={s.admin}>
        <div className={s.admin__header}>
          <h1 className={s.admin__header__title}>FAQ</h1>
        </div>
        <DataTable data={data} setData={setData} columns={columns} />
      </section>
    </WrapperAdmin>
  );
}
