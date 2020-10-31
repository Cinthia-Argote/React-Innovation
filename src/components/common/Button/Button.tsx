import React from "react";
import { Container } from "./elements";

const Button: React.FC<any> = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
