import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import { useEffect } from 'react';

const AboutMyLogBlock = styled.div`
    display:flex;
    height: 810px;
`;

const Page = styled.div`
    width: 50%;
    font-size:45px;
    font-weight:bold;
    font-family:MalgunGothic;
    padding:0 15px;
    line-height: 700px;
    ${props=>
        props.background&&
        css`
            background:${props.background};
        `
    }

    &.left{
        text-align: right;
    }
    &.right{
        color:white;
    }
`;

const AboutMyLog = () => {
    const dateTextArr = ["오늘","어제"];
    const verbTextArr = ["기록","추억"];
    const [targetNum,setTargetNum] = useState(0);

    useEffect(()=>{
        const timerID = setInterval(()=>{
            changeText();
        },2000);
        
        return(()=>{
            clearInterval(timerID);
        });
    });

    const changeText =()=>{
        targetNum===0?setTargetNum(targetNum+1):setTargetNum(targetNum-1);
        console.log(targetNum);
    };

    return (
        <AboutMyLogBlock>
            <Page className="left" background="#ffffff">[{dateTextArr[targetNum]}]의 당신을</Page>
            <Page className="right" background="#045FB4">[{verbTextArr[targetNum]}]하세요</Page>
        </AboutMyLogBlock>
    );
};

export default AboutMyLog;