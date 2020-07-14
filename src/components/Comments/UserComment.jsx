import { Comment } from 'semantic-ui-react';
import { CommentPropTypes } from '@/proptypes';

function UserComment(props) {
	const {
		byUser,
		comment,
		created_date,
		updated_date
	} = props;
	return (
		<Comment>
			<Comment.Avatar src={`https://robohash.org/${byUser}`} />
			<Comment.Content>
				<Comment.Author as="a" />
				<Comment.Metadata>
					{updated_date}
				</Comment.Metadata>
				<Comment.Text>{comment}</Comment.Text>
				{/* <Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions> */}
			</Comment.Content>
		</Comment>
	);
}

UserComment.propTypes = CommentPropTypes;

export default UserComment;
