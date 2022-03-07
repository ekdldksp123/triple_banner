import styled from '@emotion/styled';
import React, { useState, useEffect } from "react";
import { PopularityProps } from "../types/props";
import { fadeIn } from "../styles/common";
import Awards from "./awards";
import { animateValue } from "../lib/counter";
import { keyframes } from '@emotion/react';

const Popularity:React.FC<PopularityProps> = ({ numberOfTravelers, numberOfReviews, numberOfSchedules }) => {
    
    const [travelers, setTravlers] = useState<number>(0);
    const [reviews, setReviews] = useState<number>(0);
    const [schedules, setSchedules] = useState<number>(0);

    useEffect(() => {
        if(window) {
            animateValue(setTravlers, travelers, numberOfTravelers, 2000);
            animateValue(setReviews, reviews, numberOfReviews, 2000);
            animateValue(setSchedules, schedules, numberOfSchedules, 2000);
        }
    },[]);
  
    return (
        <Container>
            <Item>
                <span>
                    {travelers}만 명
                </span>의 여행자
            </Item>
            <Item>
                <span>
                    {reviews}만 개
                </span>의 여행 리뷰
            </Item>
            <Item>
                <span>
                    {schedules}만 개
                </span>의 여행 일정
            </Item>
            <Awards 
                google={["2018 구글 플레이스토어","올해의 앱 최우수상 수상"]} 
                apple={["2018 애플 앱스토어","오늘의 여행앱 선정"]}
            />
        </Container>
    )
}

export default Popularity;

const Container = styled.div`
    padding: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align:left;
    padding-top:150px;
    margin-left:623px;

    -webkit-animation: ${fadeIn} 700ms ease-in-out 200ms;
    -moz-animation: ${fadeIn} 700ms ease-in-out 200ms;
    -ms-animation: ${fadeIn} 700ms ease-in-out 200ms;
    -o-animation: ${fadeIn} 700ms ease-in-out 200ms;
    animation:${fadeIn} 700ms ease-in-out 200ms;
`

const Item = styled.div`
    color:#3a3a3a;
    font-family:sans-serif;
    font-size:36px;
    -webkit-letter-spacing:-1px;
    -moz-letter-spacing:-1px;
    -ms-letter-spacing:-1px;
    letter-spacing:-1px;
    margin-bottom:20px;
    
    & span {
        font-weight:bold; 
    }  
`