import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles,
  TablePagination,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    "& thead th": {
      fontWeight: "600",
      color: theme.palette.primary.main,
      background: theme.palette.primary.light,
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      background: "#fffbf2",
      cursor: "pointer",
    },
  },
}));

const useTable = (records, headCells, filterFn) => {
  const classes = useStyles();

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((item) => (
            <TableCell key={item.id}>{item.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const TblPagination = () => (
    <TablePagination
      rowsPerPageOptions={pages}
      component="div"
      count={records.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );

  const recordsAfterPagingAndSorting = () => {
    return filterFn
      .fn(records)
      .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting };
};

export default useTable;
