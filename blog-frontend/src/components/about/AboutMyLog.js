import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import { useEffect } from 'react';
import {VscFoldDown, VscFoldUp} from 'react-icons/vsc';
import cn from 'classnames';
import Button from '../common/Button';

const AboutMyLogBlock = styled.div`
    height: 809px;
    overflow:hidden;
`;

const PageBlock = styled.div`
    display:flex;
    transition: 2.5s;
    line-height: 700px;
`;

const Page = styled.div`
    width: 50%;
    height: 810px;
    font-size:45px;
    font-weight:bold;
    font-family:MalgunGothic;
    padding:0 15px;
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
    
    .title{
        font-size:35px;
    }

    .content{
        font-size:35px;
        line-height: 1.4;
        padding-top: 300px;
    }
`;

const FoldDown = styled(VscFoldDown)`
    position: absolute;
    top: 90%;
    left: 48.8%;
    font-size: 45px;
    color: #D7D7D7;
    transform: scaleX(1.8);
    transition:1s;
    z-index:1;

    &:hover{
        top: 93%;
    }

    &.hide{
        display:none;
    }
`;

const FoldUp = styled(VscFoldUp)`
    position: absolute;
    top: 13%;
    left: 48.8%;
    font-size: 45px;
    color: #D7D7D7;
    transform: scaleX(1.8);
    transition:1s;
    z-index:1;

    &:hover{
        top: 10%;
    }

    &.hide{
        display:none;
    }
`;

const AboutMyLog = () => {
    const dateTextArr = ["오늘","어제"];
    const verbTextArr = ["기록","추억"];
    const [targetNum,setTargetNum] = useState(0);
    const [movePage,setmovePage] = useState(0);
    const [checkUp,setCheckUp] = useState(true);
    const [checkDown,setCheckDown] = useState(false);

    useEffect(()=>{
        const timerID = setInterval(()=>{
            changeState();
        },2000);
        
        return(()=>{
            clearInterval(timerID);
        });
    });

    useEffect(()=>{
        if(movePage===0){
            setCheckUp(true);
        }else{
            setCheckUp(false);
        }

        if(movePage===-810){
            setCheckDown(true);
        }else{
            setCheckDown(false);
        }
    },[movePage,checkUp,checkDown]);

    const changeState =()=>{
        targetNum===0?setTargetNum(targetNum+1):setTargetNum(targetNum-1);
    };

    const movePageDown = () =>{
        setmovePage(movePage-810);
    };

    const movePageUp = () =>{
        setmovePage(movePage+810);
    };

    return (
        <AboutMyLogBlock>
            <PageBlock style={{marginTop:`${movePage}px`}}>
                <Page className="left" background="#ffffff">[{dateTextArr[targetNum]}]의 당신을</Page>
                <Page className="right" background="#045FB4">[{verbTextArr[targetNum]}]하세요</Page>
            </PageBlock>
            <PageBlock>
                <Page className="left" background="#ffffff">
                    <h1 className="title">My.Log란?</h1>
                </Page>
                <Page className="right" background="#045FB4">
                    <h1 className="content">오늘의 하루를 기록할 수 있는<br/>블로그형 웹 사이트 입니다.</h1>
                    <Button color2 width="130px" to="/login">바로 시작하기</Button>
                </Page>
            </PageBlock>
            <FoldUp className={cn({hide:checkUp})} onClick={movePageUp}/>
            <FoldDown className={cn({hide:checkDown})} onClick={movePageDown}/>
        </AboutMyLogBlock>
    );
};

export default AboutMyLog;