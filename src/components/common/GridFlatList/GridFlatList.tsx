import React from "react";
import styled from "styled-components";
import { useTrail, animated } from "react-spring";

import FlatCard from "../FlatCard/FlatCard";
//5,2000,200
const config = { mass: 10, tension: 2000, friction: 200 };

const Container = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-auto-rows: 60px;
  padding: ${(props) => props.theme.mainPadding};
`;

const Item: any = styled(animated.div)`
  grid-row: ${(props: any) => `span ${props.span}`};
`;

const calSpanSize = (event: any) => {
  const hasImage = event.image || event.activities[0].image;
  if (!hasImage) return 1;
  return event.eventType === "SINGLE" ? 4 : 5;
};

interface Props {
  items?: any[];
}

const GridFlatList: React.FC<Props> = ({ items = [] }) => {
  const trail = useTrail(items.length, {
    config,
    from: {
      opacity: 0,
      transform: "scale(0.2)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  });

  return (
    <Container>
      {trail.map((props, index) => (
        <Item
          key={items[index].id}
          style={props}
          span={calSpanSize(items[index])}
        >
          <FlatCard item={items[index]} />
        </Item>
      ))}
    </Container>
  );
};

export default GridFlatList;
