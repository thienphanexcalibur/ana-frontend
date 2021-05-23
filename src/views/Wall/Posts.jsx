import { Stack, StackItem } from '@chakra-ui/layout';
import React, { memo } from 'react';
import Post from '$/components/Post';

export default memo(({ posts }) => (
	<Stack w="100%">
		{posts.map((post) => (
			<StackItem key={post._id}>
				<Post {...post} />
			</StackItem>
		))}
	</Stack>
));
