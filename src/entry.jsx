import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';
import { StateInspector } from 'reinspect';
import Provider from './context';
import Main from './Main';

const DebugWrapper = ({ children }) =>
	process.env.NODE_ENV === 'production' ? (
		children
	) : (
		<StateInspector name="App">{children}</StateInspector>
	);

const App = () => (
	<ChakraProvider>
		<DebugWrapper>
			<Provider>
				<Main />
			</Provider>
		</DebugWrapper>
	</ChakraProvider>
);

render(<App />, document.querySelector('#root'));



