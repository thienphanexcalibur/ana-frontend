import { Feed } from 'semantic-ui-react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Post from './Post';

// eslint-disable-next-line react/jsx-props-no-spreading
const Posts = (props) => props.posts.map((post) => <Post key={post._id} {...post} />);
function PostContainer(props) {
	const { posts } = props;
	return (
		<Feed>
			<Posts posts={posts} />
		</Feed>
	);
}

PostContainer.propTypes = {
	posts: propTypes.arrayOf(propTypes.shape(Post.propTypes))
};

const mapStateToProps = (state) => (
	{
		posts: state.posts
	}
);

export default connect(mapStateToProps, null)(PostContainer);
