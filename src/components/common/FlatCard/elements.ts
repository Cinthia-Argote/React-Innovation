import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { H2, Subtitle2 } from "../typography";

export const Container: StyledComponent<
  "article",
  DefaultTheme,
  { span: number; imageUrl: string },
  never
> = styled.article`
  height: 100%;
  width: 100%;
  position: relative;
  grid-row: ${({ span }: any) => `span ${span}`};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius};
  background-image: ${({ imageUrl }: any) => `url(${imageUrl})`};
  background-size: cover;
  transition: 0.4s all;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const Layer: StyledComponent<
  "div",
  DefaultTheme,
  { hasImage: boolean },
  never
> = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.2rem;
  background-image: ${({ hasImage }: any) =>
    hasImage
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent);`
      : "none"};
`;

export const Title: StyledComponent<
  "h2",
  DefaultTheme,
  { hasImage: boolean },
  never
> = styled(H2)`
  color: ${(props: any) =>
    props.hasImage ? props.theme.colors.main : props.theme.colors.blackGray};
`;

export const Subtitle: StyledComponent<
  "p",
  DefaultTheme,
  { hasImage: boolean },
  never
> = styled(Subtitle2)`
  color: ${(props: any) =>
    props.hasImage ? props.theme.colors.lightGray : props.theme.colors.gray};
  margin-top: 5px;
  font-weight: 900;
`;
