import React, { memo, useContext } from 'react';
import { Button } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useForm } from 'react-hook-form';
import { AppContext } from '$/context';
import { ADD_POST } from '$/actions';

export default memo(() => {
	const { state, dispatch } = useContext(AppContext);
	const { handleSubmit, register } = useForm();

	const submit = ({ title, content }) => {
		dispatch(
			ADD_POST({
				title,
				content,
				byUser: state.auth._id
			})
		);
	};

	return (
		<Box border="1px" borderColor="gray.200" rounded="base" p={3}>
			<Text colorScheme="gray" fontWeight="semibold" fontSize="xs">
				Title
			</Text>
			<Input {...register('title')} variant="filled" />
			<Input {...register('content')} variant="outline" />

			<Flex justifyContent="flex-end">
				<Button
					variant="solid"
					onClick={handleSubmit(submit)}
					colorScheme="blue"
					leftIcon={<AddIcon />}
				>
					Write
				</Button>
			</Flex>
		</Box>
	);
});
