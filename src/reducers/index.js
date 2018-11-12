import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
});

const reducer = combineReducers(rootReducer)
const store = createStore(reducer)

export default rootReducer;
