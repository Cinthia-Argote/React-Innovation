import React from "react";
import { CenterModal } from "react-spring-modal";
import "react-spring-modal/dist/index.css";

import SearchInput from "../SearchInput/SearchInput";
import {
  Container,
  SearchBarContainer,
  CloseOption,
  ResultsContainer,
  OptionsContainer,
} from "./elements";

import {
  InstantSearch,
  connectSearchBox,
  connectStateResults,
} from "react-instantsearch-dom";

import { useTrail, animated } from "react-spring";

import DetailedCard from "../DetailedCard/DetailedCard";
import clientAlgolia from "../../../config/algolia";

const config = { mass: 5, tension: 2000, friction: 200 };

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CustomSearchInput = connectSearchBox(
  ({ currentRefinement, isSearchStalled, refine }: any) => (
    <SearchInput
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
  )
);

const Results = connectStateResults(
  ({ searchState, searchResults, children }: any) => {
    const { query = "" } = searchState;
    const { hits = [] } = searchResults || {};

    const trail = useTrail(hits.length, {
      config,
      opacity: query ? 1 : 0,
      x: query ? 0 : 20,
      height: query ? 80 : 0,
      from: { opacity: 0, x: 120, height: 0 },
    });

    if (query) {
      if (hits.length === 0) {
        return (
          <div style={{ color: "white" }}>
            No results have been found for <strong>{query}</strong>.
          </div>
        );
      }
      return (
        <>
          {trail.map(({ x, height, ...rest }: any, index) => (
            <animated.div
              key={hits[index].id}
              style={{
                ...rest,
                transform: x.interpolate((x: any) => `translate3d(0,${x}px,0)`),
              }}
            >
              <DetailedCard hit={hits[index]} />
            </animated.div>
          ))}
        </>
      );
    }
    return <div />;
  }
);

const SearchModal: React.FC<Props> = (props) => {
  return (
    <CenterModal {...props}>
      <InstantSearch searchClient={clientAlgolia} indexName="events">
        <Container>
          <SearchBarContainer>
            <CustomSearchInput />
            <CloseOption onClick={props.onRequestClose}>Cancel</CloseOption>
          </SearchBarContainer>
          <OptionsContainer>options</OptionsContainer>
          <ResultsContainer>
            <Results>{/*<Hits hitComponent={DetailedCard} />*/}</Results>
          </ResultsContainer>
        </Container>
      </InstantSearch>
    </CenterModal>
  );
};

export default SearchModal;
