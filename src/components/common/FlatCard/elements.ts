import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { H2, Subtitle2 } from "../typography";

export const Container: any = styled.article`
  height: 100%;
  width: 100%;
  grid-row: ${({ span }: any) => `span ${span}`};
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.black};
`;

export const Layer: StyledComponent<
  "div",
  DefaultTheme,
  { hasImage: boolean; imageUrl: string },
  never
> = styled.div`
  height: calc(100% - 55px);
  border-radius: ${(props) => props.theme.borderRadius};
  background-image: ${({ imageUrl }: any) => `url(${imageUrl})`};
  background-size: cover;
  width: 100%;
`;

export const Description = styled.div`
  width: 100%;
  height: 55px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title: StyledComponent<"h2", DefaultTheme, {}, never> = styled(H2)`
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
  font-size: 12px;
  margin-top: 2px;
`;

export const TypeChip = styled.span`
  background-color: #202029;
  font-size: 12px;
  padding: 5px 12px;
  color: ${(props: any) => props.theme.colors.gray};
  border-radius: 6px;
  display: inline-block;
  text-transform: lowercase;
  &::first-letter {
    text-transform: capitalize;
  }
`;
