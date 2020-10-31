import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.lightGray};
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;
