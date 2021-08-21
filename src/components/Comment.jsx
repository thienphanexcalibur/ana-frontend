import { Avatar } from '@chakra-ui/avatar';
import { Flex, Text, VStack } from '@chakra-ui/layout';
import { memo } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Interactions from './Interactions';

export default memo(({ data }) => (
	<ErrorBoundary>
		<VStack alignItems="flex-start">
			<Flex>
				<Avatar name={data.byUser?.username} size="xs" mr={3} />
				<Text fontWeight="semibold">{data.byUser?.username}</Text>
			</Flex>
			<Text>{data.comment}</Text>

			<Interactions
				data={{
					liked: data.liked,
					disliked: data.disliked
				}}
			/>
		</VStack>
	</ErrorBoundary>
));
