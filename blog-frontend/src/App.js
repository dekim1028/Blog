import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PostViewPage from './pages/PostViewPage';
import PostWritePage from './pages/PostWritePage';
import HomePage from './pages/HomePage';

const App = () => {
	return (
		<>
			<Route component={HomePage} path={['/@:username', '/']} exact />
			<Route component={LoginPage} path="/login" />
			<Route component={SignUpPage} path="/signup" />
			<Route component={PostViewPage} path="/@:username/:postId" />
			<Route component={PostWritePage} path="/write" />
		</>
	);
};

export default App;
