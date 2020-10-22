import React, { useState } from "react";
import ImageHeader from "../../common/ImageHeader/ImageHeader";
import actio from "../../../images/actio.svg";
import search from "../../../images/search.svg";
import TitleAndActionBar from "./components/TitleAndActionBar";
import GridFlatList from "../../common/GridFlatList/GridFlatList";
import styled from "styled-components";
import SearchInput from "../../common/SearchInput/SearchInput";
import GridDetailedList from "../../common/GridDetailedList/GridDetailedList";

const fakeItems = [
  {
    id: 1,
    title: "First title",
    date: "12 jul",
    span: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzAfcKqQpwJ2knr15OvlI8YzS4UUg_-_xTsw&usqp=CAU",
  },
  {
    id: 2,
    title: "First title dos e n uno",
    date: "12 jul",
    span: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzAfcKqQpwJ2knr15OvlI8YzS4UUg_-_xTsw&usqp=CAU",
  },
  {
    id: 3,
    title: "First title omg",
    date: "12 jul",
    span: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzAfcKqQpwJ2knr15OvlI8YzS4UUg_-_xTsw&usqp=CAU",
  },
  {
    id: 4,
    title: "First title mama",
    date: "1 jul",
    span: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzAfcKqQpwJ2knr15OvlI8YzS4UUg_-_xTsw&usqp=CAU",
  },
  {
    id: 6,
    title: "First title mama",
    date: "1 jul",
    span: 3,
  },
  {
    id: 5,
    title: "First title mama",
    date: "1 jul",
    span: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzAfcKqQpwJ2knr15OvlI8YzS4UUg_-_xTsw&usqp=CAU",
  },
];

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  height: 100vh;
  overflow-y: auto;
`;

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      {isOpen ? (
        <Container>
          <ImageHeader
            bgImage={search}
            rightActions={<div onClick={() => setIsOpen(false)}>X</div>}
          >
            <SearchInput />
          </ImageHeader>
          <GridDetailedList items={fakeItems} />
        </Container>
      ) : (
        <>
          <ImageHeader bgImage={actio}>
            <TitleAndActionBar onSearchClick={() => setIsOpen(true)} />
          </ImageHeader>
          <GridFlatList items={fakeItems} />
        </>
      )}
    </>
  );
};
export default Home;
