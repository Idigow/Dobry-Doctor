const CLIENTS_LOAD_START = "clients/load/start";
const CLIENTS_LOAD_SUCCESS = "clients/load/success";
const CREATE_CLIENT = "create/client";
const CLIENT_DELETE_START = "client/delete/start";
const CLIENT_DELETE_SUCCESS = "client/delete/success";

const initState = {
  clients: [],
  loading: false
}
export const clientsReducer = (state = initState, action)=>{
  switch (action.type){
    case CLIENTS_LOAD_START:
      return{
        ...state,
        loading: true
      }
    case CLIENTS_LOAD_SUCCESS:
      return {
        ...state,
        clients: action.payload,
        loading: false
      }
    case CREATE_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      }
    default:
      return {
        ...state
      }
  }
}
export const loadClients = () =>{
  return async (dispatch)=>{
    dispatch({type: CLIENTS_LOAD_START})
    const response = await fetch("/clients")
    const json = await response.json()
    dispatch({
      type: CLIENTS_LOAD_SUCCESS,
      payload: json
    })
  }
}
export const deleteClient = (id) =>{
  return async (dispatch)=>{
    dispatch({
      type: CLIENT_DELETE_START,
      payload: id
    })
    await fetch(`/client/:${id}`,{
      method: "DELETE"
    })
    const response = await fetch("/clients")
    const json = await response.json()
    dispatch({
      type: CLIENT_DELETE_SUCCESS,
      payload: json
    })
  }
}
export const addClient = (firstName, lastName, fathersName, phoneNumber, secondPhoneNumber) =>{
  return async (dispatch)=>{
    dispatch({type: CREATE_CLIENT, payload: {
      firstName, lastName, fathersName, phoneNumber, secondPhoneNumber
      }})
    await fetch("/create/client",{
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
  }
}
