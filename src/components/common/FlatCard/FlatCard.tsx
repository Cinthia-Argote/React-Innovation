import React from "react";

import {
  Container,
  Layer,
  Title,
  Subtitle,
  Description,
  CardHeader,
} from "./elements";

interface Props {
  item: any;
}

const FlatCard: React.FC<Props> = ({ item }) => {
  const hasImage = item.image || item.activities[0].image;
  const cardImage = item.image || item.activities[0].image || "";
  const cardTitle = item.title || item.activities[0].title;

  return (
    <Container>
      <CardHeader>
        <Title>{cardTitle}</Title>
      </CardHeader>
      <Layer hasImage={hasImage} imageUrl={cardImage.src} />
      <Description>
        <Subtitle hasImage={hasImage}>{item.creationDate}</Subtitle>
      </Description>
    </Container>
  );
};

export default FlatCard;
