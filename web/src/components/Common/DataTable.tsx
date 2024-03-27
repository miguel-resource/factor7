import { Delete } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";
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

export const DataTable = ({
  data,
  setData,
  columns,
  handleCreateRow,
  handleDeleteRow,
}: any) => {
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
    onEditingRowSave: ({ values, row, table }) => {
      console.log(values);
      // table.setEditingRow(null);
    },
    onCreatingRowSave: ({ values, row, table }) => {
      handleCreateRow(values, table);
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
    renderRowActions: ({ row, staticRowIndex, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Editar">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <i className="fas fa-edit text-base"></i>
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar">
          <IconButton
            color="error"
            onClick={() => handleDeleteRow(row.original.id)}
          >
            <i className="fas fa-trash text-base"></i>
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });

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
