import { Extend } from '@utils/type-utils';
import { AnyAction } from 'redux';
import { exampleActionTypes } from './example.actionTypes';

type User = Extend<{
	id: number;
	name: string;
}>;

export const exampleInitialState = {
	userId: '',
	name: '',
	email: '',
	password: '',
	isLoggedin: false,
	users: <User[]>[],
	posts: [],
};

export type ExampleState = Extend<Partial<typeof exampleInitialState>>;

export const exampleReducer = (
	exampleState: ExampleState = exampleInitialState,
	action: AnyAction
): ExampleState => {
	switch (action.type) {
		case exampleActionTypes.SET_EXAMPLE_STATE:
			return { ...exampleState, ...action.payload };

		case exampleActionTypes.GET_USERS:
			return { ...exampleState, ...action.payload };

		case exampleActionTypes.GET_USERS_FAIL:
			return exampleState;

		case exampleActionTypes.GET_ALL_POSTS:
			return { ...exampleState, ...action.payload };

		case exampleActionTypes.GET_ALL_POSTS_FAIL:
			return exampleState;

		case exampleActionTypes.GET_POST_COMMENTS:
			return { ...exampleState, ...action.payload };

		default:
			return exampleState;
	}
};
