import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { H2, Subtitle2 } from "../typography";

export const Container: any = styled.article`
  height: 100%;
  width: 100%;
  grid-row: ${({ span }: any) => `span ${span}`};
  cursor: pointer;
`;

export const Layer: StyledComponent<
  "div",
  DefaultTheme,
  { hasImage: boolean; imageUrl: string },
  never
> = styled.div`
  height: calc(100% - 60px);
  border-radius: ${(props) => props.theme.borderRadius};
  background-image: ${({ imageUrl }: any) => `url(${imageUrl})`};
  background-size: cover;
  width: 100%;
`;

export const Description = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 2px;
`;

export const Title: StyledComponent<
  "h2",
  DefaultTheme,
  { hasImage: boolean },
  never
> = styled(H2)`
  color: ${(props: any) => props.theme.colors.gray};
  font-size: 15px;
  line-height: 14px;
`;

export const Subtitle: StyledComponent<
  "p",
  DefaultTheme,
  { hasImage: boolean },
  never
> = styled(Subtitle2)`
  color: ${(props) => props.theme.colors.dimGray};
  font-size: 14px;
  font-weight: 700;
`;
