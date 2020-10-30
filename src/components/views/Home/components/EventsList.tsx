import React from "react";
import { useQuery } from "@apollo/client";

import GridFlatList from "../../../common/GridFlatList/GridFlatList";
import { GET_EVENTS } from "../../../../services/events";
import LoadingIndicator from "../../../common/LoadingIndicator/LoadingIndicator";

const EventList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);
  if (loading) return <LoadingIndicator />;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <GridFlatList items={data.publishedEvents.data} />
    </>
  );
};

export default EventList;
