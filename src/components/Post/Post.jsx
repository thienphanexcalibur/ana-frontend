import { Feed, Icon, Header } from 'semantic-ui-react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { PostPropTypes } from '@/proptypes';
import styles from './post.styl';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

function Post(props) {
	const {
		title,
		content,
		byUser,
		liked,
		// eslint-disable-next-line camelcase
		updated_date,
		_id
	} = props;

	function getDurationFrom(date) {
		return `${dayjs().from(dayjs(date), true)} ago`;
	}

	function getLikesText(likes) {
		return `${likes} Likes`;
	}

	function _handlePostClick(id, _push, e) {
		e.stopPropagation();
		_push(`/post/${id}`);
	}

	return (
		<Feed.Event className={styles.post} onClick={_handlePostClick.bind(null, _id, props.push)}>
			<Feed.Label>
				<img alt={byUser.username} src={`https://robohash.org/${byUser._id}`} />
			</Feed.Label>
			<Feed.Content>

				<Feed.Summary>
					<Feed.User>
						{byUser.fullname || byUser.username}
					</Feed.User>
					<Feed.Date content={getDurationFrom(updated_date)} />
				</Feed.Summary>
				<Feed.Extra className={styles.post__extra}>
					<Header as="h4" content={title} />
					{content}
				</Feed.Extra>
				<Feed.Meta>
					<Feed.Like>
						<Icon name="like" />
						{getLikesText(liked)}
					</Feed.Like>
				</Feed.Meta>
			</Feed.Content>
		</Feed.Event>

	);
}

Post.propTypes = PostPropTypes;

const mapActionsToProps = (dispatch) => ({
	push: (path) => dispatch(push(path))
});

export default connect(null, mapActionsToProps)(Post);
