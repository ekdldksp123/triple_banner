/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React from "react";
import { PopularityProps } from "../types/props";
import { useSpring, animated, easings  } from "react-spring";
import { fadeIn } from "../styles/common";
import Awards from "./awards";

const Popularity:React.FC<PopularityProps> = ({ numberOfTravelers, numberOfReviews, numberOfSchedules }) => {
    
    const { travelers, reviews, schedules } = useSpring({
        travelers: 0,
        reviews: 0,
        schedules: 0,
        from: {
            opacity: 0,
            travelers: 0,
            reviews: 0,
            schedules: 0,
        },
        to: { 
            opacity: 1,
            travelers: numberOfTravelers,
            reviews: numberOfReviews,
            schedules: numberOfSchedules
        },
        config: { duration: 2000, easing: easings.easeInOutQuad }
    });

    return (
        <Container>
            <Item>
                <span>
                    <animated.span>
                        { travelers.to((travelers) => Math.floor(travelers)) }
                    </animated.span>만 명
                </span>의 여행자
            </Item>
            <Item>
                <span>
                    <animated.span>
                        { reviews.to((reviews) => Math.floor(reviews)) }
                    </animated.span>만 개
                </span>의 여행 리뷰
            </Item>
            <Item>
                <span>
                    <animated.span>
                        { schedules.to((schedules) => Math.floor(schedules)) }
                    </animated.span>만 개
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

    -webkit-animation: ${fadeIn} 700ms ease-in-out 300ms;
    -moz-animation: ${fadeIn} 700ms ease-in-out 300ms;
    -ms-animation: ${fadeIn} 700ms ease-in-out 300ms;
    -o-animation: ${fadeIn} 700ms ease-in-out 300ms;
    animation:${fadeIn} 700ms ease-in-out 300ms;
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