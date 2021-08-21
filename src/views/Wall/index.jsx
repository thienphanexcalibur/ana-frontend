import { useContext, useEffect, useState } from 'react';
import { Box, Spinner, Stack } from '@chakra-ui/react';
import { AppContext } from '@/context';
import ErrorBoundary from '@/components/ErrorBoundary';
import { GET_WALL_POSTS } from '@/actions';
import Header from './Header';
import CreatePostArea from './CreatePostArea';
import Posts from './Posts';

const Wall = () => {
	const { dispatch } = useContext(AppContext);

	const [posts, setPosts] = useState([]);

	const [loading, setLoading] = useState(true);

	const getWallPosts = async () => {
		const postsResult = await dispatch(GET_WALL_POSTS());
		setPosts(postsResult.data);
		setLoading(false);
	};

	useEffect(() => {
		getWallPosts();
	}, []);

	return (
		<Stack w="70%" spacing={10}>
			<Header />
			<Box>
				<CreatePostArea />
			</Box>
			<ErrorBoundary>{loading ? <Spinner /> : <Posts posts={posts} />}</ErrorBoundary>
		</Stack>
	);
};

export default Wall;
