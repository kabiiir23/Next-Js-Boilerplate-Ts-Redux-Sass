import { Container, Loader } from '@mantine/core';
import { Button, Group } from '@mantine/core';
import { getUsers } from '@store/example/example.action';
import { useAppSelector } from '@store/hooks/redux-hook';
import useAsyncThunkDispatch from '@store/hooks/useAsyncDispatch';
import React from 'react';

const User = () => {
	const users = useAppSelector((state) => state.example.users);

	const {
		asyncDispatch: asyncGetUsers,
		error,
		isError,
		isLoading,
	} = useAsyncThunkDispatch(getUsers);

	const handleGetUsers = async () => {
		await asyncGetUsers();
	};

	return (
		<Group direction='column' align='center'>
			<Button color='pink' onClick={handleGetUsers}>
				Get All Users
			</Button>
			{isError && <div>{`error ${error}`}</div>}
			{isLoading ? (
				<Loader />
			) : users.length ? (
				<Group direction='column' align='center'>
					{users.map((user) => (
						<Container size='md'>{user.name}</Container>
					))}
				</Group>
			) : (
				<></>
			)}
		</Group>
	);
};

export default User;
