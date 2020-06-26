import { Container } from 'semantic-ui-react';
import NavigationBar from '@components/Navigation.jsx';
import HomePage from '@components/HomePage.jsx';
import { Component } from 'react';
import { getAuth } from '@/store/actions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = (dispatch) => ({
	getAuth: () => dispatch(getAuth())
});

const mapStateToProps = (state) => ({
	auth: state.auth
});

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getAuth();
	}

	render() {
		const { auth } = this.props;
		return (
			<Container>
				<NavigationBar user={auth} />
				<HomePage />
			</Container>
		);
	}
}

App.propTypes = {
	auth: PropTypes.shape({}),
	getAuth: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
