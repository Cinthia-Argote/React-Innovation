import React from "react";
import CustomHighlight from "../CustomHighlight/CustomHighlight";
import {
  Container,
  Image,
  Subtitle,
  Information,
  Description,
} from "./elements";

interface Props {
  hit: any;
}

const DetailedCard: React.FC<Props> = ({ hit }) => {
  const { activities = [], image = {}, onlineVenue = '', physicalVenue = '', title = '' } = hit;
  const { image: imageData = {}, venue = '' } = activities[0] || {};
  return (
    <Container>
      <Image
        src={image.src || imageData.src}
        alt="hasta abajo "
        width="10"
      />
      <Information>
        {
          title ?  <CustomHighlight attribute="title" hit={hit}>{title}</CustomHighlight>
          : <CustomHighlight attribute="activities[0].title" hit={hit} />
        }
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
