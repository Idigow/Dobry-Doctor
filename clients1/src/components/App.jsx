import React, { useEffect } from 'react'
import Authorization from './Authorization'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { loadClients } from '../redux/ducks/clientsReducer'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadClients())
  }, [dispatch]);
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App