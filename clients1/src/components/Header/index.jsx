import React, { useState } from 'react'
import {
  AppBar, Button, ButtonGroup, Dialog,
  makeStyles, Toolbar, Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    "& button": {
      color: "white",
      border: "none"
    }
  }
})
const Header = () => {

const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Добрый Доктор
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header