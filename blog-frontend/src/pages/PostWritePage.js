import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostWritePage = () => {
	return (
		<>
			<HeaderContainer />
			<Responsive>
				<EditorContainer />
				<TagBoxContainer />
				<WriteActionButtonContainer />
			</Responsive>
		</>
	);
};

export default PostWritePage;
