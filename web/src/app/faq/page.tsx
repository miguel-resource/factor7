"use client";
import { CommonWrapper } from "@/components/Common/Wrapper";
import { ListFAQ } from "../../components/ListFAQ";
import { useEffect, useState } from "react";
import { getAll } from "@/services/FAQ";
import { FAQ } from "@/types/FAQ";
import { CircularProgress } from "@mui/material";

export default function FAQPage() {
  const [data, setData] = useState<FAQ[]>([]);

  const handleData = async () => {
    const res = await getAll();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <CommonWrapper>
      <section className="text-gray-600 body-font py-20">
        {data.length > 0 ? (
          <ListFAQ data={data} />
        ) : (
          <CircularProgress />
        )}
      </section>
    </CommonWrapper>
  );
}
