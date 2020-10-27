import React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { H1, Subtitle1 } from "../../../common/typography";
import actio from "../../../../images/actio_logo.svg";
import NavBar from "../../../common/NavBar/NavBar";
import IconButton from "../../../common/IconButton/IconButton";

const Container = styled.header`
  width: 100%;
`;

const HomeTitle = styled.div`
  padding: ${(props) => props.theme.mainPadding};
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

interface Props {
  onSearchOpt?: () => void;
}
const HomeHeader: React.FC<Props> = ({ onSearchOpt }) => {
  return (
    <Container>
      <NavBar
        leftMenu={<img src={actio} alt="actio" width="30px" />}
        rightMenu={<IconButton icon={faSearch} onClick={onSearchOpt} />}
      />
      <HomeTitle>
        <H1>Actio</H1>
        <Subtitle1>Find all kinds of events</Subtitle1>
      </HomeTitle>
    </Container>
  );
};

export default HomeHeader;
