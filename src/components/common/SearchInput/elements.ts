import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.blackGray};
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-top: 10px;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.blueGray};
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "2rem",
}))`
  background-color: transparent;
  color: ${(props) => props.theme.colors.blueGray};
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.blueGray};
  }
`;
