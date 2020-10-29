import React from "react";
import { CenterModal } from "react-spring-modal";
import "react-spring-modal/dist/index.css";
import {
  InstantSearch,
  connectSearchBox,
  connectStateResults,
  connectRefinementList,
} from "react-instantsearch-dom";

import SearchInput from "../SearchInput/SearchInput";
import {
  Container,
  SearchBarContainer,
  CloseOption,
  NoResults,
  ResultsContainer,
  OptionsContainer,
} from "./elements";

import { useTransition, animated, useSpring } from "react-spring";

import DetailedCard from "../DetailedCard/DetailedCard";
import clientAlgolia from "../../../config/algolia";
import RefinementList from "../RefinementListAlgolia/RefinementListAlgolia";

const FilterEventType = connectRefinementList(RefinementList);

const config = { mass: 10, tension: 2000, friction: 200 };

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

const Results = connectStateResults(({ searchState, searchResults }: any) => {
  const { query = "" } = searchState;
  const { hits = [] } = searchResults || {};

  const transitions = useTransition(hits, (item) => item.id, {
    config,
    from: {
      transform: "translate3d(150px,0,0)",
      opacity: 0,
    },
    enter: {
      transform: "translate3d(0,0,0)",
      opacity: 1,
    },
    leave: {
      transform: "translate3d(-150px,0,0)",
      opacity: 0,
    },
  });

  const props = useSpring({
    opacity: hits.length === 0 ? 1 : 0,
    position: "absolute",
    top: 0,
    left: 0,
  });

  return (
    <>
      {transitions.map(({ item, key, props }: any) => (
        <animated.div key={key} style={props}>
          <DetailedCard hit={item} />
        </animated.div>
      ))}
      <animated.div style={props}>
        {query && (
          <NoResults>
            No results have been found for <strong>{query}</strong>.
          </NoResults>
        )}
      </animated.div>
    </>
  );
});

const SearchModal: React.FC<Props> = (props) => {
  return (
    <CenterModal {...props}>
      <InstantSearch searchClient={clientAlgolia} indexName="eventTest">
        <Container>
          <SearchBarContainer>
            <CustomSearchInput />
            <CloseOption onClick={props.onRequestClose}>Cancel</CloseOption>
          </SearchBarContainer>
          <OptionsContainer>
            <FilterEventType attribute="eventType" />
          </OptionsContainer>
          <ResultsContainer>
            <Results />
          </ResultsContainer>
        </Container>
      </InstantSearch>
    </CenterModal>
  );
};

export default SearchModal;
