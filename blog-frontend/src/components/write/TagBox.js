import React,{useState} from 'react';
import styled from 'styled-components';
import { useCallback } from 'react';

const TagBoxBlock = styled.div`
    
`;

const TagForm = styled.form`
    width: 220px;
    display: flex;
    border:1px solid #045FB4;
    border-radius:4px;
    overflow:hidden;

    button{
        border: none;
        background-color: #045FB4;
        color: white;
        padding:5px 15px;
        font-weight:bold;
    }

    button:hover{
        background-color: #0174DF;
    }
`;

const TagBoxInput = styled.input`
    border:none;
    outline:none;
    padding: 9px;
    flex: 1;
`;

const TagList = styled.div`
    padding:10px 0;
    display: flex;
`;

const TagListItem = styled.div`
    color:#848484;
    padding:0 5px;

    &:hover{
        color:#424242;
    }
`;

const TagBox = () => {
    const [input,setInput] = useState('');
    const [localTags,setLocalTags] = useState([]);

    const insertTag = tag =>{
        if(!tag) return;
        if(localTags.includes(tag)) return;
        setLocalTags([...localTags,tag]);
    }

    const onChange = useCallback(e=>{
        setInput(e.target.value);
    },[])

    const onSubmit = e =>{
        e.preventDefault();
        insertTag(input.trim());
        setInput('');
    }

    const onRemove = target =>{
        setLocalTags(localTags.filter(tag=>target!==tag));
    }

    return (
        <TagBoxBlock>
            <TagForm onSubmit={onSubmit}>
                <TagBoxInput
                    type="text"
                    value={input}
                    placeholder="태그를 입력하세요"
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </TagForm>
           <TagList>
                {
                    localTags.map(tag=>
                        <TagListItem key={tag} onClick={()=>onRemove(tag)}>#{tag}</TagListItem>
                    )
                }
           </TagList>
        </TagBoxBlock>
    );
};

export default TagBox;