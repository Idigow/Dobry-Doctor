import React, { useState } from 'react'
import { Checkbox, makeStyles, Paper, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme =>({
  auth:{
    width: 600,
    margin: 'auto',
    padding: 50,
  },
  box:{
    height: "100vh",
    display: 'flex',
    alignItems: 'center'
  },
  chexbox: {
    margin: 0,
    padding: 0,
  }
}))
const Authorization = () => {
  const classes = useStyles()
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) =>{
    setLogin(e.target.value)
  }
  const handlePass = (e) =>{
    setPassword(e.target.value)
  }

  return (
     <div className={classes.box}>
       <Paper elevation={7} className={classes.auth}>
         <h2 className="m-2 text-center">АВТОРИЗАЦИЯ</h2>
         <div>
           <TextField
             id="filled-password-input"
             label="Login"
             type="login"
             autoComplete="current-login"
             variant="standard"
             fullWidth
             margin="normal"
             value={login}
             onChange={handleLogin}
           />
           <TextField
             id="filled-password-input"
             label="Password"
             type="password"
             autoComplete="current-password"
             variant="standard"
             fullWidth
             margin="normal"
             value={password}
             onChange={handlePass}
           />
         </div>
         <div>
           <Checkbox
             className={classes.chexbox}
           />
           <button>Авторизация</button>
         </div>
       </Paper>
     </div>
  )
}

export default Authorization