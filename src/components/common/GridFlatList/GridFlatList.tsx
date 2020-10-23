import React from "react";
import styled from "styled-components";

import FlatCard from "../FlatCard/FlatCard";

const Container = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 120px;
  padding: ${(props) => props.theme.mainPadding};
`;

interface Props {
  items?: any[];
}

const GridFlatList: React.FC<Props> = ({ items = [] }) => {
  return (
    <Container>
      {items.map((item) => (
        <FlatCard key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default GridFlatList;
