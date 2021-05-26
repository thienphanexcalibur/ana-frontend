import { Box, Text, Wrap, WrapItem } from '@chakra-ui/layout';
import React, { memo } from 'react';

import placeholder from '@/assets/placeholder/empty_posts_placeholder.svg';
import { Img } from '@chakra-ui/image';
import { Center } from '@chakra-ui/react';
import Post from '@/components/Post';
import { Suspense } from 'react';

export default memo(({ posts }) =>
	posts?.length === 0 ? (
		<Center>
			<Box textAlign="center">
				<Img w={300} src={placeholder} />
				<Text fontWeight="semibold" color="gray.600" mt={5}>
					Urrgg, there are nothing here...
				</Text>
			</Box>
		</Center>
	) : (
		<Wrap w="100%" spacing="30px">
			{posts.map((post) => (
				<WrapItem key={post._id}>
					<Post {...post} />
				</WrapItem>
			))}
		</Wrap>
	)
);
