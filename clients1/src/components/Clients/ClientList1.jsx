import * as React from 'react';
import {
  Button, Dialog,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow, TextField,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux'
import { deleteClient } from '../../redux/ducks/clientsReducer'
import { useState } from 'react'
import EditClient from './EditClient'
import ClientListItem from './ClientListItem'

const useStyles = makeStyles(theme =>({
  wrap:{
    maxWidth: 900,
    marginTop: 50,
    margin: 'auto',
  },
  TabHead:{
    width: "50%"
  },
  Search:{
    width: "50%"
  }
}))

export default function ClientList1() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const clientsList = useSelector(state => state.clients.clients);
  return (
    <div className={classes.wrap}>
      <Paper elevation={7}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <TextField placeholder="Поиск"
                             variant="outlined"
                             className={classes.Search} size="small"
                  >
                  </TextField>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  Ф.И.О
                </TableCell>
                <TableCell align="center">
                  Номер телефона
                </TableCell>
                <TableCell align="center">
                  Дополнительный номер
                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientsList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((client) => {
                  return (
                    <ClientListItem client={client}/>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={clientsList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
