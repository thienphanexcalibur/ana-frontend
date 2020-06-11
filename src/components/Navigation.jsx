import * as React from 'react';
import { Menu } from 'semantic-ui-react';

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

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Menu items={menu}/>
        );
    }
}