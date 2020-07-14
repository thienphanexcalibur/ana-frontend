import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';
import { getPostDetails } from '@/store/actions.js';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';
import { PostPropTypes } from '@/proptypes';
import CommentSection from '@/components/Comments/CommentSection.jsx';
import styles from '@/styles/postdetails.styl';

function PostDetail(props) {
	const { id } = useParams();
	const {
		postDetails: {
			title,
			content,
		}
	} = props;

	useEffect(() => {
		props.getPostDetails(id);
	}, [id]);

	return (
		<Container>
			<Header as="h2" content={title} />
			<p className={styles.paragraph}>{content}</p>
			<CommentSection />
		</Container>
	);
}

PostDetail.propTypes = {
	getPostDetails: propTypes.func,
	postDetails: PostPropTypes
};

const mapStateToProps = (state) => ({
	postDetails: state.postDetails
});

const mapActionsToProps = (dispatch) => ({
	getPostDetails: (id) => dispatch(getPostDetails(id))
});

export default connect(mapStateToProps, mapActionsToProps)(PostDetail);
