/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React from "react";
import Logo from "./logo";
import Popularity from "./popularity";

const Banner:React.FC = () => {
    return (
        <Container>
            <Section>
                <Logo referenceDate="2021 년 2월"/>
                <Popularity
                    numberOfTravelers={700}
                    numberOfReviews={100}
                    numberOfSchedules={470}
                />
            </Section>
        </Container>
    )
}

export default Banner;

const Container = styled.div`
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
`

const Section = styled.div`
    position: relative;
    margin: 0 auto;
    min-width: 1200px;
    max-width: 100vw;
    height: 552px;
    display: flex;
    justify-content: space-between;
`

