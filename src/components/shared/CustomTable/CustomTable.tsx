import React from "react";
import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
} from "@mui/material";

interface TableColumn {
   id: string;
   label: string;
}

interface TableData {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   [key: string]: any;
}

interface CustomTableProps {
   columns: TableColumn[];
   data: TableData[];
   align?: "center" | "inherit" | "justify" | "left" | "right";
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data, align }) => {
   return (
      <TableContainer component={Paper}>
         <Table>
            <TableHead>
               <TableRow>
                  {columns.map((column) => (
                     <TableCell
                        sx={{ fontWeight: 600, fontSize: 18 }}
                        align={align}
                        key={column.id}
                     >
                        {column.label}
                     </TableCell>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {data.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                     {columns.map((column) => (
                        <TableCell
                           align={align}
                           key={column.id}
                        >
                           {row[column.id]}
                        </TableCell>
                     ))}
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default CustomTable;
