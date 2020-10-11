import React from 'react';
import { Route } from 'react-router-dom';

import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PostViewPage from './pages/PostViewPage';
import PostWritePage from './pages/PostWritePage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={["/@:username","/"]}></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={SignUpPage} path="/signup"></Route>
      <Route component={PostViewPage} path="/@:username/:postId"></Route>
      <Route component={PostWritePage} path="/write"></Route>
    </>
  );
};

export default App;