import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


export const DataTable = () => {

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={[
                    { id: 1, col1: 'Hello', col2: 'World' },
                    { id: 2, col1: 'XGrid', col2: 'is Awesome' },
                    { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
                ]}
                columns={[
                    { field: 'id', headerName: 'ID', width: 90 },
                    {
                        field: 'col1',
                        headerName: 'Column 1',
                        width: 150,
                        editable: true,
                    },
                    {
                        field: 'col2',
                        headerName: 'Column 2',
                        width: 150,
                        editable: true,
                    },
                ]}
            />
        </Box>

    )
}