import React, { useState } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { editClient } from '../../redux/ducks/clientsReducer'

const useStyles = makeStyles(theme=>({
  wrap:{
    margin: 'auto',
    padding: "0 40px 40px 40px"
  },
  input:{
    marginTop: 20,
  },
}))

const EditClient = ({open}) => {
  console.log(open)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(open.firstName);
  const [lastName, setLastName] = useState(open.lastName);
  const [fathersName, setFathersName] = useState(open.fathersName);
  const [phoneNumber, setPhoneNumber] = useState(open.phoneNumber);
  const [secondPhoneNumber, setSecondPhoneNumber] = useState(open.secondPhoneNumber);

  const handleName = (e) =>{
    setFirstName(e.target.value)
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
  const handleClient = (id) =>{
    dispatch(
      editClient(
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber,
        id
      )
    );
  }
  return (
    <div className={classes.wrap}>
      <h2 className="text-center p-4">Изменить данные</h2>
      <div className={classes.inputs}>
        <TextField
          autoFocus
          id="outlined-basic"
          onChange={handleName}
          value={firstName}
          variant="outlined"
          placeholder="Имя"
          className={classes.input}
          fullWidth
          size={'small'}
          required={true}
        />
        <TextField
          id="outlined-basic"
          onChange={handleLastName}
          value={lastName}
          variant="outlined"
          placeholder="Фамилия"
          className={classes.input}
          fullWidth
          size={'small'}
          required={true}
        />
        <TextField
          id="outlined-basic"
          onChange={handleFathersName}
          value={fathersName}
          variant="outlined"
          placeholder="Отчество"
          className={classes.input}
          fullWidth
          size={'small'}
          required={true}
        />
        <TextField
          id="outlined-basic"
          onChange={handlePhoneNumber}
          value={phoneNumber}
          variant="outlined"
          placeholder="Номер телефона"
          className={classes.input}
          fullWidth
          size={'small'}
          type="number"
          required={true}
        />
        <TextField
          id="outlined-basic"
          onChange={handleSecondPhoneNumber}
          value={secondPhoneNumber}
          variant="outlined"
          placeholder="(Дополнительный) Номер телефона"
          className={classes.input}
          fullWidth
          size={'small'}
          type="number"
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="mt-4"
          onClick={()=>handleClient(open._id)}
          fullWidth
        >
          Сохранить изменения
        </Button>
      </div>
    </div>
  )
}

export default EditClient