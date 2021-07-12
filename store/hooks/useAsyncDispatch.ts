import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { thunkDispatch } from './redux-hook';

const useAsyncThunkDispatch = (func) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const dispatch: thunkDispatch = useDispatch();

	const asyncDispatch = () => {
		setData(null);
		setError(null);
		setIsLoading(true);
		setIsError(false);
		dispatch(func())
			.then((res) => {
				if (res) {
					setData(res);
					setIsLoading(false);
				}
			})
			.catch((e) => {
				setIsError(true);
				setError(e);
				setIsLoading(false);
				console.log(e);
			});
	};

	return { asyncDispatch, data, isLoading, isError };
};

export default useAsyncThunkDispatch;
