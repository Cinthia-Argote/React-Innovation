import React from "react";
import styled from "styled-components";

import DetailedCard from "../DetailedCard/DetailedCard";

const Container = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-auto-rows: 130px;
`;

interface Props {
  items?: any[];
}

const GridDetailedList: React.FC<Props> = ({ items = [] }) => {
  return (
    <Container>
      {items.map((item) => (
        <DetailedCard key={item.id} hit={item} />
      ))}
    </Container>
  );
};

export default GridDetailedList;
