import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import TagBox from '../../components/write/TagBox';
import { changeField } from '../../modules/write';

const TagBoxContainer = () => {
    const dispatch =useDispatch();
    const tags = useSelector(({write})=>write.tags);

    const onChangeTags=newTags=>{
        dispatch(changeField({
            key:'tags',
            value:newTags,
        }));
    };

    return (
        <TagBox onChangeTags={onChangeTags} tags={tags}/>
    );
};

export default TagBoxContainer;