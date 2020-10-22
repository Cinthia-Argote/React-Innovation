import React from "react";
import {
  Container,
  Img,
  ChildrenSection,
  RightActions,
  ImageLayer,
} from "./elements";
import actioLogo from "../../../images/actio_logo.svg";

interface Props {
  height?: number;
  bgImage: string;
  rightActions?: any;
}

const ImageHeader: React.FC<Props> = ({
  height = 150,
  bgImage,
  children,
  rightActions,
}) => {
  return (
    <Container height={height}>
      <ImageLayer bgImage={bgImage} />
      <Img src={actioLogo} alt="actio" />
      <RightActions>{rightActions}</RightActions>
      <ChildrenSection>{children}</ChildrenSection>
    </Container>
  );
};

export default ImageHeader;
