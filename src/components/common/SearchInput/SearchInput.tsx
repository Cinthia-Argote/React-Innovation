import React from "react";
import { Container, IconContainer, Input } from "./elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </IconContainer>
      <Input placeholder="Search..." />
    </Container>
  );
};

export default SearchInput;
