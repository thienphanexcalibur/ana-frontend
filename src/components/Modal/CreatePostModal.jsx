import { connect } from 'react-redux';
import {
	Button, Input, Divider, Segment, Header, TextArea
} from 'semantic-ui-react';
import { addPost } from '@/store/actions.js';
import propTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import BaseModal from './BaseModal';
import styles from './createpostmodal.styl';

const Content = (props) => {
	const titleInputRef = useRef(null);
	const contentInputRef = useRef(null);
	const textAreaStyle = {
		width: '100%',
		outline: 'none',
		resize: 'none',
		border: 'none'
	};

	function _handleClickSubmit() {
		props.addPost({
			title: titleInputRef.current.inputRef.current.value,
			content: contentInputRef.current.ref.current.value,
			byUser: props.byUser
		});
	}

	useEffect(() => {
		titleInputRef.current.focus();
		console.log(titleInputRef, contentInputRef);
	}, []);

	return (
		<>
			<Header as="h4" content="TITLE:" color="grey" />
			<Input
				fluid
				transparent
				placeholder="Your post title goes here"
				ref={titleInputRef}
			/>
			<Divider />
			<Header as="h4" content="THOUGHTS:" color="grey" />
			<Segment>
				<TextArea
					rows={15}
					style={textAreaStyle}
					placeholder="Here goes your post content..."
					ref={contentInputRef}
				/>
			</Segment>
			<Button secondary content="Cancel" />
			<Button primary content="Post" onClick={_handleClickSubmit} />
		</>
	);
};

Content.propTypes = {
	byUser: propTypes.string,
	addPost: propTypes.func
};

function CreatePostModal(props) {
	// Trigger Component
	const trigger = <Button primary>Create Post</Button>;

	// Header Component
	const header = <Header as="h2"> Create a post </Header>;

	return (
		<BaseModal
			className={styles.createPostModal}
			closeIcon
			trigger={trigger}
			content={<Content addPost={props.addPost} byUser={props.byUser} />}
			header={header}
		/>
	);
}

CreatePostModal.propTypes = {
	addPost: propTypes.func,
	byUser: propTypes.string
};
const mapActionsToProps = (dispatch) => ({
	addPost: ({ title, content, byUser }) => dispatch(addPost({ title, content, byUser })),
});

const mapStateToProps = (state) => ({
	byUser: state.auth._id
});

export default connect(mapStateToProps, mapActionsToProps)(CreatePostModal);
