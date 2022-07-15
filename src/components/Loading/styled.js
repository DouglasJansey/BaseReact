import styled, { keyframes } from 'styled-components';
import * as colors from '../../config/colors';


const rotate = keyframes`
to {
  transform: rotate(1turn)
}
`;

export const Load = styled.div`
animation: ${rotate} 0.5s linear infinite;
border: 10px solid #fff;
border-top: 10px solid ${colors.primaryColor};
border-radius: 50%;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
width: 80px;
height: 80px;
position: absolute;
z-index: 3;
transform: 300ms;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  font-size: 30px;

  div{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0,0,0,0.8);

  }
  span{
    z-index: 2;
  }
`;
