const CLIENTS_LOAD_START = "clients/load/start";
const CLIENTS_LOAD_SUCCESS = "clients/load/success";
const CREATE_CLIENT = "create/client";
const CLIENT_DELETE_START = "client/delete/start";
const CLIENT_DELETE_SUCCESS = "client/delete/success";
const CLIENT_EDIT_START = "client/edit/start";
const CLIENT_EDIT_SUCCESS = "client/edit/success";
const CLIENT_EDIT_ERROR = "client/edit/error";

const initState = {
  clients: [],
  loading: false,
  error: null,
  editing: false
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
    case CLIENT_DELETE_SUCCESS:
      return {
        ...state,
        clients: state.clients.filter((client)=>{
          if (client._id !== action.payload){
            return true
          }
          return false
        })
      }
    case CLIENT_EDIT_START:
      return {
        ...state,
        editing: true
      }
    case CLIENT_EDIT_SUCCESS:
      return {
        ...state,
        clients: state.clients.map((item)=>{
          if (item._id !== action.payload._id){
            return item
          }
          return action.payload
        })
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
    })
    await fetch(`/remove/client/${id}`,{
      method: "DELETE"
    })
    dispatch({
      type: CLIENT_DELETE_SUCCESS,
      payload: id
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
export const editClient = (firstName, lastName,
  fathersName, phoneNumber, secondPhoneNumber, id) =>{
  return async (dispatch)=>{
    dispatch({type: CLIENT_EDIT_START})
    const response = await fetch(`/update/client/${id}`,{
      method: "PATCH",
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
    const json =  response.json()
    if (json.error){
      dispatch({
        type: CLIENT_EDIT_ERROR,
        payload: json.error
      })
    }else {
      dispatch({
        type: CLIENT_EDIT_SUCCESS,
        payload: json
      })
    }
  }
}