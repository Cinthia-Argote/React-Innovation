import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch } from 'react-instantsearch-dom';

const searchClient = algoliasearch("95Q7KSV3G7", "6763237f2120d815abaaf7be71233f09")

const algoliaSearch = () => {
    return (
        < InstantSearch searchClient={searchClient} indexName="events" >
            {/* <Header /> custom search input*/}
            <div style={{ textAlign: "left", width: "250px"}}>
                <h2>Event Type</h2>
                {/* <RefinementList attribute="eventType" /> */}
                {/* <CustomRefinementList attribute="eventType" />  filter events*/}
            </div>
            <div className="body-content">
                {/* <Content/> items */}
            </div>
        </InstantSearch >
    );        
};

export default algoliaSearch;