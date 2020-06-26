import { Component } from 'react';
import {
	Menu, Image, Loader, Button
} from 'semantic-ui-react';
import propTypes from 'prop-types';
import isEmpty from '@utils/isEmpty.js';

// Types

const UserPropTypes = propTypes.shape({
	username: propTypes.string,
	_id: propTypes.string,
	mobile: propTypes.string,
	email: propTypes.string,
	posts: propTypes.array,
});

const menu = [
	{
		key: 'home',
		active: true,
		name: 'Home'
	},
	{
		key: 'mypage',
		active: false,
		name: 'My Page'
	},
	{
		key: 'settings',
		active: false,
		name: 'Preferences'
	}
];

const LeftMenuItems = () => menu.map((item) => <Menu.Item key={item.key}>{item.name}</Menu.Item>);

const RightMenuItems = (props) => {
	const { loading, user } = props;
	return (
		<Menu.Menu position="right">
			{!isEmpty(user)
				? (
					<Menu.Item>
						<span>
							Hi,
							{user?.username}
							!
						</span>
						<Image
							avatar
							size="mini"
							src={`https://robohash.org/${user?._id}.png`}
						/>
					</Menu.Item>
				)
				: <Button primary>Login</Button> }
			<Loader active={loading} inline />
		</Menu.Menu>
	);
};

RightMenuItems.propTypes = {
	loading: propTypes.bool,
	user: UserPropTypes
};

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	shouldComponentUpdate(nextProps) {
		const { user } = this.props;
		if (nextProps.user !== user) {
			this.setState({ loading: false });
		}
		return true;
	}

	render() {
		const { user } = this.props;
		const { loading } = this.state;

		return (
			<Menu>
				<LeftMenuItems />
				<RightMenuItems user={user} loading={loading} />
			</Menu>
		);
	}
}

Navigation.propTypes = {
	user: UserPropTypes
};
