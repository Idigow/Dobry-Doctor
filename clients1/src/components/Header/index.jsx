import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
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