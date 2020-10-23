import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButton from '../components/write/WriteActionButton';
import TagBoxContainer from '../containers/write/TagBoxContainer';

const PostWritePage = () => {

     

    return (
        <Responsive>
            <EditorContainer/>
            <TagBoxContainer/>
            <WriteActionButton/>
        </Responsive>
    );
};

export default PostWritePage;