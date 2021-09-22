import { createLogger } from 'redux-logger/src'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { clientsReducer } from './ducks/clientsReducer'

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  clients: clientsReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);