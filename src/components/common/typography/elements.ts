import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 1.9rem;
  line-height: 1.9rem;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 900;
`;
export const Subtitle1 = styled.p`
  font-size: 1.15rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.colors.dimGray};
  font-weight: 700;
`;

export const H2 = styled.h2`
  font-size: 1.3rem;
  line-height: 1.3rem;
  color: inherit;
  font-weight: 900;
`;

export const Subtitle2 = styled.p`
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: inherit;
  font-weight: 700;
`;

export const H3 = styled.h3`
  font-size: 1.1rem;
  line-height: 1.1rem;
  color: inherit;
  font-weight: 900;
`;

export const Subtitle3 = styled.p`
  font-size: 0.9rem;
  line-height: 1rem;
  color: inherit;
  font-weight: 700;
`;
