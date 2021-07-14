import { combineReducers } from 'redux';

//import Reducers
import { exampleReducer } from '@store/example/example.reducer';

//rootReducer
export const rootReducer = combineReducers({
	example: exampleReducer,
	//Reducers eg: auth: authReducer,
});
