import * as React from 'react';
import { Menu, Image, Loader } from 'semantic-ui-react';

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

const MenuItem = () => menu.map(item => <Menu.Item key={item.key}>{item.name}</Menu.Item>);

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        return (
            <Menu>
                <MenuItem/>
                <Menu.Menu position="right">
                    {user ?
                        <Menu.Item>
                            <span>Hi, {user.username}!</span>
                            <Image 
                                avatar={true} 
                                size="mini"
                                src={`https://robohash.org/${user._id}.png`}
                            />
                        </Menu.Item>
                        : <Loader active inline/> }
                </Menu.Menu>
            </Menu>
        );
    }
}
