import * as React from 'react';
import {Container, Button, Menu} from 'semantic-ui-react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
            <Menu>
            <Menu.Item
              name='editorials'
            >
              Editorials
            </Menu.Item>

            <Menu.Item
              name='reviews'
            >
              Reviews
            </Menu.Item>

            <Menu.Item
              name='upcomingEvents'
            >
              Upcoming Events
            </Menu.Item>
          </Menu>
          </Container>
        )
    }
}