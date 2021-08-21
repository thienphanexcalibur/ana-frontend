import { Box, Button, Stack, StackItem, AvatarGroup, Avatar, Text } from '@chakra-ui/react';
import { memo, useCallback, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { GET_WALL_POSTS, LOGOUT, TOGGLE_MODAL } from '@/actions';
import { AppContext } from '@/context';
import { MODAL_LOGIN } from '@/components/Modals/constants';

const { STATIC_PATH } = process.env;

const AuthActions = () => {
	const { state, dispatch } = useContext(AppContext);

	const logout = () => {
		dispatch(LOGOUT());
	};

	const openModalLogin = useCallback(() => {
		dispatch(
			TOGGLE_MODAL({
				type: MODAL_LOGIN,
				value: true
			})
		);
	}, [dispatch]);

	return (
		<Box>
			{isEmpty(state.auth.data) ? (
				<Button
					onClick={openModalLogin}
					size="md"
					bg="black"
					color="white"
					_hover={{
						colorScheme: 'blackAlpha'
					}}
					w={100}
				>
					Login
				</Button>
			) : (
				<Button onClick={logout}>Logout</Button>
			)}
		</Box>
	);
};

export default memo(() => {
	const { state } = useContext(AppContext);
	const { pathname } = useLocation();

	return (
		<Stack direction="column" spacing={10} w={400} position="sticky" top={0}>
			<StackItem direction="column">
				<AvatarGroup spacing={5}>
					<Avatar src={`${STATIC_PATH}${state.auth?.data?.avatar}`} />
					<Text fontSize="sm" as="h3">
						{state.auth?.data?.username}
					</Text>
				</AvatarGroup>
			</StackItem>

			<StackItem>
				<Text fontSize="md" mb={3} fontWeight="bold" colorScheme="gray">
					Section
				</Text>
				<Stack>
					<Text
						as={Link}
						to="/wall"
						fontWeight={pathname === '/wall' ? 'bold' : 'normal'}
						fontSize="sm"
					>
						Walls
					</Text>
					<Text fontSize="sm">Settings</Text>
				</Stack>
			</StackItem>
			<StackItem>
				<AuthActions />
			</StackItem>
		</Stack>
	);
});
