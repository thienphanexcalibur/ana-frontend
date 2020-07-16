import {
	Container, Divider
} from 'semantic-ui-react';
import { Component } from 'react';
import { getAuth } from '@/store/actions.js';
import {createType as _} from '@/store/actionsType';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationBar from '@components/Navigation.jsx';
import Routes from './routes';

const mapDispatchToProps = (dispatch) => ({
	getAuth: () => dispatch(getAuth())
});

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(_('GET_AUTH'));
	}

	render() {
		return (
			<Container fluid>
				<NavigationBar />
				<Routes />
			</Container>
		);
	}
}

App.propTypes = {
	getAuth: PropTypes.func
};

export default connect()(App);
