const  CLIENTS_LOAD_START = "clients/load/start";
const  CLIENTS_LOAD_SUCCESS = "clients/load/success";
const  ADD_CLIENT_START = "add/client/start";
const  ADD_CLIENT_SUCCESS = "add/client/success";


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
  }
}

export const addClient = (name, lastName, fathersName, phoneNumber) =>{
  return async (dispatch)=>{
    dispatch({type: ADD_CLIENT_START})
    await fetch()
  }
}