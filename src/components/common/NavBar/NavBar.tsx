import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.mainPadding};
`;

const LeftMenu = styled.div`
  width: auto;
  height: 100%;
`;
const RightMenu = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

interface Props {
  rightMenu?: any;
  leftMenu?: any;
}
const NavBar: React.FC<Props> = ({ rightMenu, leftMenu }) => {
  return (
    <Container>
      <LeftMenu>{leftMenu}</LeftMenu>
      <RightMenu>{rightMenu}</RightMenu>
    </Container>
  );
};

export default NavBar;
