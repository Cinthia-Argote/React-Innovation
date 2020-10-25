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
  OptionsContainer,
  ResultsContainer,
} from "./elements";

import {
  InstantSearch,
  Hits,
  connectSearchBox,
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
          <OptionsContainer>asd</OptionsContainer>
          <ResultsContainer className="body-content">
            <Hits hitComponent={DetailedCard} />
          </ResultsContainer>
        </Container>
      </InstantSearch>
    </CenterModal>
  );
};

export default SearchModal;
