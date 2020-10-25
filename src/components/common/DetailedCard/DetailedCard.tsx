import React from "react";
import {
  Container,
  Image,
  Title,
  Subtitle,
  Information,
  Description,
} from "./elements";

interface Props {
  hit: any;
}

const DetailedCard: React.FC<Props> = ({ hit }) => {
  const { activities = [], image = {}, onlineVenue = '', physicalVenue = '' } = hit;
  const { title, image: imageData = {}, venue = '' } = activities[0] || {};
  return (
    <Container>
      <Image
        src={image.src || imageData.src}
        alt="hasta abajo "
        width="10"
      />
      <Information>
        {<Title>{hit.title ? hit.title : title}</Title>}
        <Subtitle>{venue || onlineVenue}</Subtitle>
        {
          physicalVenue && <Subtitle>{physicalVenue}</Subtitle>
        }
        <Description>{hit.description}</Description>
      </Information>
    </Container>
  );
};

export default DetailedCard;
