import propTypes from 'prop-types';
import { UserPropTypes } from '@/proptypes';

export const CommentPropTypes = propTypes.shape({
	_id: propTypes.string,
	comment: propTypes.string,
	byUser: propTypes.oneOfType([UserPropTypes.isRequired, propTypes.string]),
	updated_date: propTypes.string,
	created_date: propTypes.string,
	post: propTypes.string,
	liked: propTypes.number,
	disliked: propTypes.number
}).isRequired;
