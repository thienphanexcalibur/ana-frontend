import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';
import { StateInspector } from 'reinspect';
import Provider from './context';
import Main from './Main';
import { hot } from 'react-hot-loader/root';

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
