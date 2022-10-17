import styled, { keyframes } from "styled-components";
import { primary, secondary } from "../../../styles/colors";

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
const barprogress = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(900%);
    }
`;

export const CircularProgress = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border: 4px solid ${secondary[300]};
  border-left-color: transparent;
  animation: ${rotate} 800ms infinite ease-in-out;
  border-radius: 50%;
`;

export const BarProgress = styled.div`
  width: 100%;
  height: 4px;
  display: flex;
  justify-content: flex-start;
  ::after {
    content: "";
    background-color: ${primary[400]};
    width: 15%;
    height: 100%;
    animation: ${barprogress} 1s infinite ease-in;
    border-radius: 3px;
  }
`;
