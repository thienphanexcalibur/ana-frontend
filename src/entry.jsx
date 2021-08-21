import { ChakraProvider } from '@chakra-ui/react';
import { render } from 'react-dom';
import { StateInspector } from 'reinspect';
import { hot } from 'react-hot-loader/root';
import Provider from './context';
import Main from './Main';

const DebugWrapper = ({ children }) =>
	process.env.NODE_ENV === 'production' ? (
		children
	) : (
		<StateInspector name="App">{children}</StateInspector>
	);

const App = hot(() => (
	<ChakraProvider>
		<DebugWrapper>
			<Provider>
				<Main />
			</Provider>
		</DebugWrapper>
	</ChakraProvider>
));

render(<App />, document.querySelector('#root'));
