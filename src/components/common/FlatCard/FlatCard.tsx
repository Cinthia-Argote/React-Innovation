import React from "react";

import { Container, Layer, Title, Subtitle } from "./elements";

interface Props {
  item: any;
}

const FlatCard: React.FC<Props> = ({ item }) => {
  const hasImage = item.image;
  const span = hasImage ? item.span : 1;
  return (
    <Container span={span} imageUrl={item.image}>
      <Layer hasImage={hasImage}>
        <Title hasImage={hasImage}>{item.title}</Title>
        <Subtitle hasImage={hasImage}>{item.date}</Subtitle>
      </Layer>
    </Container>
  );
};

export default FlatCard;
