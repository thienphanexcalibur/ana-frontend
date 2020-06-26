import { Modal } from 'semantic-ui-react';
import propTypes from 'prop-types';
import React from 'react';

export default function ModalBase(props) {
	const { header, content, trigger } = props;
	return (
		<Modal trigger={trigger}>
			<Modal.Header>
				{header}
			</Modal.Header>
			<Modal.Content>
				{content}
			</Modal.Content>
		</Modal>
	);
}

ModalBase.propTypes = {
	header: propTypes.element,
	content: propTypes.element,
	trigger: propTypes.element
};
