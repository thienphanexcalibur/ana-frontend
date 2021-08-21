import { Stack } from '@chakra-ui/layout';
import { memo } from 'react';
import Comment from '@/components/Comment';

export default memo(({ comments }) => (
	<Stack spacing={5}>
		{comments?.length > 0 &&
			comments.map((comment) => <Comment data={comment} key={comment._id} />)}
	</Stack>
));
