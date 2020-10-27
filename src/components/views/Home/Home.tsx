import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import GridFlatList from "../../common/GridFlatList/GridFlatList";
import SearchModal from "../../common/SearchModal/SearchModal";
import { GET_EVENTS } from "../../../services/events";
import HomeHeader from "./components/HomeHeader";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_EVENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <SearchModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <HomeHeader onSearchOpt={() => setIsOpen(true)} />
      <GridFlatList items={data.publishedEvents.data} />
    </>
  );
};
export default Home;
