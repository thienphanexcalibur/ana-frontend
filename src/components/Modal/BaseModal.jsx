import { Modal } from 'semantic-ui-react';
import propTypes from 'prop-types';
import React from 'react';

export default function BaseModal(props) {
	const {
		header,
		content,
		trigger,
		actions,
		closeIcon,
		className
	} = props;
	return (
		<Modal
			className={className}
			trigger={trigger}
			closeIcon={closeIcon}
		>
			{header
				&& (
					<Modal.Header>
						{header}
					</Modal.Header>
				)}
			{content
				&& (
					<Modal.Content>
						{content}
					</Modal.Content>
				)}
			{actions
				&& (
					<Modal.Actions>
						{actions}
					</Modal.Actions>
				)}
		</Modal>
	);
}

BaseModal.propTypes = {
	header: propTypes.element,
	content: propTypes.element,
	trigger: propTypes.element,
	actions: propTypes.element,
	className: propTypes.string,
	closeIcon: propTypes.bool
};
