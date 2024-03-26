import { Delete } from "@mui/icons-material";
import { Box } from "@mui/material";
import {
  MRT_ActionMenuItem,
  MRT_TableContainer,
  useMaterialReactTable,
} from "material-react-table";

import s from "@/components/app.module.scss";

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

export const DataTable = ({ data, setData, columns }: any) => {
  const table = useMaterialReactTable({
    autoResetPageIndex: false,
    columns,
    data,
    enableRowOrdering: true,
    enableSorting: false,
    enableRowActions: true,
    createDisplayMode: "row",
    editDisplayMode: "row",
    enableEditing: true,
    positionToolbarAlertBanner: "top",
    onCreatingRowSave: (row: any) => {
      handleCreateRow(row);
    },
    muiRowDragHandleProps: ({ table }) => ({
      onDragEnd: () => {
        const { draggingRow, hoveredRow } = table.getState();
        if (hoveredRow && draggingRow) {
          data.splice(
            hoveredRow.index,
            0,
            data.splice(draggingRow.index, 1)[0]
          );
          setData([...data]);
        }
      },
    }),
    renderRowActionMenuItems: ({ row, table }) => [
      <MRT_ActionMenuItem
        key="delete"
        icon={<Delete />}
        onClick={() => {
          data.splice(row.index, 1);
          setData([...data]);
        }}
        label={"Eliminar"}
        table={table}
      ></MRT_ActionMenuItem>,
    ],
  });

  const handleCreateRow = (row: any) => {
    data.push(row.values);
    setData([...data]);
    table.setCreatingRow(null);
  };

  return (
    <Box sx={{ height: 400, width: "100%", color: "black" }}>
      <div className={s.admin__add}>
        <button
          onClick={() => {
            table.setCreatingRow(true);
          }}
          className={s.admin__add__button}
        >
          <i className="fas fa-plus"></i> Agregar
        </button>
      </div>
      <MRT_TableContainer table={table} />
    </Box>
  );
};
