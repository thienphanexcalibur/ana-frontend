import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Wall from '@/views/Wall';
import UserPost from '@/views/UserPost';

const Routes = () => (
	<>
		<Route path="/" exact>
			<Redirect to="/wall" />
		</Route>
		<Route path="/wall" render={() => <Wall />} />
		<Route path="/post/:id" render={() => <UserPost />} />
	</>
);

export default Routes;
