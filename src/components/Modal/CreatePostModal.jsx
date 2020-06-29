import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import BaseModal from './BaseModal';

function CreatePostModal(props) {
	const trigger = <Button primary>Create Post</Button>;
	const content = <div>asdasdasd</div>;
	return (
		<BaseModal
			trigger={trigger}
			content={content}
		/>
	);
}

export default connect(null, null)(CreatePostModal);
