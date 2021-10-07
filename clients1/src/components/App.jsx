import React, { useEffect } from 'react'
import Authorization from './Authorization'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { loadClients } from '../redux/ducks/clientsReducer'
import ClientList1 from './Clients/ClientList1'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadClients())
  }, [dispatch]);
  return (
    <div>
      <Header/>
      <ClientList1/>
    </div>
  )
}

export default App