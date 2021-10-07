import React, { useState } from 'react'
import { Button, Checkbox, makeStyles, Paper, TextField } from '@material-ui/core'

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
  checkbox: {
    margin: 0,
    padding: 0,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 30
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
             id="filled-login-input"
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
         <div className={classes.flex}>
           <div>
             <Checkbox
               color="primary"
               className={classes.checkbox}
             />
             запомнить
           </div>
           <Button variant="contained" color="primary">Войти</Button>
         </div>
       </Paper>
     </div>
  )
}

export default Authorization