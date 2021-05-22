import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Wall from '../views/Wall';
import UserPost from '../views/UserPost';

const Routes = () => (
	<>
		<Route path="/" exact>
			<Redirect to="/wall" />
		</Route>
		<Route path="/wall" exact>
			<Wall />
		</Route>
		<Route path="/post/:id">
			<UserPost />
		</Route>
	</>
);

export default Routes;
