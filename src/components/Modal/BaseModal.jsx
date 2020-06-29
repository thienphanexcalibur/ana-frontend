import { Modal } from 'semantic-ui-react';
import propTypes from 'prop-types';
import React from 'react';

export default function BaseModal(props) {
	const { header, content, trigger } = props;
	return (
		<Modal trigger={trigger}>
			{header && (
				<Modal.Header>
					{header}
				</Modal.Header>
			)}
			<Modal.Content>
				{content}
			</Modal.Content>
		</Modal>
	);
}

BaseModal.propTypes = {
	header: propTypes.element,
	content: propTypes.element,
	trigger: propTypes.element
};
