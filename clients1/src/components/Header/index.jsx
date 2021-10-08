import React, { useState } from 'react'
import {
  AppBar, Button, ButtonGroup, Dialog,
  makeStyles, Toolbar, Typography
} from '@material-ui/core'

import AddClients from '../Clients/AddClients'
const useStyles = makeStyles({
  root: {
    "& button": {
      color: "white",
      border: "none"
    }
  }
})
const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () =>{
    setOpen(true)
  }
  const handleClose = () =>{
    setOpen(false)
  }
const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Добрый Доктор
          </Typography>
          <ButtonGroup className={classes.root}>
            <Button onClick={handleClickOpen}>Добавить клиента</Button>
            <Dialog
              open={open}
              onClose={handleClose}
            aria-labelledby="form-dialog"
            >
              <AddClients/>
            </Dialog>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header