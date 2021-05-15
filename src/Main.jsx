import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
	Box,
	Container,
	Flex,
	Stack,
	StackItem,
	Text,
} from "@chakra-ui/layout";
import isEmpty from "lodash/isEmpty";
import React, { useContext, useEffect } from "react";
import { GET_AUTH, GET_POSTS, LOGOUT } from "./actions";
import ErrorBoundary from "./components/ErrorBoundary";
import ModalLogin from "./components/Modals/ModalLogin";
import Post from "./components/Post";
import { AppContext } from "./context";

const Posts = ({ posts }) => (
	<Stack w="50%">
		{posts.map((post) => (
			<StackItem key={post._id}>
				<Post {...post} />
			</StackItem>
		))}
	</Stack>
);

const RightSide = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { state, dispatch } = useContext(AppContext);

	const logout = () => {
		dispatch(LOGOUT());
	};

	return (
		<Box>
			{isEmpty(state.auth) ? (
				<>
					<Button onClick={onOpen}>Got an account?</Button>
					<ModalLogin isOpen={isOpen} onClose={onClose} />
				</>
			) : (
				<Button onClick={logout}>Logout</Button>
			)}
		</Box>
	);
};

const Main = () => {
	const { state, dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch(GET_AUTH());
		dispatch(GET_POSTS());
	}, []);

	useEffect(() => {
		console.log(state.auth);
	}, [state]);

	return (
		<Container maxW="100%" p={10}>
			<Flex justifyContent="space-evenly">
				<Stack direction="column" spacing={10}>
					<StackItem direction="column">
						<AvatarGroup spacing={5}>
							<Avatar name="Thien Phan" />
							<Text fontSize="sm">{state.auth?.username}</Text>
						</AvatarGroup>
					</StackItem>

					<StackItem>
						<Text fontSize="sm" mb={3} fontWeight="bold" colorScheme="gray">
							Menu
						</Text>
						<Stack>
							<Text fontSize="xs">Walls</Text>
							<Text fontSize="xs">Settings</Text>
						</Stack>
					</StackItem>
				</Stack>

				<ErrorBoundary>
					<Posts posts={state.posts} />
				</ErrorBoundary>
				<Stack justifyContent="flex-start">
					<RightSide />
				</Stack>
			</Flex>
		</Container>
	);
};

export default Main;
