import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  height: 100vh;
  overflow-y: auto;
  width: 100vw;
  max-width: 500px;
  padding: ${(props) => props.theme.mainPadding};
  padding-top: 30px;

  @media ${(props) => props.theme.devices.tablet} {
    height: 80vh;
  } ;
`;

export const CloseOption = styled.div`
  width: 80px;
  font-weight: 900;
  height: 40px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.gray};
  text-align: center;
  padding-top: 10px;
  font-size: 14px;
  cursor: pointer;
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  padding: 6px 0;
`;

export const ResultsContainer = styled.section``;
