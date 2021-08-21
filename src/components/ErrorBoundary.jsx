import { Text } from '@chakra-ui/layout';
import { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		};
	}

	componentDidCatch(e) {
		this.setState({
			error: {
				message: e.message
			}
		});
	}

	render() {
		const { error } = this.state;
		const { children } = this.props;
		return !error ? children : <Text color="red">{error.message}</Text>;
	}
}
