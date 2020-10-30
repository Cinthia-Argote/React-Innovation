import React from "react";

import {
  Container,
  Layer,
  Title,
  Subtitle,
  Description,
  TypeChip,
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
      <Layer hasImage={hasImage} imageUrl={cardImage.src} />
      <Description>
        <div>
          <Title>{cardTitle}</Title>
          <Subtitle hasImage={hasImage}>{item.creationDate}</Subtitle>
        </div>
        <div>
          <TypeChip>{item.eventType.replace("_", " ")}</TypeChip>
        </div>
      </Description>
    </Container>
  );
};

export default FlatCard;
