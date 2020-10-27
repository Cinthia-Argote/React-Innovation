import React from "react";
import { CenterModal } from "react-spring-modal";
import "react-spring-modal/dist/index.css";
import {
  InstantSearch,
  Hits,
  connectSearchBox,
  connectStateResults,
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
import DetailedCard from "../DetailedCard/DetailedCard";
import clientAlgolia from "../../../config/algolia";

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
    if (query) {
      if (hits.length === 0) {
        return (
          <NoResults>
            No results have been found for <strong>{query}</strong>.
          </NoResults>
        );
      }
      return <>{children}</>;
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
          <OptionsContainer>
            Options
          </OptionsContainer>
          <ResultsContainer>
            <Results>
              <Hits hitComponent={DetailedCard} />
            </Results>
          </ResultsContainer>
        </Container>
      </InstantSearch>
    </CenterModal>
  );
};

export default SearchModal;
