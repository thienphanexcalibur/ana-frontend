import { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import req from '@utils/request.js';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const Post = (props) => {
	const {
		title,
		content,
		byUser
	} = props;
	return (
		<Segment>
			<Header>
				{title}
			</Header>
			<p>{content}</p>
			<p>{byUser?.fullname}</p>
		</Segment>
	);
};

Post.propTypes = {
	title: propTypes.string,
	content: propTypes.string,
	byUser: propTypes.shape({
		fullname: propTypes.string
	})
};

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			error: false
		};
	}

	componentDidMount() {
		req.get('/post').then(
			(res) => this.setState({ posts: res })
		);
	}

	componentDidCatch(e) {
		this.setState({ error: true });
		console.log(e);
	}

	render() {
		const { posts, error } = this.state;
		return (
			<>
				{!error ? posts.map((post) => (
					<Post
						key={post._id}
						title={post.title}
						content={post.content}
						byUser={post.byUser}
					/>
				)) : <div>Error</div>}
			</>
		);
	}
}

export default connect()(HomePage);
