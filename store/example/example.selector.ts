/**
 *  Your selector functions related to the state should be in this file.
 *  Selectors help you get accumulated data from state in an efficient manner. It is retriggered only when the state is changed.
 */

import { createSelector } from 'reselect';
import { RootState } from '..';

export const examplePostsSelector = (state: RootState) => state.example.posts;

export const searchPosts = ({ searchParam = '' }) =>
	createSelector(examplePostsSelector, (posts) => {
		if (posts.length) {
			console.log('posts', posts);
			return posts.filter((post) =>
				post.name.toLowerCase().includes(searchParam)
			);
		}
		return [];
	});
