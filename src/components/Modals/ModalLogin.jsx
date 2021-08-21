import { ButtonGroup, Button } from '@chakra-ui/button';

import { Input } from '@chakra-ui/input';
import { Stack, Text } from '@chakra-ui/layout';

import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/modal';
import { chakra, position } from '@chakra-ui/system';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GET_AUTH, SUBMIT_AUTH } from '@/actions';
import { AppContext } from '@/context';
import { useToast } from '@chakra-ui/toast';
import { MODAL_LOGIN } from './constants';

const LoginModalContent = ({ switchSignup, onModalClose }) => {
	const { dispatch } = useContext(AppContext);
	const { handleSubmit, register } = useForm();
	const toast = useToast();
	const onSubmit = async (payload) => {
		try {
			const { data } = await dispatch(GET_AUTH(payload));
			if (data) {
				toast({
					title: 'Authentication',
					description: 'Login success',
					status: 'success',
					position: 'top'
				});
				onModalClose();
			} else {
				toast({
					title: 'Authentication',
					description: 'Please check your username/password',
					status: 'warning',
					position: 'top'
				});
			}
		} catch (e) {
			toast({
				title: 'Authentication',
				description: 'Server Error',
				status: 'warning',
				position: 'top'
			});
		}
	};
	return (
		<>
			<ModalHeader>
				<Text fontSize="2xl">Login</Text>
			</ModalHeader>
			<ModalBody>
				<chakra.form onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={3} alignItems="flex-start">
						<Input
							{...register('username', { required: true })}
							type="text"
							placeholder="Your username"
						/>
						<Input
							{...register('password', { required: true })}
							type="password"
							placeholder="Your password"
						/>
						<Input type="submit" hidden />

						<Button size="sm" mt={5} variant="link" onClick={switchSignup}>
							Haven't got an account?
						</Button>
					</Stack>
				</chakra.form>
			</ModalBody>
			<ModalFooter>
				<Button variant="solid" colorScheme="twitter" onClick={handleSubmit(onSubmit)}>
					Login
				</Button>
			</ModalFooter>
		</>
	);
};

const SignupModalContent = ({ onModalClose }) => {
	const { dispatch } = useContext(AppContext);

	const toast = useToast();

	const { handleSubmit, register } = useForm();

	const onSubmit = async (data) => {
		try {
			await dispatch(SUBMIT_AUTH(data));
			toast({
				title: 'Authentication',
				description: 'Login Success',
				status: 'success',
				position: 'top'
			});
			onModalClose();
		} catch (e) {
			toast({
				title: 'Authentication',
				description: 'There are some problems. We are fixing it',
				status: 'error',
				position: 'top'
			});
		}
	};
	return (
		<>
			<ModalHeader>Create an account</ModalHeader>
			<ModalBody>
				<chakra.form onSubmit={handleSubmit(onSubmit)}>
					<Stack spacing={3} alignItems="flex-start">
						<Input
							{...register('username', { required: true })}
							type="text"
							placeholder="Your username"
						/>
						<Input
							{...register('password', { required: true })}
							type="password"
							placeholder="Your password"
						/>
						<Input type="submit" hidden />
					</Stack>
				</chakra.form>
			</ModalBody>

			<ModalFooter>
				<ButtonGroup>
					<Button variant="solid" colorScheme="blue" onClick={handleSubmit(onSubmit)}>
						Create Account
					</Button>
				</ButtonGroup>
			</ModalFooter>
		</>
	);
};

export default function ModalLogin({ isOpen, onClose }) {
	const [isCreateAccount, setIsCreateAccount] = useState(false);

	const { state } = useContext(AppContext);

	const onModalClose = () => {
		setIsCreateAccount(false);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onClose={onModalClose} size="xl" motionPreset="scale">
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				{!isCreateAccount ? (
					<LoginModalContent
						onModalClose={onModalClose}
						switchSignup={() => {
							setIsCreateAccount(true);
						}}
					/>
				) : (
					<SignupModalContent onModalClose={onModalClose} />
				)}
			</ModalContent>
		</Modal>
	);
}
