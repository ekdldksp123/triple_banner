import styled from '@emotion/styled'

import { fadeIn } from '../styles/common'
import { AwardsProps } from '../types/props'
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-use-before-define */

const Awards: React.FC<AwardsProps> = ({ google, apple }) => {
  return (
    <Container>
      <GoogleItem>
        {google[0]}
        <br />
        {google[1]}
      </GoogleItem>
      <AppleItem>
        {apple[0]}
        <br />
        {apple[1]}
      </AppleItem>
    </Container>
  )
}

export default Awards

const Container = styled.div`
  white-space: nowrap;
  width: 300px;
  margin: 50px auto 80px 0;
  text-align: left;

  -webkit-animation: ${fadeIn} 700ms ease-in-out 300ms;
  -moz-animation: ${fadeIn} 700ms ease-in-out 300ms;
  -ms-animation: ${fadeIn} 700ms ease-in-out 300ms;
  -o-animation: ${fadeIn} 700ms ease-in-out 300ms;
  animation: ${fadeIn} 700ms ease-in-out 300ms;
`
const GoogleItem = styled.div`
  display: inline-block;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  background-image: url('/images/play-store@2x.png');
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);

  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0 5px 62px;
  line-height: 22px;
  margin-right: 39px;

  &:nth-of-type(1) {
    margin-right: 28.5px;
  }
`

const AppleItem = styled.div`
  display: inline-block;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
  background-image: url('/images/app-store@2x.png');
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);

  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0 5px 62px;
  line-height: 22px;
  margin-right: 39px;

  &:nth-of-type(1) {
    margin-right: 28.5px;
  }
`
