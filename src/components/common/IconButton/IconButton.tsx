import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

const Container = styled.header`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.gray};
`;

interface Props {
  icon: IconDefinition;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </Container>
  );
};

export default IconButton;
