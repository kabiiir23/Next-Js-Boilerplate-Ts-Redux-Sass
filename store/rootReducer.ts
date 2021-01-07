import { combineReducers } from 'redux';

//import Reducers

//rootReducer
export const rootReducer = combineReducers({
  //Reducers eg: auth: authReducer,
});

export type RootState = ReturnType<typeof combineReducers>;
