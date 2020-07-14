import { useState } from 'react';
import {
	Button, Comment, Form, Header
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { CommentPropTypes, PostPropTypes } from '@/proptypes';
import { addComment } from '@/store/actions';
import propTypes from 'prop-types';
import UserComment from './UserComment';

const UserComments = ({ comments = [] }) => comments.map((_comment) => {
	const {
		post,
		comment,
		byUser,
		liked,
		disliked,
		_id,
	} = _comment;
	return (
		<UserComment
			key={_id}
			post={post}
			comment={comment}
			byUser={byUser}
			liked={liked}
			disliked={disliked}
		/>
	);
});
UserComments.propTypes = {
	comments: propTypes.oneOfType([propTypes.arrayOf(CommentPropTypes), propTypes.array])
};

function CommentSection(props) {
	const [commentString, setCommentString] = useState('');
	const {
		postDetails: {
			_id,
			comments = [],
			byUser
		},
		_addComment
	} = props;

	function _handleOnChangeTextArea(e) {
		setCommentString(e.target.value);
	}

	function _handleAddReply({ userID, content, postID }) {
		_addComment({ userID, content, postID });
	}

	return (
		<Comment.Group>
			<Header as="h3" dividing>
				Comments
			</Header>

			<UserComments comments={comments} />

			<Form reply>
				<Form.TextArea onChange={_handleOnChangeTextArea} value={commentString} placeholder="Share your thoughts here" />
				<Button
					onClick={() => _handleAddReply({ userID: byUser, content: commentString, postID: _id })}
					content="Add Reply"
					labelPosition="left"
					icon="edit"
					primary
				/>
			</Form>
		</Comment.Group>
	);
}

CommentSection.propTypes = {
	postDetails: PostPropTypes,
	_addComment: propTypes.func
};

const mapStateToProps = (state) => ({
	postDetails: state.postDetails
});

const mapActionsToProps = (dispatch) => ({
	_addComment: ({ userID, content, postID }) => dispatch(addComment({ userID, content, postID }))
});

export default connect(mapStateToProps, mapActionsToProps)(CommentSection);
