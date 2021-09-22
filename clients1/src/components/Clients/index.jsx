import React, { useState } from 'react'
import { Button, makeStyles, Paper, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addClient } from '../../redux/ducks/clientsReducer'


const useStyles = makeStyles(theme=>({
  wrap:{
    width: 900,
    margin: 'auto',
    marginTop: 50,
    padding: "0 40px 40px 40px"
  },
  inputs:{

  },
  input:{
    marginTop: 20,
  },

}))

const Clients = () => {
  const classes = useStyles()
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fathersName, setFathersName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [secondPhoneNumber, setSecondPhoneNumber] = useState("");
  const dispatch = useDispatch
  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handleLastName = (e) =>{
    setLastName(e.target.value)
  }
  const handleFathersName = (e) =>{
    setFathersName(e.target.value)
  }
  const handlePhoneNumber = (e) =>{
    setPhoneNumber(e.target.value)
  }
  const handleSecondPhoneNumber = (e) =>{
    setSecondPhoneNumber(e.target.value)
  }
  const handleClient = () =>{
    dispatch(
      addClient(name, lastName, fathersName, phoneNumber, secondPhoneNumber)
    );
  }


  return (
    <Paper
      className={classes.wrap}
      elevation={10}
    >
      <h1 className="text-center p-5">Добавить клиента</h1>
      <div className={classes.inputs}>
        <TextField
          id="outlined-basic"
          onChange={handleName}
          value={name}
          variant="outlined"
          placeholder="Имя"
          className={classes.input}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          onChange={handleLastName}
          value={lastName}
          variant="outlined"
          placeholder="Фамилия"
          className={classes.input}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          onChange={handleFathersName}
          value={fathersName}
          variant="outlined"
          placeholder="Отчество"
          className={classes.input}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          onChange={handlePhoneNumber}
          value={phoneNumber}
          variant="outlined"
          placeholder="Номер телефона"
          className={classes.input}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          onChange={handleSecondPhoneNumber}
          value={secondPhoneNumber}
          variant="outlined"
          placeholder="(Дополнительный) Номер телефона"
          className={classes.input}
          fullWidth
        />
      </div>

      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="mt-4"
          onClick={handleClient}
          fullWidth
        >
          Добавить клиента
        </Button>
      </div>
    </Paper>
  )
}

export default Clients