import * as React from 'react';
import {
  Button, ButtonGroup, Dialog,
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
import { useSelector } from 'react-redux'
import { useState } from 'react'
import ClientListItem from './ClientListItem'
import AddClients from './AddClients'

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
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const clientsList = useSelector(state =>{
    return state.clients.clients.filter(item => {
      return item.firstName
    })
  } );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClickOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <div className={classes.wrap}>
      <Paper elevation={7}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <ButtonGroup className={classes.root}>
                    <Button onClick={handleClickOpen}>Добавить клиента</Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog"
                    >
                      <AddClients setOpen={setOpen}/>
                    </Dialog>
                  </ButtonGroup>
                </TableCell>
                <TableCell colSpan={5} align="right">
                  <TextField
                     placeholder="Поиск"
                     variant="outlined"
                     className={classes.Search} size="small"
                     onChange={(e)=>setFilter(e.target.value)}
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
