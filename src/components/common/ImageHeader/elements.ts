import styled, { StyledComponent, DefaultTheme } from "styled-components";

export const Container: StyledComponent<
  "header",
  DefaultTheme,
  { height: number },
  never
> = styled.header`
  height: ${({ height }: any) => height + "px"};
  padding: ${(props) => props.theme.mainPadding};
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const ImageLayer: StyledComponent<
  "div",
  DefaultTheme,
  { bgImage: string },
  never
> = styled.div`
  position: absolute;
  width: 150%;
  height: 300%;
  top: -30%;
  left: -10%;
  background-image: ${({ bgImage }: any) => `url(${bgImage})`};
  background-size: 100%;
  background-repeat: no-repeat;
  transform: rotate(-5deg);
`;

export const Img = styled.img`
  width: 34px;
  height: 34px;
  position: absolute;
  left: calc(50% - 17px);
`;

export const ChildrenSection = styled.section`
  width: ${(props) =>
    `calc(100% - ${props.theme.mainPadding} - ${props.theme.mainPadding})`};
  height: 50px;
  position: absolute;
  bottom: 26px;
`;

export const RightActions = styled.section`
  position: absolute;
  width: 200px;
  height: 44px;
  top: ${(props) => props.theme.mainPadding};
  right: ${(props) => props.theme.mainPadding};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;
