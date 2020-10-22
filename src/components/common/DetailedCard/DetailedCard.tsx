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
  item: any;
}

const DetailedCard: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      {item.image && <Image src={item.image} />}
      <Information>
        <Title>{item.title}</Title>
        <Subtitle>{item.date}</Subtitle>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          unde accusamus excepturi, commodi aperiam exercitationem architecto.
        </Description>
      </Information>
    </Container>
  );
};

export default DetailedCard;
