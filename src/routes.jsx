import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment, Loader, Image } from 'semantic-ui-react';

const fallbackLoader = (
	<Segment>
		<Loader active />
		<Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
	</Segment>
);

const HomePage = lazy(() => import('@/views/HomePage.jsx'));
const PostDetails = lazy(() => import('@/views/PostDetails.jsx'));

function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Suspense fallback={fallbackLoader}>
						<HomePage />
					</Suspense>
				</Route>
				<Route path="/post/:id">
					<Suspense fallback={fallbackLoader}>
						<PostDetails />
					</Suspense>
				</Route>
			</Switch>
		</>
	);
}

export default Routes;
