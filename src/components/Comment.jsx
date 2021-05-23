import { Avatar } from '@chakra-ui/avatar';
import { Box, Text } from '@chakra-ui/layout';
import React, { memo } from 'react';
import ErrorBoundary from './ErrorBoundary';

export default memo(({ data }) => (
	<ErrorBoundary>
		<Box border="1px" borderColor="gray.200">
			<Avatar name={data.byUser.username} size="sm" />
			<Text>{data.byUser.username}</Text>
			<Text>{data.comment}</Text>
		</Box>
	</ErrorBoundary>
));
