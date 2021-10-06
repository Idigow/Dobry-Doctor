import * as React from 'react';
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow, TextField
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux'
import { deleteClient } from '../../redux/ducks/clientsReducer'

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const useStyles = makeStyles(theme =>({
  wrap:{
    maxWidth: 900,
    marginTop: 50,
    margin: 'auto',
  },
}))

export default function ClientList1() {
  const dispatch = useDispatch()
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

  return (
    <div className={classes.wrap}>
      <Paper elevation={7}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={client.id}>
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
                        >
                          <EditIcon></EditIcon>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined"
                                size="small"
                                color="secondary"
                                onClick={()=>handleDelete(client.id)}
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
