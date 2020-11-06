import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import { useEffect } from 'react';
import {VscFoldUp, VscFoldDown} from 'react-icons/vsc';
import cn from 'classnames';
import Button from '../common/Button';

const AboutMyLogBlock = styled.div`
    height: 100vh;
    overflow:hidden;
`;


const Page = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    transition: 2.5s;

    @media (max-width:768px){
        display:block;
    }
`;

const PageStyle = css`
    width:50%;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    padding: 0 10px;
    
    @media (max-width:768px){
        width:100%;
        height:50%;
        justify-content: center;
        padding: 10px 0;
    }
`;

const LeftPage = styled.div`
    ${PageStyle}
    justify-content: flex-end;
    background-color:white;

    @media (max-width:768px){
        align-items: flex-end;
    }
`;

const RightPage = styled.div`
    ${PageStyle}
    background-color:#045FB4;
    color:white;

    @media (max-width:768px){
        align-items: flex-start;

        .content{
            width:100%;
            a{
                margin:0 auto;
            }
        }

        .content_text{
            text-align:center;
            font-size:25px;
            margin-bottom:10px;
        }
    }
`;

const GoToStartBtn = styled(Button)`
    background:#0B173B;
    color:white;
    width: 150px;
    margin-top: 10px;
    &:hover{
        background:#0B2161;
    }
`;

const FoldStyle = css`
    position: absolute;
    transition:1s;
    width: 100%;
    font-size: 45px;
    color: #D7D7D7;
    
    path{
        transform: scaleX(1.1);
    }

    &.hide{
        display:none;
    }
`;

const FoldUp = styled(VscFoldUp)`
    ${FoldStyle}
    top: 13%;
    &:hover{
        top: 10%;
    }
`;

const FoldDown = styled(VscFoldDown)`
    ${FoldStyle}
    top: 90%;
    &:hover{
        top: 93%;
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
        
        if(movePage===-100){
            setCheckDown(true);
        }else{
            setCheckDown(false);
        }
    },[movePage]);

    const changeState =()=>{
        targetNum===0?setTargetNum(targetNum+1):setTargetNum(targetNum-1);
    };

    const movePageUp = () =>{
        setmovePage(movePage+100);
    };

    const movePageDown = () =>{
        setmovePage(movePage-100);
    };

    return (
        <AboutMyLogBlock>
            <Page style={{marginTop:`${movePage}vh`}}>
                <LeftPage>
                    [{dateTextArr[targetNum]}]의 당신을
                </LeftPage>
                <RightPage>
                    [{verbTextArr[targetNum]}]하세요
                </RightPage>
            </Page>
            <Page>
                <LeftPage>
                    My.Log란?
                </LeftPage>
                <RightPage>
                    <div className="content">
                        <div className="content_text">오늘의 하루를 기록할 수 있는<br/>블로그형 웹 사이트 입니다.</div>
                        <GoToStartBtn to="/login">바로 시작하기</GoToStartBtn>
                    </div>
                </RightPage>
            </Page>
            <FoldUp className={cn({hide:checkUp})} onClick={movePageUp}/>
            <FoldDown className={cn({hide:checkDown})} onClick={movePageDown}/>
        </AboutMyLogBlock>
    );
};

export default AboutMyLog;