import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { thunkDispatch } from './redux-hook';

const useAsyncThunkDispatch = (func) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const dispatch: thunkDispatch = useDispatch();

	const asyncDispatch = () =>
		new Promise((resolve, reject) => {
			setData(null);
			setError(null);
			setIsLoading(true);
			setIsError(false);
			dispatch(func())
				.then((res) => {
					if (res.data) {
						setData(res.data);
						setIsLoading(false);
					} else {
						throw res;
					}
				})
				.catch((e) => {
					console.log(e);
					setIsError(true);
					setError(e);
					setIsLoading(false);
				});
			resolve('done');
		});

	return { asyncDispatch, data, isLoading, isError, error };
};

export default useAsyncThunkDispatch;
