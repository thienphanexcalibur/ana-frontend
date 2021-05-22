import React, { useContext, useEffect } from 'react';
import { Box, Stack, StackItem } from '@chakra-ui/react';
import Post from '../../components/Post';
import { AppContext } from '../../context';
import ErrorBoundary from '../../components/ErrorBoundary';
import { GET_WALL_POSTS } from '../../actions';
import Header from './Header';
import CreatePostArea from './CreatePostArea';

const Posts = ({ posts }) => (
	<Stack w="100%">
		{posts.map((post) => (
			<StackItem key={post._id}>
				<Post {...post} />
			</StackItem>
		))}
	</Stack>
);

const Wall = () => {
	const { state, dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch(GET_WALL_POSTS());
	}, []);

	return (
		<Stack w="50%" spacing={10}>
			<Header />
			<Box>
				<CreatePostArea />
			</Box>
			<ErrorBoundary>
				<Posts posts={state.posts} />
			</ErrorBoundary>
		</Stack>
	);
};

export default Wall;
