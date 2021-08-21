import { HStack } from '@chakra-ui/layout';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { GET_AUTH } from './actions';
import Modals from './components/Modals';
import { AppContext } from './context';
import Routes from './routes';
import Navigation from './views/Navigation';

const Main = () => {
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		dispatch(GET_AUTH());
	}, []);

	return (
		<Router>
			<HStack maxW="100%" p={10} alignItems="start">
				<Navigation />
				<Switch>
					<Routes />
				</Switch>
				<Modals />
			</HStack>
		</Router>
	);
};

export default Main;
