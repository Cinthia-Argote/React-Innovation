import styled from "styled-components";

export const ContainerList = styled.ul`
  padding: 2px;
`;

export const ListItem: any = styled.li`
  background-color: ${(props: any) =>
    props.isRefined ? props.theme.colors.main : props.theme.colors.blackGray};
  display: inline-block;
  padding: 5px 15px;
  margin: 3px 5px;
  color: ${(props) => props.theme.colors.gray};
  text-transform: lowercase;
  &::first-letter {
    text-transform: capitalize;
  }
  cursor: pointer;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
`;

export const ContainerFilter = styled.div``;
