import * as React from 'react';
import { Container } from 'semantic-ui-react';
import NavigationBar from '@components/Navigation.jsx';
import HomePage from '@components/HomePage.jsx';
import req from '@utils/request.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Container>
              <NavigationBar/>
              <HomePage/>
          </Container>
        );
    }
}