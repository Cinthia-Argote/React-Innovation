import React from "react";
import { CenterModal } from "react-spring-modal";
import "react-spring-modal/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import SearchInput from "../SearchInput/SearchInput";
import {
  Container,
  SearchBarContainer,
  CloseOption,
  ResultsContainer,
} from "./elements";

import {
  InstantSearch,
  Hits,
  connectSearchBox,
  connectStateResults,
} from "react-instantsearch-dom";
import DetailedCard from "../DetailedCard/DetailedCard";
import clientAlgolia from '../../../config/algolia';

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
  ({ searchState, searchResults, children }: any) =>
    {
      const { query = '' } = searchState;
      const { hits = [] } = searchResults || {};
      if(query) {
        if(hits.length === 0) {
          return <div style={{ color: 'white'}}>No results have been found for {query}.</div>
        }
        return <ResultsContainer>{children}</ResultsContainer>;
      }
        return <div />
    }
);

const SearchModal: React.FC<Props> = (props) => {
  return (
    <CenterModal {...props}>
      <InstantSearch searchClient={clientAlgolia} indexName="events">
        <Container>
          <SearchBarContainer>
            <CustomSearchInput />
            <CloseOption onClick={props.onRequestClose}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </CloseOption>
          </SearchBarContainer>
          {/* <ResultsContainer className="body-content">
            <Hits hitComponent={DetailedCard} />
          </ResultsContainer> */}
          <Results>
          <Hits hitComponent={DetailedCard} />
          </Results>
        </Container>
      </InstantSearch>
    </CenterModal>
  );
};

export default SearchModal;
