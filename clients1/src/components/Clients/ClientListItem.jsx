import React, { useState } from 'react'
import { Button, Dialog, TableCell, TableRow } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import EditClient from './EditClient'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteClient } from '../../redux/ducks/clientsReducer'
import { useDispatch, useSelector } from 'react-redux'

const ClientListItem = ({client}) => {
  const dispatch = useDispatch();
  const clientId = useSelector(state => state.clients.clientId)
  const editing = useSelector(state => state.clients.editing)
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
  const handleDelete = (id) =>{
    dispatch(deleteClient(id))
  }

  if (editing) {
    if (clientId === client._id){
      return (
        <div>загрузка</div>
      )
    }
  }

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
                handleClose={handleClose}
        >
          <EditIcon> </EditIcon>
        </Button>
        <Dialog
          open={open.open}
          onClose={handleClose}
          aria-labelledby="form-dialog"
        >
          <EditClient
            open={open.value}
            setOpen={setOpen}
          />
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
  )
}

export default ClientListItem