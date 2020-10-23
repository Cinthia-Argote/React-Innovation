import React from "react";
import { Container, IconContainer, Input } from "./elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  value: string;
  onChange: (e: any) => void;
  type: string;
}

const SearchInput: React.FC<Props> = ({ value, onChange, type }) => {
  return (
    <Container>
      <IconContainer>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </IconContainer>
      <Input
        value={value}
        type={type}
        onChange={onChange}
        placeholder="Search..."
      />
    </Container>
  );
};

export default SearchInput;
