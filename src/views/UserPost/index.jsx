import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/layout';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { GET_COMMENTS, GET_POST } from '$/actions';
import { AppContext } from '$/context';
import BreadCrumb from './BreadCrumb';
import Comments from './Comments';
import CreateCommentArea from './CreateCommentArea';

const UserPost = () => {
	const history = useHistory();
	const { dispatch } = useContext(AppContext);
	const { id } = useParams();
	const [post, setPost] = useState({
		title: '',
		content: ''
	});

	const [comments, setComments] = useState([]);

	const getPost = useCallback(async () => {
		const postResult = await dispatch(GET_POST(id));
		setPost(postResult);
	}, [id]);

	const getComments = useCallback(async () => {
		const commentsResult = await dispatch(GET_COMMENTS(id));
		setComments(commentsResult);
	}, [id]);

	const goBack = useCallback(() => {
		history.goBack();
	}, [history]);

	useEffect(() => {
		getPost();
		getComments();
	}, [id]);

	return (
		<Stack w="50%">
			<Box mb={5}>
				<BreadCrumb onClick={goBack} />
			</Box>
			<Heading>{post.title}</Heading>
			<Text>{post.content}</Text>
			<Box my={10}>
				<Divider my={10} />
			</Box>
			<CreateCommentArea postId={id} onCommentCreated={getComments} />
			<Comments comments={comments} />
		</Stack>
	);
};

export default UserPost;
