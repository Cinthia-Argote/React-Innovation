import React from "react";
import { CenterModal } from "react-spring-modal";
import "react-spring-modal/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import GridDetailedList from "../GridDetailedList/GridDetailedList";
import SearchInput from "../SearchInput/SearchInput";
import {
  Container,
  SearchBarContainer,
  CloseOption,
  OptionsContainer,
  ResultsContainer,
} from "./elements";
import { fakeItems } from "../../views/Home/Home";

import algoliasearch from "algoliasearch";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Stats,
  SortBy,
  Pagination,
  RefinementList,
  connectRefinementList,
  connectSearchBox,
} from "react-instantsearch-dom";
import DetailedCard from "../DetailedCard/DetailedCard";

const searchClient = algoliasearch(
  "95Q7KSV3G7",
  "6763237f2120d815abaaf7be71233f09"
);

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
      <InstantSearch searchClient={searchClient} indexName="events">
        <Container>
          <SearchBarContainer>
            <CustomSearchInput />
            <CloseOption onClick={props.onRequestClose}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </CloseOption>
          </SearchBarContainer>
          <OptionsContainer>asd</OptionsContainer>
          <ResultsContainer className="body-content">
            {/*<GridDetailedList items={fakeItems} />*/}

            <Hits hitComponent={DetailedCard} />
          </ResultsContainer>
        </Container>
      </InstantSearch>
    </CenterModal>
  );
};

export default SearchModal;
