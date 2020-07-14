import propTypes from 'prop-types';
import { UserPropTypes, CommentPropTypes } from '@/proptypes';

export const PostPropTypes = propTypes.shape({
	_id: propTypes.string,
	title: propTypes.string,
	content: propTypes.string,
	liked: propTypes.number,
	byUser: propTypes.oneOfType([UserPropTypes, propTypes.string]),
	comments: propTypes.oneOfType([propTypes.arrayOf(CommentPropTypes), propTypes.array]),
	updated_date: propTypes.string,
	created_date: propTypes.string
});
