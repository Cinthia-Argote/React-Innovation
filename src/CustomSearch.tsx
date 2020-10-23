import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination, RefinementList, connectRefinementList } from 'react-instantsearch-dom';
import './Search.css'

// const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76")
const searchClient = algoliasearch("95Q7KSV3G7", "6763237f2120d815abaaf7be71233f09")

const TestRefinementList = (props: any) => {
  console.log('TestRefinementList', props);
  const { items = [], currentRefinement, refine} = props;
  return (
    <div>
    <div>Current refinement: {currentRefinement.join(', ')}</div>
    <ul>
      {items.map((item: { label: string; isRefined: any; value: any; count: React.ReactNode; }) => (
        <li key={item.label}>
          <a
            href="#"
            style={{ fontWeight: item.isRefined ? 'bold' : 'unset' }}
            onClick={event => {
              event.preventDefault();
              refine(item.value);
            }}
          >
            {item.label} ({item.count})
          </a>
        </li>
      ))}
    </ul>
  </div>
  )
}; 
const CustomRefinementList = connectRefinementList(TestRefinementList);

function Search() {
    return (
        < InstantSearch searchClient={searchClient} indexName="events" >
            <Header />
            <div style={{ textAlign: "left", width: "250px"}}>
                <h2>Event Type</h2>
                <RefinementList attribute="eventType" />
                <CustomRefinementList attribute="eventType" />
            </div>
            <div className="body-content">
                <Content/>
            </div>
        </InstantSearch >
    );        
};
const Header = () => (
    <header className="header">
        <SearchBox
            translations={{ placeholder: 'Search for Events' }}
        />
    </header>
);

const Hit = ({ hit = { image:'', name: '', rating: '', genre: []} }) => (
    <a href={"/"} >
        <div className="card">
            <div className="card-image">
                <img src={hit.image} alt={hit.name} className="image"/>
            </div>
            <div className="card-contents">
                
                <Highlight attribute="title" hit={hit} className="card-title" />
                <Highlight attribute="year" hit={hit}  className="card-year"/>
                <div className="card-rating">Rating: {hit.rating}</div>
                <div className="card-genre"> <span>{hit.genre[0]}</span> <span>{hit.genre[1]}</span> </div>
            </div>
        </div>
    </a>
);

const HitEvent = (props: any) => {
  const { hit = {} } = props
  console.log('props', props);
  return (
    <div className="card">
      <div className="card-contents">     
        <Highlight attribute="title" hit={hit} className="card-title" />
        <Highlight attribute="publishingDate" hit={hit}  className="card-year"/>
        <div className="card-rating">status: {hit.status}</div>
       
      </div>
    </div>
  )
};
const Content = () => (
    <main>
        <div className="information">
            <div className="stats"> <Stats/> </div>
            <div className="">
               
                 {/* <SortBy defaultRefinement="events"
                    items={[
                      { value: 'instant_search', label: 'Featured' },
                      { value: 'instant_search_price_asc', label: 'Price asc.' },
                      { value: 'instant_search_price_desc', label: 'Price desc.' },
                    ]}
                    transformItems={(items: any[]) =>
                      items.map((item: { label: string; }) => ({
                        ...item,
                        label: item.label.toUpperCase(),
                      }))}
                /> */}
                 
            </div>
        </div>
        <Hits hitComponent={HitEvent} />
        <div> <Pagination/></div>
    </main>
   
);
export default Search;