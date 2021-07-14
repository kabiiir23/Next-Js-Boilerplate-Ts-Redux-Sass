import axios, { AxiosError, AxiosResponse } from 'axios';
import { Auth } from 'aws-amplify';

const getAccessToken = async (): Promise<string> => {
	try {
		const res = await Auth.currentSession();
		return res.getIdToken().getJwtToken();
	} catch (error) {
		return '';
	}
};

const getAuthorizationHeader = async (): Promise<{
	Authorization: string;
}> => {
	const token = await getAccessToken();
	const headers = {
		Authorization: `Bearer ${token}`,
	};
	return headers;
};

const currentUser = async (): Promise<any | string> => {
	try {
		const res = await Auth.currentAuthenticatedUser();
		console.log(res);
		return res;
	} catch (error) {
		return 'No current user';
	}
};

const getUsers = async (): Promise<AxiosResponse<any>> => {
	const headers = await getAuthorizationHeader();
	const res = await axios({
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'GET',
		headers: {
			...headers,
			// if you want to add other headers ...
		},
	});
	return res;
};

const getPosts = async (): Promise<AxiosResponse<any>> => {
	const headers = await getAuthorizationHeader();
	const res = await axios({
		url: 'https://jsonplaceholder.typicode.com/posts',
		method: 'GET',
		headers: {
			...headers,
			// if you want to add other headers ...
		},
	});
	return res;
};

const editUser = async ({
	id,
}: {
	id: string;
}): Promise<AxiosResponse<any>> => {
	const headers = await getAuthorizationHeader();
	const res = await axios({
		url: `https://example.com/editUser/${id}`,
		method: 'PUT',
		headers: {
			...headers,
			// if you want to add other headers ...
		},
	});
	return res;
};

export default { getUsers, getPosts, getAccessToken, currentUser, editUser };
