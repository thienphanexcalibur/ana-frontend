import { ButtonGroup } from '@chakra-ui/button';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/modal';
import { chakra } from '@chakra-ui/system';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'reinspect';
import { GET_AUTH, SUBMIT_AUTH } from '../../actions';
import { AppContext } from '../../context';

const LoginModalContent = ({ switchSignup }) => {
	const { dispatch } = useContext(AppContext);
	const { handleSubmit, register } = useForm();
	const onSubmit = (data) => {
		dispatch(GET_AUTH(data));
	};
	return (
		<>
			<ModalHeader>Login</ModalHeader>
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

						<Button size="sm" mt={3} variant="link" onClick={switchSignup}>
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

const SignupModalContent = () => {
	const { dispatch } = useContext(AppContext);

	const { handleSubmit, register } = useForm();

	const onSubmit = (data) => {
		dispatch(SUBMIT_AUTH(data));
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
					<Button variant="solid" onClick={handleSubmit(onSubmit)}>
						Create Account
					</Button>
				</ButtonGroup>
			</ModalFooter>
		</>
	);
};

export default function ModalLogin({ isOpen, onClose }) {
	const [isCreateAccount, setIsCreateAccount] = useState(false);

	const onModalClose = () => {
		setIsCreateAccount(false);
		onClose();
	};

	return (
		<Modal isOpen={isOpen} isCentered onClose={onModalClose} motionPreset="none">
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				{!isCreateAccount ? (
					<LoginModalContent
						switchSignup={() => {
							setIsCreateAccount(true);
						}}
					/>
				) : (
					<SignupModalContent />
				)}
			</ModalContent>
		</Modal>
	);
}
