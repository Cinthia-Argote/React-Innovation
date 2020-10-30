import React from "react";
import styled, { keyframes } from "styled-components";
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100px;
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot: any = styled.div`
  background-color: ${(props) => props.theme.colors.blueGray};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props: any) => props.delay};
`;
const LoadingIndicator: React.FC = () => {
  return (
    <MainWrapper>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </MainWrapper>
  );
};
export default LoadingIndicator;
