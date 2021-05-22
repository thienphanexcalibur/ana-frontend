import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Heading, HStack, LinkBox, LinkOverlay, Stack, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GET_POST } from '../../actions';
import { AppContext } from '../../context';
import BreadCrumb from './BreadCrumb';

const UserPost = () => {
	const history = useHistory();
	const { dispatch } = useContext(AppContext);
	const { id } = useParams();
	const [post, setPost] = useState({
		title: '',
		content: '',
		comments: []
	});

	const getPost = async (postID) => {
		const postResult = await dispatch(GET_POST(postID));
		setPost(postResult);
	};

	const goBack = () => {
		history.goBack();
	};

	useEffect(() => {
		getPost(id);
	}, []);

	return (
		<Stack w="50%">
			<Box mb={5}>
				<BreadCrumb onClick={goBack} />
			</Box>
			<Heading>{post.title}</Heading>
			<Text>{post.content}</Text>
		</Stack>
	);
};

export default UserPost;
