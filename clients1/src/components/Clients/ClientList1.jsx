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
  const dispatch = useDispatch();
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
  const handleDelete = (id) =>{
    dispatch(deleteClient(id))
  }
  const [open, setOpen] = useState({
    value: "",
    open: false
  })
  const handleClickOpen = (client) =>{
    setOpen({
      value: client,
      open: true
    })
  }
  const handleClose = () =>{
    setOpen({
      value: '',
      open: false
    })
  }
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
                             className={classes.Search} size="small">

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
                    <TableRow hover role="checkbox" tabIndex={-1} key={client._id}>
                      <TableCell align="left" >
                        {`${client.lastName}
                        ${client.firstName} 
                        ${client.fathersName}`}
                      </TableCell>
                      <TableCell align="center">
                        {client.phoneNumber}
                      </TableCell>
                      <TableCell align="center">
                        {client.secondPhoneNumber}
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined"
                                color="primary"
                                size="small"
                                onClick={()=>handleClickOpen(client)}
                        >
                          <EditIcon></EditIcon>
                        </Button>
                        <Dialog
                          open={open.open}
                          onClose={handleClose}
                          aria-labelledby="form-dialog"
                        >
                          <EditClient open={open.value} />
                        </Dialog>
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined"
                                size="small"
                                color="secondary"
                                onClick={()=>handleDelete(client._id)}
                        >
                          <DeleteIcon></DeleteIcon>
                        </Button>
                      </TableCell>
                    </TableRow>
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
