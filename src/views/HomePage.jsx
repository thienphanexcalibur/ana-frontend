import { Component } from 'react';
import { Header, Segment, Container } from 'semantic-ui-react';
import { getAllPosts } from '@/store/actions';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import PostContainer from '@/components/Post/PostContainer';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false
		};
	}

	componentDidMount() {
		this.props.getAllPosts();
	}

	componentDidCatch(e) {
		this.setState({ error: true });
		console.log(e);
	}

	render() {
		const { error } = this.state;
		return (
			<Container>
				{!error
					? <PostContainer />
					: <div>Error</div>}
			</Container>
		);
	}
}

HomePage.propTypes = {
	getAllPosts: propTypes.func
};

const mapStateToProps = (state) => ({
	posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
	getAllPosts: () => dispatch(getAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
