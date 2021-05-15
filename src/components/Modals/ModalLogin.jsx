import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal";
import { chakra } from "@chakra-ui/system";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {SUBMIT_AUTH} from "../../actions";
import { AppContext } from "../../context";

export default function ModalLogin({ isOpen, onClose }) {
	const { handleSubmit, register } = useForm();
	const { dispatch } = useContext(AppContext);

	const onSubmit = (data) => {
		dispatch(SUBMIT_AUTH(data));
	};

	return (
		<Modal isOpen={isOpen} isCentered onClose={onClose} motionPreset="none">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create an account</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<chakra.form onSubmit={handleSubmit(onSubmit)}>
						<Input
							{...register("username", { required: true })}
							type="text"
							placeholder="Your username"
						/>
						<Input
							{...register("password", { required: true })}
							type="password"
							placeholder="Your password"
						/>
						<Input type="submit" hidden />
					</chakra.form>
				</ModalBody>

				<ModalFooter>
					<Button mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant="ghost" onClick={handleSubmit(onSubmit)}>
						Login
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
