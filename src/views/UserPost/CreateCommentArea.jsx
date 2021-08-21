import { Avatar } from '@chakra-ui/avatar';
import { Input } from '@chakra-ui/input';
import { Box, HStack, Stack, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { memo, useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ADD_COMMENT } from '@/actions';
import { AppContext } from '@/context';

export default memo(({ postId, onCommentCreated }) => {
	const { state, dispatch } = useContext(AppContext);

	const inputRef = useRef(null);

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	const submit = async ({ comment }) => {
		await dispatch(
			ADD_COMMENT({
				comment,
				post: postId,
				byUser: state.auth._id
			})
		);
		onCommentCreated();
	};

	return (
		<Box>
			<HStack alignContent="center" flexShrink={0}>
				<Avatar name={state.auth.username} />
				<Stack justifyContent="center" spacing={5} w="100%">
					<Text as="sub" fontWeight="semibold">
						Send as {state.auth.username}
					</Text>
					<chakra.form onSubmit={handleSubmit(submit)}>
						<Input
							variant="filled"
							w="100%"
							ref={inputRef}
							{...register('comment', {
								required: true
							})}
							isInvalid={Object.keys(errors).length > 0}
						/>
						<chakra.input type="submit" hidden />
					</chakra.form>
				</Stack>
			</HStack>
		</Box>
	);
});
