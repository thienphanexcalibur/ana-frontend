import propTypes from 'prop-types';
import { PostPropTypes } from '@/proptypes';

export const UserPropTypes = propTypes.shape({
	_id: propTypes.string,
	username: propTypes.string,
	mobile: propTypes.string,
	email: propTypes.string,
	posts: propTypes.oneOfType([propTypes.arrayOf(PostPropTypes), propTypes.array])
});
