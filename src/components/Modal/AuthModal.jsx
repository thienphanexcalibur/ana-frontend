import { Button, Form, Segment } from 'semantic-ui-react';
import { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitAuth as submitAuthAction } from '@/store/actions.js';
import BaseModal from './BaseModal.jsx';

const Content = (props) => {
	const { submitAuth } = props;
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function _handleOnChangeUsername(e) {
		setUsername(e.target.value);
	}

	function _handleOnChangePassword(e) {
		setPassword(e.target.value);
	}

	function _submitAuth(...args) {
		submitAuth(...args);
	}

	return (
		<Segment.Group horizontal>
			<Segment basic>
				asdasdasd
			</Segment>
			<Segment basic>
				<Form>
					<Form.Field>
						<label>Username</label>
						<input
							onChange={_handleOnChangeUsername}
							value={username}
							placeholder="Your user name"
						/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input
							onChange={_handleOnChangePassword}
							value={password}
							type="password"
							placeholder="Prefer 8-10 characters"
						/>
					</Form.Field>
					<Button onClick={() => _submitAuth({ username, password })} primary>Login</Button>
				</Form>
			</Segment>
		</Segment.Group>
	);
};

Content.propTypes = {
	submitAuth: propTypes.func
};

const trigger = <Button content="Login" primary />;

function AuthModal(props) {
	return (
		<BaseModal
			content={<Content submitAuth={props.submitAuth} />}
			trigger={trigger}
		/>
	);
}

AuthModal.propTypes = {
	submitAuth: propTypes.func
};

const mapDispatchToProps = (dispatch) => ({
	submitAuth: ({ username, password }) => dispatch(submitAuthAction({ username, password }))
});

export default connect(null, mapDispatchToProps)(AuthModal);
