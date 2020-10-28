import React, { useState } from "react";

import EventList from "./components/EventsList";
import HomeHeader from "./components/HomeHeader";
import SearchModal from "../../common/SearchModal/SearchModal";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <HomeHeader onSearchOpt={() => setIsOpen(true)} />
      <EventList />
    </>
  );
};
export default Home;
