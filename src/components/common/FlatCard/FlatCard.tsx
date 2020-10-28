import React from "react";

import { Container, Layer, Title, Subtitle, Description } from "./elements";

interface Props {
  item: any;
}

const FlatCard: React.FC<Props> = ({ item }) => {
  const hasImage = item.image || item.activities[0].image;
  const cardImage = item.image || item.activities[0].image || "";
  const cardTitle = item.title || item.activities[0].title;
  const span = hasImage ? 3 : 5;
  return (
    <Container span={span}>
      <Layer hasImage={hasImage} imageUrl={cardImage.src} />
      <Description>
        <Title hasImage={hasImage}>{cardTitle}</Title>
        <Subtitle hasImage={hasImage}>{item.creationDate}</Subtitle>
      </Description>
    </Container>
  );
};

export default FlatCard;
