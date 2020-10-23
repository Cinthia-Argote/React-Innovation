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
  return (
    <Container>
      <Image
        src="https://i.pinimg.com/originals/13/be/12/13be12fc7291ea07d43667a453474b5b.jpg"
        alt="hasta abajo "
        width="10"
      />
      <Information>
        <Title>{hit.title ? hit.title : "sin titulo"}</Title>
        <Subtitle>{hit.status}</Subtitle>
        <Description>{hit.description}</Description>
      </Information>
    </Container>
  );
};

export default DetailedCard;
