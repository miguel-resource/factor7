import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const SearchInput = () => {
  const search = useSelector((state: any) => state.search);
  const inputRef: any = useRef(null);

  useEffect(() => {
    if (search.isSearching) {
      // @ts-ignore
    //   inputRef.current.value = search.query;
      inputRef.current.focus();
      console.log("search", search.isSearching);
    }
  }, [search]);

  return (
    <div className="flex items-center justify-center w-full mb-10">
      <input    
        ref={inputRef}
        type="text"
        placeholder="Buscar"
        className="h-10 px-4 text-sm mr-4  border-gray-300  border-b-2 lg:text-lg
        focus:outline-none focus:ring-0  focus:border-b-2 focus:border-blue-800"
        style={{ width: "85%" }}
      />
    </div>
  );
};
