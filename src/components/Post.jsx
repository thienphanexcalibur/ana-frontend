import { useColorModeValue } from '@chakra-ui/color-mode';
import { Text, VStack } from '@chakra-ui/layout';
import React, { memo, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import throttle from 'lodash/throttle';
import isEmpty from 'lodash/isEmpty';
import Interactions from './Interactions';

import { AppContext } from '@/context';
import { INTERACT, TOGGLE_MODAL } from '@/actions';
import { MODAL_LOGIN } from './Modals/constants';

// Sample card from Airbnb

export default memo(({ title, content, liked, disliked, _id }) => {
	const { state, dispatch } = useContext(AppContext);
	const history = useHistory();

	const postId = _id;

	const isAuth = !isEmpty(state.auth);

	const goToPostDetails = useCallback(() => {
		history.push(`/post/${postId}`);
	}, [history, postId]);

	const onLikeDislikeClick = useCallback(
		throttle(
			({ liked, disliked }) => {
				if (!isAuth) {
					dispatch(
						TOGGLE_MODAL({
							type: MODAL_LOGIN,
							value: true
						})
					);
				}
				dispatch(INTERACT({ id: postId, liked, disliked }));
			},
			1500,
			{
				leading: !isAuth,
				trailing: isAuth
			}
		),
		[isAuth]
	);

	return (
		<VStack
			w={450}
			justifyContent="center"
			align="start"
			border="1px"
			borderColor="gray.200"
			p={5}
			onClick={goToPostDetails}
		>
			<Text noOfLines={3} fontWeight="semibold" fontSize="xl" lineHeight="tall">
				{title}
			</Text>

			<Text noOfLines={3} fontWeight="normal" color={useColorModeValue('gray.500')}>
				{content}
			</Text>

			<Interactions
				onLikeDislikeClick={onLikeDislikeClick}
				data={{
					liked,
					disliked
				}}
			/>
		</VStack>
	);
});
