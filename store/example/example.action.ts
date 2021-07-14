import jsonApi from '../../api/jsonApi';
import { exampleActionTypes } from './example.actionTypes';
import { ExampleState } from './example.reducer';

export const setExampleState = (state: ExampleState) => async (dispatch) => {
	dispatch({
		type: exampleActionTypes.SET_EXAMPLE_STATE,
		payload: state,
	});
};

export const getUsers = () => async (dispatch) => {
	try {
		dispatch(setExampleState({ users: [] }));
		const res = await jsonApi.getUsers();
		console.log(res.data);
		dispatch({
			type: exampleActionTypes.GET_USERS,
			payload: {
				users: res.data,
			},
		});
		return res;
	} catch (error) {
		dispatch({
			type: exampleActionTypes.GET_USERS_FAIL,
		});
		return error;
	}
};
