import styled from "styled-components";
import { H3, Subtitle3 } from "../typography";

export const Container = styled.article`
  height: 100%;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 10px;
  display: flex;
  border-top: ${(props) => `solid 1px ${props.theme.colors.blackGray}`};
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.blackGray};
  margin-right: 20px;
`;

export const Information = styled.div`
  overflow: hidden;
`;

export const Title = styled(H3)`
  color: ${(props) => props.theme.colors.lightGray};
`;

export const Subtitle = styled(Subtitle3)`
  color: #676781;
  margin: 5px 0;
`;

export const Description = styled.p`
  color: #676781;
  font-size: 12px;
`;
