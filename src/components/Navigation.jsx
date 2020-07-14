import { Component } from 'react';
import AuthModal from '@components/Modal/AuthModal.jsx';
import CreatePostModal from '@components/Modal/CreatePostModal';
import {
	Menu, Image, Loader
} from 'semantic-ui-react';
import propTypes from 'prop-types';
import isEmpty from '@utils/isEmpty.js';
import { menu } from '@constants';
import { connect } from 'react-redux';
import { UserPropTypes } from '@/proptypes';

const LeftMenuItems = () => menu.top.map((item) => (
	<Menu.Item as="a" key={item.key}>
		{item.name}
	</Menu.Item>
));

const RightMenuItems = (props) => {
	const { loading, auth } = props;
	return (
		<Menu.Menu position="right">
			{!isEmpty(auth)
				? (
					<Menu.Item>
						<span>
							Hi,
							{auth?.username}
							!
						</span>
						<Image
							avatar
							size="mini"
							src={`https://robohash.org/${auth?._id}.png`}
						/>
						<CreatePostModal />
					</Menu.Item>
				)
				: <AuthModal />}
			<Loader active={loading} inline />
		</Menu.Menu>
	);
};

RightMenuItems.propTypes = {
	loading: propTypes.bool,
	auth: UserPropTypes
};

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			auth: {}
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.auth !== state.auth) {
			return {
				auth: props.auth,
				loading: false
			};
		}
	}

	render() {
		const { loading, auth } = this.state;

		return (
			<Menu
				borderless
				secondary
			>
				<LeftMenuItems />
				<RightMenuItems auth={auth} loading={loading} />
			</Menu>
		);
	}
}

Navigation.defaultProps = {
	auth: {}
};

Navigation.propTypes = {
	auth: UserPropTypes
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, null)(Navigation);
