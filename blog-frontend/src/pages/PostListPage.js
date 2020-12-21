import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import PostListContainer from '../containers/list/PostListContainer';
import PaginationContainer from '../containers/list/PaginationContainer';

const PostListPage = () => {
	return (
		<>
			<HeaderContainer />
			<Responsive>
				<PostListContainer />
				<PaginationContainer />
			</Responsive>
		</>
	);
};

export default PostListPage;
