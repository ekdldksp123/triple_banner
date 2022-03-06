/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React from "react";
import { fadeIn } from "../styles/common";
import { LogoProps } from "../types/props";

const Logo:React.FC<LogoProps> = ({ referenceDate }) => {
    return <Content>{`${referenceDate} 기준`}</Content>
}

export default Logo;

const Content = styled.section`
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;

    box-sizing: border-box;
    background-image: url(../../images/triple@2x.png);
    background-repeat: no-repeat;
    text-align: center;
    font-family: sans-serif;
    color: rgba(58, 58, 58, 0.7);

    -webkit-animation: ${fadeIn} 700ms ease-in-out 500ms;
    -moz-animation: ${fadeIn} 700ms ease-in-out 500ms;
    -ms-animation: ${fadeIn} 700ms ease-in-out 500ms;
    -o-animation: ${fadeIn} 700ms ease-in-out 500ms;
    animation:${fadeIn} 700ms ease-in-out 500ms;
`
