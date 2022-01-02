import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from './reducers/searchReducer';

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  searchModule: searchReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))