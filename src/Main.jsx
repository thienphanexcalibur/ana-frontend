import { Avatar, AvatarGroup } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Container, Flex, Stack, StackItem, Text } from '@chakra-ui/layout';
import isEmpty from 'lodash/isEmpty';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, useLocation } from 'react-router-dom';
import { GET_AUTH, LOGOUT } from './actions';
import ModalLogin from './components/Modals/ModalLogin';
import { AppContext } from './context';
import Routes from './routes';

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

const LeftSide = () => {
	const { state } = useContext(AppContext);
	const { pathname } = useLocation();

	return (
		<Stack direction="column" spacing={10}>
			<StackItem direction="column">
				<AvatarGroup spacing={5}>
					<Avatar name={state.auth?.username} />
					<Text fontSize="sm" as="h3">
						{state.auth?.username}
					</Text>
				</AvatarGroup>
			</StackItem>

			<StackItem>
				<Text fontSize="sm" mb={3} fontWeight="bold" colorScheme="gray">
					Section
				</Text>
				<Stack>
					<Text
						as={Link}
						to="/wall"
						fontWeight={pathname === '/wall' ? 'bold' : 'normal'}
						fontSize="xs"
					>
						Walls
					</Text>
					<Text fontSize="xs">Settings</Text>
				</Stack>
			</StackItem>
		</Stack>
	);
};

const Main = () => {
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch(GET_AUTH());
	}, []);

	return (
		<Router>
			<Switch>
				<Container maxW="100%" p={10}>
					<Flex justifyContent="space-evenly">
						<LeftSide />
						<Routes />
						<Stack justifyContent="flex-start">
							<RightSide />
						</Stack>
					</Flex>
				</Container>
			</Switch>
		</Router>
	);
};

export default Main;
