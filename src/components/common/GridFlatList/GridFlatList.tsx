import React, { useState } from "react";
import styled from "styled-components";
import { useTrail } from "react-spring";

import FlatCard from "../FlatCard/FlatCard";

const config = { mass: 5, tension: 2000, friction: 200 };

const Container = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 80px;
  padding: ${(props) => props.theme.mainPadding};
`;

interface Props {
  items?: any[];
}

const GridFlatList: React.FC<Props> = ({ items = [] }) => {
  const [toggle] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Container>
      {trail.map(({ x, height, ...rest }: any, index) => (
        <FlatCard
          key={items[index].id}
          item={items[index]}
          style={{
            ...rest,
            transform: x.interpolate((x: number) => `translate3d(0,${x}px,0)`),
          }}
        />
      ))}
    </Container>
  );
};

export default GridFlatList;
