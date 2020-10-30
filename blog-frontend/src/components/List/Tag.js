import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TagBlock = styled.div`
    display:flex;
`;

const TagItem = styled(Link)`
    padding:10px 10px 0 0;
    color:#045FB4;
    &:hover{
        color: #0174DF;
    }
`;

const Tag = ({tags}) => {
    return (
        <TagBlock>
            {tags.map(tag=>(<TagItem key={tag} to={`/?tag=${tag}`}>#{tag}</TagItem>))}
        </TagBlock>
    );
};

export default Tag;