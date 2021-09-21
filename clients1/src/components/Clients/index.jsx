import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'


const useStyles = makeStyles(theme=>({
  wrap:{
    width: 900,
    margin: 'auto'
  },
  inputs:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  input:{
    width: "49%",
    marginTop: 20,
    marginBottom: 20
  },

}))

const Clients = () => {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fathersName, setFathersName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const handleName = (e) =>{
    setName(e.target.value)
  }
  console.log(name)
  const handleLastName = (e) =>{
    setLastName(e.target.value)
  }
  const handleFathersName = (e) =>{
    setFathersName(e.target.value)
  }
  const handlePhoneNumber = (e) =>{
    setPhoneNumber(e.target.value)
  }


  return (
    <div className={classes.wrap}>
      <h1 className="text-center p-5">Добавить клиента</h1>
      <div className={classes.inputs}>
        <TextField id="outlined-basic" onChange={handleName} value={name}  variant="outlined" placeholder="Имя" className={classes.input} />
        <TextField id="outlined-basic" onChange={handleLastName} value={lastName} variant="outlined" placeholder="Фамилия" className={classes.input} />
      </div>
      <div className={classes.inputs}>
        <TextField id="outlined-basic" onChange={handleFathersName} value={fathersName} variant="outlined" placeholder="Отчество" className={classes.input} />
        <TextField id="outlined-basic" onChange={handlePhoneNumber} value={phoneNumber} variant="outlined" placeholder="Номер телефона" className={classes.input} />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
        >
          Добавить клиента
        </Button>
      </div>
    </div>
  )
}

export default Clients