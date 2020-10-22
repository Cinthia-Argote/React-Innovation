import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { H1, Subtitle1 } from "../../../common/typography";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

const ActionBtn = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.dimGray};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.blueGray};
    color: ${(props) => props.theme.colors.blackGray};
  }
`;

interface Props {
  onSearchClick?: () => void;
}

const TitleAndActionBar: React.FC<Props> = ({ onSearchClick }) => {
  return (
    <Container>
      <div>
        <H1>Actio</H1>
        <Subtitle1>Find all kind of events</Subtitle1>
      </div>
      <ActionBtn onClick={onSearchClick}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </ActionBtn>
    </Container>
  );
};

export default TitleAndActionBar;
