import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Input,
	Button,
	ModalFooter,
	Text,
	chakra,
	Textarea
} from '@chakra-ui/react';
import { memo, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEdit } from 'react-icons/ai';
import { AppContext } from '@/context';
import { ADD_POST } from '@/actions';

export default memo(({ isOpen, onClose }) => {
	const { state, dispatch } = useContext(AppContext);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

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
		<Modal isOpen={isOpen} onClose={onClose} size="4xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Write a post</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<chakra.section>
						<Text colorScheme="gray" fontWeight="bold" mb={3} fontSize="xs">
							Title:
						</Text>
						<Input {...register('title', { required: true })} variant="filled" />
					</chakra.section>

					<chakra.section mt={5}>
						<Text colorScheme="gray" fontWeight="bold" mb={3} fontSize="xs">
							Your exciting thoughts:
						</Text>
						<Textarea
							{...register('content', { required: true })}
							size="sm"
							placeholder="Your nice ideas"
							variant="outline"
						/>
					</chakra.section>
				</ModalBody>

				<ModalFooter>
					<Button
						variant="solid"
						onClick={handleSubmit(submit)}
						colorScheme="blue"
						disabled={Object.keys(errors).length > 0}
						leftIcon={<AiOutlineEdit />}
					>
						Post
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
});
